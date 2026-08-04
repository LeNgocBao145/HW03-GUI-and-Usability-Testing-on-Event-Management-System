# Scripts — copy/paste console snippets & DevTools steps

How to use: open the target screen, press **F12** → tab **Console**, paste the snippet, Enter.
Every snippet prints a **verdict-oriented report** (`console.table` / summary line) so the tester can read a signal and decide.

**§12 reminder:** these produce *evidence*, not verdicts. The tester decides P/F.

> Chrome may require typing `allow pasting` once in the Console before the first paste.

Index — script id → items that use it:
| id | Used by | Mode |
| --- | --- | --- |
| [overflow] | IA01-01, IA01-08, IA01-13 | 🔧 |
| [spacing] | IA01-02 | 🔧 |
| [fonts] | IA01-03 | 🔧 |
| [colors] | IA01-04 | 🔧 |
| [contrast] | IA01-05 | 🔧 |
| [i18nkeys] | IA01-07 | 🔧 |
| [alt] | IA01-12 | 🤖 |
| [labels] | IA02-01 | 🤖 |
| [required] | IA02-02 | 🔧 |
| [focusring] | IA02-12, IA03-11 | 🔧 |
| [cursorcheck] | IA03-09 | 🔧 |
| [deeplink] | IA03-06 | 🔧 |
| [offline] | IA04-10 | 🔧 |
| [statuscolor] | IA04-05, IA04-06, IA04-07, IA04-08 | 🔧 |
| [feedbackmonitor] | IA04-01, IA04-02, IA04-09, IA04-10, IA04-11 | 🔧 |
| [modalaudit] | modal-extra-checks | 🔧 |

**Batch runners** (`../scripts/`) bundle everything below, grouped by IA, and print a
per-item verdict line instead of raw tables — prefer these for a full run:
`ia01.js` · `ia02.js` · `ia03.js` · `ia04.js` (+ `c02.js`, a C2-specific composite).
`[statuscolor]` and `[feedbackmonitor]` are the IA-04 halves, both inside `ia04.js`.

---

## [overflow] — IA01-01 / IA01-08 / IA01-13
Detects elements wider than the viewport (real horizontal overflow), ignoring intentional scroll containers.

```js
(() => {
  const de = document.documentElement;
  const pageOverflow = de.scrollWidth > de.clientWidth;
  const vw = de.clientWidth;
  const bad = [];
  document.querySelectorAll('*').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.width === 0) return;
    const cs = getComputedStyle(el);
    const scrolls = /auto|scroll/.test(cs.overflowX);
    if (!scrolls && (r.right > vw + 1 || r.left < -1)) {
      bad.push({ tag: el.tagName.toLowerCase(), cls: (el.className||'').toString().slice(0,45),
                 left: Math.round(r.left), right: Math.round(r.right), overBy: Math.round(r.right - vw) });
    }
  });
  console.log(`%c[overflow] viewport=${vw}px | page overflow: ${pageOverflow ? 'YES' : 'no'} | offending elements: ${bad.length}`,
    'font-weight:bold;color:' + (bad.length ? '#c00' : '#0a0'));
  if (bad.length) console.table(bad.slice(0, 25));
  console.log('Read: 0 offending + page overflow "no" => signal PASS. Elements listed => inspect them (may be an intentional scroll-x table).');
})();
```

## [spacing] — IA01-02
Reports the padding/margin values actually in use and whether they fit a 4px grid.

```js
(() => {
  const tally = {};
  document.querySelectorAll('div,section,header,main,aside,li,td,th,button,input').forEach(el => {
    const cs = getComputedStyle(el);
    ['paddingTop','paddingRight','paddingBottom','paddingLeft','marginTop','marginRight','marginBottom','marginLeft']
      .forEach(p => { const v = parseFloat(cs[p]); if (v > 0) tally[v] = (tally[v]||0) + 1; });
  });
  const rows = Object.entries(tally).map(([px,count]) => ({ px: +px, count, onGrid4: (+px % 4 === 0) }))
    .sort((a,b) => b.count - a.count);
  const off = rows.filter(r => !r.onGrid4);
  console.log(`%c[spacing] distinct values=${rows.length} | off-4px-grid values=${off.length}`,
    'font-weight:bold;color:' + (off.length > rows.length/3 ? '#c60' : '#0a0'));
  console.table(rows.slice(0, 20));
  console.log('Read: a few dominant on-grid values => consistent system (PASS signal). Many scattered off-grid values => ad-hoc spacing.');
})();
```

