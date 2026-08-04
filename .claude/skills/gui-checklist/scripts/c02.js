/* ============================================================
   C02 — Assign Role / Chỉnh sửa người dùng   (target: modal-form)
   Dùng: mở modal "Chỉnh sửa người dùng" -> F12 -> Console -> dán -> Enter
   §12: script chỉ thu bằng chứng. P/F do người test quyết.
   Tắt monitor khi xong:  __c02stop()
   ============================================================ */
(() => {
  const H = t => console.log('%c'+t,'font-weight:bold;background:#e8f0ff;padding:2px 8px;border-radius:3px');
  const V = (ok,msg) => console.log('%c'+(ok?'PASS-signal  ':'FAIL-signal  ')+msg,'color:'+(ok?'#0a0':'#c00')+';font-weight:bold');
  const T = t => console.log('%c'+t,'background:#ffd;padding:3px 8px');

  const M = document.querySelector('[role=dialog],[aria-modal=true],dialog[open]') ||
            [...document.querySelectorAll('div')].find(d => { const cs=getComputedStyle(d);
              return cs.position==='fixed' && d.getBoundingClientRect().width>200 && +cs.zIndex>10; });
  if (!M) { console.warn('Chua mo modal. Mo "Chinh sua nguoi dung" roi chay lai script.'); return; }
  console.log('%cC02 REPORT — modal-form','font-size:15px;font-weight:bold;background:#124;color:#fff;padding:5px 12px');
  console.log('URL: '+location.href);

  /* ---------- profile: pre-NA theo applicability.md ---------- */
  H('PROFILE modal-form — 10 muc pre-NA (dien san, khong can test)');
  console.table([
    {muc:'IA01-09', ly_do:'modal form khong co vung danh sach/collection'},
    {muc:'IA01-14', ly_do:'khong phai data-table'},
    {muc:'IA01-15', ly_do:'khong phai data-table'},
    {muc:'IA03-01', ly_do:'modal khong co sidebar'},
    {muc:'IA03-02', ly_do:'modal khong doi route'},
    {muc:'IA03-04', ly_do:'modal dung close, xem IA03-08'},
    {muc:'IA03-05', ly_do:'khong co keo-tha'},
    {muc:'IA03-06', ly_do:'modal khong co URL rieng'},
    {muc:'IA03-07', ly_do:'modal khong doi route'},
    {muc:'IA03-10', ly_do:'khong co phan trang trong modal'}
  ]);

  /* ================= IA-01 ================= */
  H('IA01-01 + IA01-13  layout / overflow / fit viewport');
  const r = M.getBoundingClientRect(), vw = innerWidth, vh = innerHeight;
  const of1 = [];
  M.querySelectorAll('*').forEach(el => { const b=el.getBoundingClientRect(); if(!b.width) return;
    if(!/auto|scroll/.test(getComputedStyle(el).overflowX) && (b.right>vw+1||b.left<-1))
      of1.push({tag:el.tagName.toLowerCase(), cls:(el.className||'').toString().slice(0,36), overBy:Math.round(b.right-vw)}); });
  console.table({ viewport: vw+'x'+vh, modal: Math.round(r.width)+'x'+Math.round(r.height),
    vuaChieuNgang: r.right<=vw+1 && r.left>=-1, vuaChieuDoc: r.bottom<=vh+1 && r.top>=-1,
    modalTuCuonTrongNo: M.scrollHeight>M.clientHeight,
    scrollNenBiKhoa: getComputedStyle(document.body).overflow==='hidden' });
  V(of1.length===0,'phan tu tran khoi viewport = '+of1.length);
  if(of1.length) console.table(of1.slice(0,15));

  H('IA01-02  spacing');
  const sp={};
  M.querySelectorAll('div,label,button,input,select').forEach(el=>{ const cs=getComputedStyle(el);
    ['paddingTop','paddingLeft','marginTop','marginBottom','gap','rowGap'].forEach(p=>{
      const v=parseFloat(cs[p]); if(v>0) sp[v]=(sp[v]||0)+1; }); });
  const sprow=Object.entries(sp).map(([px,c])=>({px:+px,count:c,onGrid4:+px%4===0})).sort((a,b)=>b.count-a.count);
  V(sprow.filter(x=>!x.onGrid4).length<=sprow.length/3,
    'gia tri spacing='+sprow.length+' loai | lech grid 4px='+sprow.filter(x=>!x.onGrid4).length);
  console.table(sprow.slice(0,12));

  H('IA01-03  typography');
  const fam={},size={};
  M.querySelectorAll('*').forEach(el=>{ if(!el.textContent?.trim()||el.children.length) return; const cs=getComputedStyle(el);
    const f=cs.fontFamily.split(',')[0].replace(/["']/g,'').trim(); fam[f]=(fam[f]||0)+1;
    size[cs.fontSize]=(size[cs.fontSize]||0)+1; });
  V(Object.keys(fam).length<=2,'font family='+Object.keys(fam).length+' ('+Object.keys(fam).join(', ')+') | size='+Object.keys(size).length+' loai');
  console.table(Object.entries(size).map(([k,v])=>({size:k,count:v})).sort((a,b)=>parseFloat(b.size)-parseFloat(a.size)));

  H('IA01-04  mau sac');
  const fg={},bg={};
  M.querySelectorAll('*').forEach(el=>{ const cs=getComputedStyle(el);
    if(el.textContent?.trim()&&!el.children.length) fg[cs.color]=(fg[cs.color]||0)+1;
    const b=cs.backgroundColor; if(b&&b!=='rgba(0, 0, 0, 0)') bg[b]=(bg[b]||0)+1; });
  console.log('mau chu='+Object.keys(fg).length+' | mau nen='+Object.keys(bg).length+
              '   (lab()/oklab() la Chrome tinh color-mix/opacity, khong phai mau thuong hieu rieng)');
  console.table(Object.entries(bg).map(([k,v])=>({background:k,count:v})).sort((a,b)=>b.count-a.count).slice(0,10));

  H('IA01-05  contrast — CHI LA NGHI VAN, chot bang DevTools color picker');
  const P=c=>{ const m=c.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/); return m?[+m[1],+m[2],+m[3]]:null; };
  const L=a=>{ const x=a.map(v=>{ v/=255; return v<=0.03928? v/12.92 : Math.pow((v+0.055)/1.055,2.4); });
               return 0.2126*x[0]+0.7152*x[1]+0.0722*x[2]; };
  const BG=el=>{ let n=el; while(n&&n!==document.documentElement){ const c=getComputedStyle(n).backgroundColor;
    const p=P(c); if(p&&c!=='rgba(0, 0, 0, 0)') return p; n=n.parentElement; } return [255,255,255]; };
  const cand=[]; let skip=0;
  M.querySelectorAll('*').forEach(el=>{ const t=el.textContent?.trim(); if(!t||el.children.length) return;
    const cs=getComputedStyle(el); const f=P(cs.color); if(!f){ skip++; return; }
    const a=L(f), b=L(BG(el)); const ratio=(Math.max(a,b)+0.05)/(Math.min(a,b)+0.05);
    const px=parseFloat(cs.fontSize), large=px>=24||(px>=18.66&&+cs.fontWeight>=700), need=large?3:4.5;
    if(ratio<need) cand.push({text:t.slice(0,26),ratio:+ratio.toFixed(2),need,px}); });
  console.log('nghi van duoi AA='+cand.length+' | bo qua lab()/oklab()='+skip+'  <- bo qua la BINH THUONG, khong phai loi');
  if(cand.length) console.table(cand.slice(0,15));
  T('Uu tien soi tay: chu trang tren nut "Luu thay doi" (nen xanh cyan) — cap de fail AA nhat.');

  H('IA01-07  i18n raw key');
  const kre=/^[a-z][a-zA-Z0-9]*(\.[a-z][a-zA-Z0-9_]*){1,}$/; const leak=[];
  M.querySelectorAll('*').forEach(el=>{ if(el.children.length) return; const t=el.textContent?.trim();
    if(!t||t.length>60) return; if(kre.test(t)||/^\{\{.*\}\}$/.test(t)) leak.push({suspect:t}); });
  V(leak.length===0,'chuoi nghi la raw i18n key = '+leak.length);
  if(leak.length) console.table(leak);

  H('IA01-12  anh / avatar trong modal');
  const imgs=[...M.querySelectorAll('img')];
  if(!imgs.length){ console.log('khong co <img> trong modal => IA01-12 co the NA'); }
  else { console.table(imgs.map(i=>({ src:(i.currentSrc||i.src||'').split('/').pop().slice(0,26),
    shown:Math.round(i.width)+'x'+Math.round(i.height), natural:i.naturalWidth+'x'+i.naturalHeight,
    alt:i.hasAttribute('alt')?(i.alt||'(rong=trang tri)'):'THIEU',
    meo:!!(i.naturalWidth&&Math.abs((i.width/i.height)-(i.naturalWidth/i.naturalHeight))>0.02) }))); }

  /* ================= IA-02 ================= */
  const F=[...M.querySelectorAll('input:not([type=hidden]),select,textarea')];
  H('IA02-01  label gan dung input   ('+F.length+' field)');
  const lab=F.map(el=>{
    const byFor=el.id&&document.querySelector('label[for="'+CSS.escape(el.id)+'"]');
    const wrap=el.closest('label');
    const aria=el.getAttribute('aria-label')||
      (el.getAttribute('aria-labelledby')&&document.getElementById(el.getAttribute('aria-labelledby'))?.textContent?.trim());
    const ok=!!(byFor||wrap||aria);
    return { field:el.name||el.id||el.type, type:el.type||el.tagName.toLowerCase(), hasLabel:ok,
      via:byFor?'label[for]':wrap?'wrapping':aria?'aria':'KHONG CO',
      labelText:(byFor?.textContent||wrap?.textContent||aria||'').trim().slice(0,24),
      placeholder:el.placeholder||'', placeholderLamLabel:!ok&&!!el.placeholder }; });
  V(lab.filter(x=>!x.hasLabel).length===0,
    'field thieu label='+lab.filter(x=>!x.hasLabel).length+' | placeholder lam label='+lab.filter(x=>x.placeholderLamLabel).length);
  console.table(lab);

  H('IA02-02 + IA02-03  required / rang buoc');
  const req=F.filter(el=>el.required||el.getAttribute('aria-required')==='true');
  if(!req.length){
    console.log('%cKHONG field nao co required/aria-required','color:#c60;font-weight:bold');
    T('Kiem TAY: xoa trong "Ten" va "Email" roi bam Luu thay doi.\n'+
      '  - App CHAN + bao loi ro => validate bang JS: xet tiep co dau * hay khong (IA02-02).\n'+
      '  - App CHO luu rong      => IA02-02 va IA02-03 deu F.');
  } else {
    console.table(req.map(el=>{
      const l=(el.id&&document.querySelector('label[for="'+CSS.escape(el.id)+'"]'))||el.closest('label');
      const t=l?.textContent?.trim()||'', near=el.parentElement?.textContent||'';
      return { field:el.name||el.id||el.type, label:t.slice(0,28),
               coDauSao:/\*/.test(t)||/\*/.test(near),
               coChuBatBuoc:/bắt buộc|required/i.test(t)||/bắt buộc|required/i.test(near) }; }));
  }
  console.table(F.map(el=>({ field:el.name||el.id||el.type, type:el.type||el.tagName.toLowerCase(),
    required:!!el.required, pattern:el.pattern||'', minLength:el.minLength>0?el.minLength:'',
    maxLength:(el.maxLength>0&&el.maxLength<524288)?el.maxLength:'' })));

  H('IA02-11  chong double-submit');
  console.table([...M.querySelectorAll('button,input[type=submit]')].filter(e=>e.offsetParent!==null)
    .map(el=>({ nhan:(el.innerText||el.value||'').trim().slice(0,24), type:el.type||'button',
                disabled:!!el.disabled, ariaBusy:el.getAttribute('aria-busy')||'(none)' })));

  H('IA02-12 + IA03-11  thu tu Tab (doc DOM, KHONG goi focus de tranh treo)');
  const FSEL='a[href],button,input:not([type=hidden]),select,textarea,[tabindex]:not([tabindex="-1"])';
  const inside=[...M.querySelectorAll(FSEL)].filter(e=>e.offsetParent!==null&&!e.disabled);
  const outside=[...document.querySelectorAll(FSEL)].filter(e=>e.offsetParent!==null&&!e.disabled&&!M.contains(e));
  V(outside.length===0,'focus con reach duoc NGOAI modal = '+outside.length+'  (>0 => nghi thieu focus trap)');
  console.table(inside.map((el,i)=>{ const cs=getComputedStyle(el);
    return { thuTu:i+1, tag:el.tagName.toLowerCase(),
      nhan:(el.innerText||el.value||el.placeholder||el.getAttribute('aria-label')||'').trim().slice(0,22),
      tabindex:el.getAttribute('tabindex')??'(auto)',
      outlineCSS:(cs.outlineStyle==='none'||parseFloat(cs.outlineWidth)===0)?'none':cs.outlineStyle }; }));

  /* ================= IA-03 ================= */
  H('IA03-08 + IA03-09  loi thoat / affordance');
  const closers=[...M.querySelectorAll('button,[role=button],a')].filter(e=>e.offsetParent!==null)
    .filter(e=>/hủy|huy|cancel|close|đóng|dong/i.test((e.innerText||e.getAttribute('aria-label')||'')));
  console.log('nut thoat tim thay = '+closers.length+
    ' ('+closers.map(e=>(e.innerText||e.getAttribute('aria-label')||'X').trim().slice(0,10)).join(' | ')+')');
  const clk=[...M.querySelectorAll('button,a,[role=button],select,input[type=submit]')].filter(e=>e.offsetParent!==null);
  const crow=clk.map(el=>{ const cs=getComputedStyle(el);
    return { nhan:(el.innerText||el.value||el.getAttribute('aria-label')||'(icon)').trim().slice(0,24),
      cursor:cs.cursor, pointerOK:cs.cursor==='pointer', disabled:!!el.disabled }; });
  const noptr=crow.filter(x=>!x.pointerOK&&!x.disabled);
  V(noptr.length===0,'bam duoc='+crow.length+' | THIEU cursor:pointer='+noptr.length);
  if(noptr.length){ console.log('%c-- thieu cursor:pointer --','color:#c00;font-weight:bold'); console.table(noptr); }
  console.table(crow);

  H('MODAL semantics (IA03-11 accessibility)');
  console.table({ role:M.getAttribute('role')||'(none)', ariaModal:M.getAttribute('aria-modal')||'(none)',
    coTenAccessible:!!(M.getAttribute('aria-label')||M.getAttribute('aria-labelledby')) });

  /* ================= IA-04 monitor ================= */
  H('IA04-01 / IA04-02 / IA04-10 / IA04-11 — BAT MONITOR');
  const seen=new Set();
  const obs=new MutationObserver(ms=>{
    ms.forEach(m=>m.addedNodes.forEach(n=>{
      if(n.nodeType!==1) return;
      const txt=(n.innerText||n.textContent||'').trim();
      if(!txt||txt.length>200||seen.has(txt)) return;
      const cs=getComputedStyle(n);
      const looksToast=/toast|snackbar|notification|alert/i.test((n.className||'').toString()+(n.getAttribute?.('role')||''))
                    || (cs.position==='fixed'&&+cs.zIndex>10&&txt.length<200);
      if(looksToast){
        seen.add(txt); const t0=performance.now();
        console.log('%c[TOAST xuat hien] "'+txt.slice(0,80)+'"','color:#07c;font-weight:bold');
        const chk=setInterval(()=>{ if(!document.body.contains(n)){ clearInterval(chk);
          console.log('%c[TOAST bien mat] sau '+((performance.now()-t0)/1000).toFixed(1)+'s — IA04-02: >=4s la du doc','color:#07c'); } },200);
        setTimeout(()=>clearInterval(chk),30000);
      }
      if(/failed to fetch|network ?error|error \d{3}|exception/i.test(txt))
        console.log('%c[LOI THO hien cho user] "'+txt.slice(0,90)+'" => IA04-10 F candidate','color:#c00;font-weight:bold');
    }));
  });
  obs.observe(document.body,{childList:true,subtree:true});
  const origFetch=window.fetch;
  window.fetch=(...a)=>origFetch(...a)
    .then(r=>{ console.log('%c[NET] '+r.status+' '+String(a[0]).slice(0,70),'color:'+(r.ok?'#888':'#c00')); return r; })
    .catch(e=>{ console.log('%c[NET] REJECT '+e.message+' — app phai bao loi THAN THIEN, khong duoc lo chuoi nay','color:#c00;font-weight:bold'); throw e; });
  window.__c02stop=()=>{ obs.disconnect(); window.fetch=origFetch;
    console.log('%cMonitor da tat.','background:#ddd;padding:2px 6px'); };

  console.log('%cMonitor DANG CHAY. Bay gio hay lam 5 buoc sau:','background:#0a0;color:#fff;padding:3px 8px;font-weight:bold');
  T('1. Sua 1 field -> bam "Luu thay doi"      => co [TOAST xuat hien] khong (IA04-01), bao lau moi mat (IA04-02)\n'+
    '2. Xoa trong Ten/Email -> Luu             => loi hien o dau, chu gi (IA02-02/03/04/05)\n'+
    '3. Network -> Offline (KHONG F5) -> Luu   => app bao gi (IA04-10)\n'+
    '4. Doi Vai tro -> Luu -> xem bang         => state co dung khong (IA04-11)\n'+
    '5. Nhap do -> bam backdrop / nhan Esc     => co mat du lieu am tham khong (IA02-10, IA03-08)\n'+
    'Xong go:  __c02stop()');

  console.log('%cCON PHAI LAM TAY: IA01-06 (icon lien man), IA01-08 (doi VI roi chay lai), IA01-10 (loading), IA01-11 (locale), IA02-06/07/08/09/10/13, IA03-03, IA04-03/04/05/07/08/09','background:#ffd;padding:3px 8px');
})();