## [fonts] — IA01-03
Counts font families / sizes / weights to judge typographic consistency.

```js
(() => {
  const fam = {}, size = {}, weight = {};
  document.querySelectorAll('*').forEach(el => {
    if (!el.textContent?.trim() || el.children.length) return;
    const cs = getComputedStyle(el);
    fam[cs.fontFamily.split(',')[0].replace(/["']/g,'')] = (fam[cs.fontFamily.split(',')[0].replace(/["']/g,'')]||0)+1;
    size[cs.fontSize] = (size[cs.fontSize]||0)+1;
    weight[cs.fontWeight] = (weight[cs.fontWeight]||0)+1;
  });
  const t = o => Object.entries(o).map(([k,v])=>({value:k,count:v})).sort((a,b)=>b.count-a.count);
  console.log(`%c[fonts] families=${Object.keys(fam).length} | sizes=${Object.keys(size).length} | weights=${Object.keys(weight).length}`,'font-weight:bold');
  console.log('— families —'); console.table(t(fam));
  console.log('— sizes —');    console.table(t(size).slice(0,15));
  console.log('— weights —');  console.table(t(weight));
  console.log('Read: 1-2 real families (ignore fallback stacks like system-ui/Segoe UI which are ONE stack) + a tiered size set => PASS signal.');
})();
```

## [colors] — IA01-04
Lists distinct text/background colors with usage counts.

```js
(() => {
  const fg = {}, bg = {};
  document.querySelectorAll('*').forEach(el => {
    const cs = getComputedStyle(el);
    if (el.textContent?.trim() && !el.children.length) fg[cs.color] = (fg[cs.color]||0)+1;
    const b = cs.backgroundColor;
    if (b && b !== 'rgba(0, 0, 0, 0)' && b !== 'transparent') bg[b] = (bg[b]||0)+1;
  });
  const t = o => Object.entries(o).map(([k,v])=>({color:k,count:v})).sort((a,b)=>b.count-a.count);
  console.log(`%c[colors] distinct text colors=${Object.keys(fg).length} | distinct backgrounds=${Object.keys(bg).length}`,'font-weight:bold');
  console.log('— text —'); console.table(t(fg).slice(0,20));
  console.log('— background —'); console.table(t(bg).slice(0,20));
  console.log('Read: a small dominant set + few accents => coherent palette (PASS signal). Note: lab()/oklab() values are Chrome computing color-mix()/opacity — not separate brand colors.');
})();
```

## [contrast] — IA01-05
⚠️ **Known limitation:** this parses `rgb()` only. Modern Chrome reports many colors as `lab()`/`oklab()`, which this **cannot** parse → it skips them (previously they produced ~19 bogus fails). **Prefer the DevTools color picker** for the final verdict.

DevTools path (authoritative): inspect the text element → in Styles, click the **color swatch** next to `color:` → the picker shows **Contrast ratio** with ✓/✗ vs **AA**.
Priority targets: white text on colored buttons (Export, Add User, pagination), muted/grey secondary text, status badges.

```js
(() => {
  const parse = c => { const m = c.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/); return m ? [+m[1],+m[2],+m[3]] : null; };
  const lum = ([r,g,b]) => { const a=[r,g,b].map(v=>{v/=255; return v<=.03928? v/12.92 : ((v+.055)/1.055)**2.4;}); return .2126*a[0]+.7152*a[1]+.0722*a[2]; };
  const bgOf = el => { let n = el; while (n && n !== document.documentElement) { const b = getComputedStyle(n).backgroundColor; const p = parse(b); if (p && !/rgba\(0, 0, 0, 0\)/.test(b)) return p; n = n.parentElement; } return [255,255,255]; };
  const rows = []; let skipped = 0;
  document.querySelectorAll('*').forEach(el => {
    const txt = el.textContent?.trim(); if (!txt || el.children.length) return;
    const cs = getComputedStyle(el); const f = parse(cs.color);
    if (!f) { skipped++; return; }
    const b = bgOf(el);
    const L1 = lum(f), L2 = lum(b);
    const ratio = (Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);
    const px = parseFloat(cs.fontSize), bold = +cs.fontWeight >= 700;
    const large = px >= 24 || (px >= 18.66 && bold);
    const need = large ? 3 : 4.5;
    if (ratio < need) rows.push({ text: txt.slice(0,30), ratio: +ratio.toFixed(2), need, fontPx: px, color: cs.color });
  });
  console.log(`%c[contrast] below-AA candidates=${rows.length} | skipped (lab()/oklab(), unparseable)=${skipped}`,
    'font-weight:bold;color:' + (rows.length ? '#c60' : '#0a0'));
  if (rows.length) console.table(rows.slice(0,25));
  console.log('Read: treat as CANDIDATES only. Verify each with the DevTools color-picker Contrast ratio before marking F. Skipped count is expected and NOT a failure.');
})();
```

## [i18nkeys] — IA01-07
Finds raw translation keys and language leakage after switching to VI.

```js
(() => {
  const keyRe = /^[a-z][a-zA-Z0-9]*(\.[a-z][a-zA-Z0-9_]*){1,}$/;   // e.g. users.table.header
  const hits = [];
  document.querySelectorAll('*').forEach(el => {
    if (el.children.length) return;
    const t = el.textContent?.trim(); if (!t || t.length > 60) return;
    if (keyRe.test(t) || /^\{\{.*\}\}$/.test(t) || /missing|translation|i18n/i.test(t)) {
      hits.push({ suspect: t, tag: el.tagName.toLowerCase(), cls: (el.className||'').toString().slice(0,40) });
    }
  });
  console.log(`%c[i18nkeys] suspected raw keys / untranslated = ${hits.length}`,
    'font-weight:bold;color:' + (hits.length ? '#c00' : '#0a0'));
  if (hits.length) console.table(hits);
  console.log('Read: 0 hits => PASS signal. Then eyeball for mixed EN/VI wording (script cannot judge language mixing).');
})();
```

## [alt] — IA01-12 🤖
Objective: which content images lack alt text.

```js
(() => {
  const imgs = [...document.querySelectorAll('img')];
  const missing = imgs.filter(i => !i.hasAttribute('alt'));
  const empty   = imgs.filter(i => i.getAttribute('alt') === '');
  const ratio   = imgs.map(i => ({ src: (i.currentSrc||i.src||'').split('/').pop().slice(0,30),
      shown: `${Math.round(i.width)}x${Math.round(i.height)}`,
      natural: `${i.naturalWidth}x${i.naturalHeight}`,
      distorted: i.naturalWidth && Math.abs((i.width/i.height) - (i.naturalWidth/i.naturalHeight)) > 0.02 }));
  console.log(`%c[alt] images=${imgs.length} | missing alt=${missing.length} | alt="" (decorative)=${empty.length} | aspect-distorted=${ratio.filter(r=>r.distorted).length}`,
    'font-weight:bold;color:' + (missing.length ? '#c00' : '#0a0'));
  if (missing.length) console.table(missing.map(i => ({ src: (i.currentSrc||i.src||'').slice(-45) })));
  console.table(ratio.slice(0,20));
  console.log('Read: missing alt > 0 => F signal for content images (alt="" is OK for purely decorative). distorted=true => check aspect ratio visually.');
})();
```

## [labels] — IA02-01 🤖
Objective: inputs with no associated label.

```js
(() => {
  const fields = [...document.querySelectorAll('input:not([type=hidden]),select,textarea')];
  const rows = fields.map(el => {
    const byFor = el.id && document.querySelector(`label[for="${CSS.escape(el.id)}"]`);
    const wrapped = el.closest('label');
    const aria = el.getAttribute('aria-label') || (el.getAttribute('aria-labelledby') &&
                 document.getElementById(el.getAttribute('aria-labelledby'))?.textContent?.trim());
    const labelled = !!(byFor || wrapped || aria);
    return { name: el.name || el.id || el.type, type: el.type || el.tagName.toLowerCase(),
             hasLabel: labelled, via: byFor ? 'label[for]' : wrapped ? 'wrapping label' : aria ? 'aria' : 'NONE',
             placeholderOnly: !labelled && !!el.placeholder, placeholder: el.placeholder || '' };
  });
  const bad = rows.filter(r => !r.hasLabel);
  console.log(`%c[labels] fields=${rows.length} | unlabelled=${bad.length} | placeholder-as-label=${rows.filter(r=>r.placeholderOnly).length}`,
    'font-weight:bold;color:' + (bad.length ? '#c00' : '#0a0'));
  console.table(rows);
  console.log('Read: unlabelled=0 => PASS signal. placeholderOnly=true rows are exactly the "placeholder used as label" violation.');
})();
```

## [required] — IA02-02
Lists required fields and whether a visible marker sits near them.

```js
(() => {
  const rows = [...document.querySelectorAll('input,select,textarea')].filter(el => el.required || el.getAttribute('aria-required') === 'true')
    .map(el => {
      const id = el.id;
      const lab = (id && document.querySelector(`label[for="${CSS.escape(id)}"]`)) || el.closest('label');
      const labText = lab?.textContent?.trim() || '';
      const marker = /\*|bắt buộc|required/i.test(labText) ||
                     /\*|bắt buộc|required/i.test(el.parentElement?.textContent || '');
      return { field: el.name || id || el.type, label: labText.slice(0,40), visibleMarker: marker };
    });
  const bad = rows.filter(r => !r.visibleMarker);
  console.log(`%c[required] required fields=${rows.length} | without visible marker=${bad.length}`,
    'font-weight:bold;color:' + (bad.length ? '#c60' : '#0a0'));
  console.table(rows);
  console.log('Read: every required field should show * or "bắt buộc". Rows with visibleMarker=false are F candidates — confirm visually.');
})();
```

## [focusring] — IA02-12 / IA03-11
Flags focusable elements whose focus outline is suppressed, and dumps the tab order.

```js
(() => {
  const sel = 'a[href],button,input:not([type=hidden]),select,textarea,[tabindex]:not([tabindex="-1"])';
  const els = [...document.querySelectorAll(sel)].filter(e => e.offsetParent !== null && !e.disabled);
  const rows = els.map((el, i) => {
    el.focus({ preventScroll: true });
    const cs = getComputedStyle(el);
    const noOutline = (cs.outlineStyle === 'none' || parseFloat(cs.outlineWidth) === 0);
    const hasAlt = cs.boxShadow !== 'none' || parseFloat(cs.borderWidth) > 1;
    return { order: i + 1, tag: el.tagName.toLowerCase(),
             text: (el.innerText || el.value || el.getAttribute('aria-label') || '').trim().slice(0,25),
             tabindex: el.getAttribute('tabindex') ?? '(auto)',
             focusVisible: !noOutline || hasAlt };
  });
  els[0]?.blur();
  const bad = rows.filter(r => !r.focusVisible);
  console.log(`%c[focusring] focusable=${rows.length} | no visible focus indicator=${bad.length}`,
    'font-weight:bold;color:' + (bad.length ? '#c00' : '#0a0'));
  console.table(rows);
  console.log('Read: order column = DOM tab order — check it matches visual top→bottom/left→right. focusVisible=false rows are accessibility F candidates. Confirm by pressing Tab manually (some rings only appear via :focus-visible).');
})();
```

## [cursorcheck] — IA03-09
Finds clickable elements that do not show a pointer cursor, and whether they define hover styling.

```js
(() => {
  const els = [...document.querySelectorAll('button,a,[role=button],[onclick],summary,input[type=submit],input[type=button]')]
    .filter(e => e.offsetParent !== null);
  const rows = els.map(el => {
    const cs = getComputedStyle(el);
    return { tag: el.tagName.toLowerCase(),
             text: (el.innerText || el.value || el.getAttribute('aria-label') || '').trim().slice(0,28) || '(icon)',
             cursor: cs.cursor, pointerOK: cs.cursor === 'pointer', disabled: !!el.disabled };
  });
  const bad = rows.filter(r => !r.pointerOK && !r.disabled);
  console.log(`%c[cursorcheck] clickable=${rows.length} | missing cursor:pointer=${bad.length}`,
    'font-weight:bold;color:' + (bad.length ? '#c00' : '#0a0'));
  if (bad.length) { console.log('— offenders —'); console.table(bad); }
  console.table(rows.slice(0,40));
  console.log('Read: missing cursor:pointer on real buttons => affordance F candidate (this is how C1 Add User/Export/Edit/Delete were caught). Then hover manually to check colour change, and Tab to check focus.');
})();
```

## [deeplink] — IA03-06
Manual/DevTools procedure (no script needed — a script can't test a cold load).

1. Copy the target URL.
2. Open a **new tab** (or Incognito) → paste → Enter.
3. If it asks for login: log in, then confirm it lands **back on the pasted URL** (that redirect is acceptable).
4. While on the target, press **F5**.
5. Read: correct content both times → PASS signal. Forced to `/` or `/dashboard` **after** authentication → F.

```js
// Optional helper: record the URL so you can compare after reload
console.log('[deeplink] current URL:', location.href);
```

## [offline] — IA04-10
Staging procedure — **order matters**.

1. Load the target **online** and let it fully render.
2. F12 → **Network** tab → throttling dropdown → **Offline**.
3. **Do NOT press F5.** Reloading offline shows Chrome's own `ERR_INTERNET_DISCONNECTED` dino page, which tests the browser, not the app.
4. Trigger a server call inside the running app: pagination, search, or submit a form (e.g. "Lưu thay đổi").
5. Observe what **the app** renders.
6. Restore throttling to **No throttling** afterwards.

Read: friendly message + reason + retry affordance → P. Raw technical string (`Failed to fetch`), frozen spinner, or silence → F.

Alternative (simulate 500/timeout instead of offline): Network → right-click the request → **Block request URL**, then repeat the action.

```js
// Optional: log failing requests while you interact
(() => {
  const of = window.fetch;
  window.fetch = (...a) => of(...a).then(r => { if (!r.ok) console.warn('[offline] HTTP', r.status, a[0]); return r; })
    .catch(e => { console.warn('[offline] fetch rejected:', e.message, a[0]); throw e; });
  console.log('[offline] fetch monitor installed — reload the page to remove it.');
})();
```

## [modalaudit] — modal-extra-checks
Audits an **open** modal: focus trap, labelling, scroll lock, overflow.

```js
(() => {
  const m = document.querySelector('[role=dialog],[aria-modal=true],dialog[open]') ||
            [...document.querySelectorAll('div')].find(d => { const cs = getComputedStyle(d);
              return cs.position === 'fixed' && d.getBoundingClientRect().width > 200 && +cs.zIndex > 10; });
  if (!m) { console.warn('[modalaudit] No modal detected — open the modal first.'); return; }
  const sel = 'a[href],button,input:not([type=hidden]),select,textarea,[tabindex]:not([tabindex="-1"])';
  const inside = [...m.querySelectorAll(sel)].filter(e => e.offsetParent !== null && !e.disabled);
  const outside = [...document.querySelectorAll(sel)].filter(e => e.offsetParent !== null && !e.disabled && !m.contains(e));
  const r = m.getBoundingClientRect();
  const report = {
    role: m.getAttribute('role') || '(none)',
    ariaModal: m.getAttribute('aria-modal') || '(none)',
    labelled: !!(m.getAttribute('aria-label') || m.getAttribute('aria-labelledby')),
    focusablesInside: inside.length,
    focusablesStillReachableOutside: outside.length,
    bodyScrollLocked: getComputedStyle(document.body).overflow === 'hidden',
    fitsViewport: r.right <= innerWidth + 1 && r.bottom <= innerHeight + 1,
    modalScrollsInternally: m.scrollHeight > m.clientHeight
  };
  console.log('%c[modalaudit]', 'font-weight:bold'); console.table(report);
  console.log(`Read:
  - role=dialog + aria-modal=true + labelled=true => proper semantics (IA02-01/IA03-11).
  - focusablesStillReachableOutside > 0 => focus trap likely MISSING: press Tab past the last field and see if focus escapes to the page behind (IA03-11).
  - bodyScrollLocked=false => background scrolls behind the modal (IA01-01).
  - fitsViewport=false => modal overflows the screen (IA01-01/IA01-13).
  Then test manually: Esc closes (IA03-08), backdrop click doesn't silently discard input (IA02-10), focus returns to the trigger button after close (IA03-11).`);
})();
```

---

## [statuscolor] — IA04-05 / IA04-06 / IA04-07 / IA04-08 🔧

Static half of IA-04: badges, progress bars, status colour consistency, and colour-only signals.
Full version lives in `../scripts/ia04.js` (Phase A) — it prints verdicts. Snippet form:

```js
(() => {
  const M = document.querySelector('[role=dialog],[aria-modal=true],dialog[open]');
  const S = M || document.body;
  const STATUS = /^(active|inactive|pending|approved|rejected|blocked|success|failed|error|warning|draft|expired|đang hoạt động|không hoạt động|bị khóa|chờ duyệt|thành công|thất bại)$/i;

  // IA04-07: same status label must always use the same colour pair
  const stEls = [];
  S.querySelectorAll('*').forEach(el => {
    if (el.children.length || el.offsetParent === null) return;
    const t = (el.textContent||'').trim();
    if (!t || t.length > 22 || !STATUS.test(t)) return;
    const cs = getComputedStyle(el);
    let bg = cs.backgroundColor, n = el;
    while ((!bg || bg === 'rgba(0, 0, 0, 0)') && n.parentElement && n !== S) { n = n.parentElement; bg = getComputedStyle(n).backgroundColor; }
    stEls.push({ label: t, fg: cs.color, bg });
  });
  const byLabel = {};
  stEls.forEach(s => (byLabel[s.label.toLowerCase()] = byLabel[s.label.toLowerCase()] || new Set()).add(s.fg + ' / ' + s.bg));
  const clash = Object.entries(byLabel).filter(([, set]) => set.size > 1);
  console.table(stEls);
  console.log('[statuscolor] IA04-07 — distinct status labels =', Object.keys(byLabel).length,
              '| labels using MORE THAN ONE colour pair =', clash.length);
  clash.forEach(([k, set]) => console.log('  inconsistent:', k, [...set].join('  |  ')));

  // IA04-08: small coloured dots with no adjacent text / aria label = colour-only
  const dots = [];
  S.querySelectorAll('span,i,div,em').forEach(el => {
    if (el.children.length || el.offsetParent === null || (el.textContent||'').trim()) return;
    const b = el.getBoundingClientRect();
    if (!b.width || b.width > 20 || b.height > 20) return;
    const cs = getComputedStyle(el);
    if (!cs.backgroundColor || cs.backgroundColor === 'rgba(0, 0, 0, 0)') return;
    const near = (el.parentElement?.textContent||'').trim();
    const aria = el.getAttribute('aria-label') || el.getAttribute('title');
    dots.push({ size: Math.round(b.width)+'x'+Math.round(b.height), bg: cs.backgroundColor,
                textBeside: near.slice(0,20) || '(NONE)', aria: aria || '(none)', colourOnly: !near && !aria });
  });
  if (dots.length) console.table(dots);
  console.log('[statuscolor] IA04-08 — coloured dots =', dots.length,
              '| colour-ONLY (no text, no aria) =', dots.filter(d => d.colourOnly).length);

  // IA04-05 / IA04-06
  const badges = [...S.querySelectorAll('[role=status],[class*=badge i],[class*=chip i],[class*=pill i],sup')]
    .filter(e => e.offsetParent !== null && (e.textContent||'').trim().length <= 24);
  const prog = [...S.querySelectorAll('progress,[role=progressbar],[class*=progress i]')].filter(e => e.offsetParent !== null);
  console.log('[statuscolor] IA04-05 badges =', badges.length, '(0 => NA)  |  IA04-06 progress bars =', prog.length, '(0 => NA)');
})();
```

**How to read:**
- `labels using MORE THAN ONE colour pair` > 0 → IA04-07 **F** (same meaning, different colour).
- `colour-ONLY` > 0 → IA04-08 **F** (a colour-blind user gets no signal).
- badges = 0 → IA04-05 **NA**; progress bars = 0 → IA04-06 **NA**.
- Otherwise both need the human: change state and check the badge updates; run a real task and watch the bar.

**Known limitation:** the dot detector only sees elements whose *own* background is coloured and
that are ≤20×20px. A status shown via an SVG icon, a `::before` pseudo-element, or a border colour
is invisible to it — check those by eye.

---

## [feedbackmonitor] — IA04-01 / IA04-02 / IA04-09 / IA04-10 / IA04-11 🔧

Behavioural half of IA-04. Nothing can be judged at paste time — this **installs listeners and
waits**, then you perform the action and read the log. Full version = `../scripts/ia04.js` (Phase B).

```js
(() => {
  const TOASTRE = /toast|snackbar|notification|alert|message|notistack|sonner|swal/i;
  const RAWERR  = /failed to fetch|network ?error|error \d{3}|\b5\d\d\b|exception|cannot read|internal server/i;
  let nToast = 0, nRaw = 0;
  const looksToast = n => n instanceof HTMLElement && (
    TOASTRE.test((n.className||'').toString()) || TOASTRE.test(n.id||'') ||
    ['alert','status'].includes(n.getAttribute('role')||'') || !!n.getAttribute('aria-live'));

  const obs = new MutationObserver(ms => ms.forEach(mu => mu.addedNodes.forEach(n => {
    if (!(n instanceof HTMLElement)) return;
    const hit = looksToast(n) ? n : [...n.querySelectorAll('*')].find(looksToast);
    const txt = (hit || n).textContent?.trim() || '';
    if (hit && txt) {
      const i = ++nToast, t0 = performance.now();
      console.log('%c[TOAST #'+i+'] "'+txt.slice(0,90)+'"', 'color:#07c;font-weight:bold');
      const chk = setInterval(() => { if (!document.body.contains(hit)) { clearInterval(chk);
        console.log('%c[TOAST gone] after '+((performance.now()-t0)/1000).toFixed(1)+'s  (IA04-02: >=4s or has a close button = readable)','color:#07c'); } }, 200);
      setTimeout(() => clearInterval(chk), 60000);
    }
    if (txt && RAWERR.test(txt)) { nRaw++;
      console.log('%c[RAW ERROR SHOWN TO USER] "'+txt.slice(0,110)+'"  => IA04-10 = F','color:#c00;font-weight:bold'); }
  })));
  obs.observe(document.body, { childList: true, subtree: true });

  const orig = window.fetch;
  window.fetch = function (...a) {
    const url = (typeof a[0] === 'string' ? a[0] : a[0]?.url) || '', method = (a[1]?.method || 'GET').toUpperCase();
    const t0 = performance.now();
    return orig.apply(this, a).then(r => {
      if (method !== 'GET' || !r.ok)
        console.log('%c[RES] '+method+' '+r.status+' in '+Math.round(performance.now()-t0)+'ms  '+url.slice(0,80),
                    'color:'+(r.ok ? '#0a0' : '#c00'));
      if (method !== 'GET' && r.ok) console.log('%c  => now watch: does the list update by itself (IA04-09) and is the new value correct (IA04-11)?','color:#07c');
      return r;
    }).catch(e => { console.log('%c[RES] '+method+' FAILED: '+e.message+'  => what does the UI show the user? (IA04-10)','color:#c00;font-weight:bold'); throw e; });
  };

  window.__fbstop = () => { obs.disconnect(); window.fetch = orig;
    console.log('[feedbackmonitor] stopped. toasts seen =', nToast, '| raw errors leaked to UI =', nRaw);
    if (!nToast) console.log('%cIf you completed a successful action and saw 0 toasts => IA04-01 = F.','color:#c00;font-weight:bold'); };
  console.log('%c[feedbackmonitor] armed. Now: (1) submit for real, (2) Network->Offline then submit, (3) click a destructive button. Then run __fbstop()','background:#ffd;padding:3px 8px');
})();
```

**How to read:**
- Completed a successful action and **no** `[TOAST #n]` line → IA04-01 **F**.
- `[TOAST gone] after X.Xs` with X < 3 and no close button → IA04-02 **F**; no toast at all → **NA**.
- `[RAW ERROR SHOWN TO USER]` printed → IA04-10 **F**.
- After `[RES] … 200`, if the list only updates on F5 → IA04-09 **F**.
- New value visible in the row and correct → IA04-11 **P**.

**Warning:** this replaces `window.fetch`. Always run `__fbstop()` (or `__ia04stop()` for the
batch runner) before navigating away, or later requests keep going through the hook.

**Known limitation:** it only hooks `fetch`. An app using `XMLHttpRequest`, `axios` on top of XHR,
or WebSockets will produce no `[REQ]/[RES]` lines — the toast observer still works, but read the
Network panel for request timing instead of trusting an empty log.
