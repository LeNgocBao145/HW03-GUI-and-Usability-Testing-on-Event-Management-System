/* ============================================================
   IA-01 AUDIT — General UI standards
   Dùng: F12 -> Console -> dán -> Enter  (tự nhận scope: modal nếu đang mở, không thì cả trang)
   §12: "P"/"F" là KẾT QUẢ ĐO của script; "?" là bạn phải tự xem bằng mắt/thao tác.
        Verdict cuối vẫn do bạn xác nhận trước khi ghi vào Task1B.
   ============================================================ */
(() => {
  const M = document.querySelector('[role=dialog],[aria-modal=true],dialog[open]');
  const S = M || document.body;
  const H = t => console.log('%c'+t,'font-weight:bold;background:#e8f0ff;padding:2px 8px;border-radius:3px');
  const OUT = [];
  const say = (id, verdict, reason) => {
    OUT.push({ muc:id, ketQua:verdict, lyDo:reason });
    const col = verdict==='P' ? '#0a0' : verdict==='F' ? '#c00' : verdict==='NA' ? '#888' : '#c60';
    console.log('%c  => '+id+' : '+verdict+'  — '+reason,'color:'+col+';font-weight:bold');
  };
  console.log('%cIA-01 AUDIT — scope: '+(M?'MODAL':'TOAN TRANG'),
    'font-size:14px;font-weight:bold;background:#334;color:#fff;padding:4px 10px');

  /* ---- IA01-01 + IA01-13 : overflow ---- */
  H('IA01-01 / IA01-13  layout & overflow');
  const vw = document.documentElement.clientWidth;
  const pageOF = document.documentElement.scrollWidth > document.documentElement.clientWidth;
  const bad = [];
  S.querySelectorAll('*').forEach(el => { const b = el.getBoundingClientRect(); if (!b.width) return;
    if (!/auto|scroll/.test(getComputedStyle(el).overflowX) && (b.right > vw+1 || b.left < -1))
      bad.push({ tag: el.tagName.toLowerCase(), cls:(el.className||'').toString().slice(0,40), overBy: Math.round(b.right-vw) }); });
  console.log('viewport='+vw+'px | trang co scroll ngang: '+(pageOF?'CO':'khong')+' | phan tu tran='+bad.length);
  if (bad.length) console.table(bad.slice(0,20));
  say('IA01-01', bad.length===0 ? 'P' : 'F',
    bad.length===0 ? 'khong phan tu nao tran khoi viewport '+vw+'px'
                   : bad.length+' phan tu tran khoi viewport (xem bang tren)');
  say('IA01-13', '?', 'bat Device Toolbar (Ctrl+Shift+M), doi sang tablet/phone roi chay lai script, so sanh so phan tu tran');

  /* ---- IA01-02 : spacing ---- */
  H('IA01-02  spacing');
  const sp = {};
  S.querySelectorAll('div,section,li,td,th,button,input,label').forEach(el => { const cs = getComputedStyle(el);
    ['paddingTop','paddingLeft','marginTop','marginLeft','marginBottom','gap'].forEach(p => {
      const v = parseFloat(cs[p]); if (v>0) sp[v] = (sp[v]||0)+1; }); });
  const sprows = Object.entries(sp).map(([px,c])=>({px:+px,count:c,onGrid4:+px%4===0})).sort((a,b)=>b.count-a.count);
  const off = sprows.filter(r=>!r.onGrid4);
  const offRatio = sprows.length ? off.length/sprows.length : 0;
  console.table(sprows.slice(0,15));
  say('IA01-02', offRatio<=0.34 ? 'P' : '?',
    sprows.length+' gia tri spacing, '+off.length+' lech grid 4px ('+Math.round(offRatio*100)+'%)'+
    (offRatio<=0.34 ? ' => theo he thong nhat quan' : ' => nhieu gia tri le, tu xem co chu y hay ad-hoc'));

  /* ---- IA01-03 : typography ---- */
  H('IA01-03  typography');
  const fam={}, size={}, wt={};
  S.querySelectorAll('*').forEach(el => { if(!el.textContent?.trim()||el.children.length) return; const cs=getComputedStyle(el);
    const f=cs.fontFamily.split(',')[0].replace(/["']/g,'').trim(); fam[f]=(fam[f]||0)+1;
    size[cs.fontSize]=(size[cs.fontSize]||0)+1; wt[cs.fontWeight]=(wt[cs.fontWeight]||0)+1; });
  const nf=Object.keys(fam).length, ns=Object.keys(size).length;
  console.log('font family='+nf+' ('+Object.keys(fam).join(', ')+') | size='+ns+' loai | weight='+Object.keys(wt).length+' loai');
  console.table(Object.entries(size).map(([k,v])=>({size:k,count:v})).sort((a,b)=>parseFloat(b.size)-parseFloat(a.size)));
  say('IA01-03', nf<=2 ? 'P' : nf<=4 ? '?' : 'F',
    nf+' font family, '+ns+' co chu'+(nf<=2?' => nhat quan':nf<=4?' => tu xem co phai cung 1 fallback stack khong':' => qua nhieu font khac nhau'));

  /* ---- IA01-04 : palette ---- */
  H('IA01-04  color palette');
  const fg={}, bg={};
  S.querySelectorAll('*').forEach(el => { const cs=getComputedStyle(el);
    if(el.textContent?.trim() && !el.children.length) fg[cs.color]=(fg[cs.color]||0)+1;
    const b=cs.backgroundColor; if(b && b!=='rgba(0, 0, 0, 0)') bg[b]=(bg[b]||0)+1; });
  const nfg=Object.keys(fg).length, nbg=Object.keys(bg).length;
  console.log('mau chu='+nfg+' | mau nen='+nbg+'   (lab()/oklab() la Chrome tinh color-mix()/opacity, KHONG phai mau thuong hieu rieng)');
  console.table(Object.entries(fg).map(([k,v])=>({textColor:k,count:v})).sort((a,b)=>b.count-a.count).slice(0,12));
  console.table(Object.entries(bg).map(([k,v])=>({background:k,count:v})).sort((a,b)=>b.count-a.count).slice(0,12));
  say('IA01-04', (nfg<=12 && nbg<=14) ? 'P' : '?',
    nfg+' mau chu / '+nbg+' mau nen'+((nfg<=12&&nbg<=14)?' => bang mau gon, co he thong':' => nhieu bien the, tu xem co dung dung vai tro khong'));

  /* ---- IA01-05 : contrast ---- */
  H('IA01-05  contrast (WCAG AA)');
  const parse = c => { const m=c.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/); return m?[+m[1],+m[2],+m[3]]:null; };
  const lum = a => { const x=a.map(v=>{v/=255; return v<=0.03928?v/12.92:Math.pow((v+0.055)/1.055,2.4);}); return 0.2126*x[0]+0.7152*x[1]+0.0722*x[2]; };
  const bgOf = el => { let n=el; while(n && n!==document.documentElement){ const c=getComputedStyle(n).backgroundColor;
    const p=parse(c); if(p && c!=='rgba(0, 0, 0, 0)') return p; n=n.parentElement; } return [255,255,255]; };
  const cand=[]; let skip=0;
  S.querySelectorAll('*').forEach(el => { const t=el.textContent?.trim(); if(!t||el.children.length) return;
    const cs=getComputedStyle(el); const f=parse(cs.color); if(!f){skip++;return;}
    const L1=lum(f), L2=lum(bgOf(el)); const ratio=(Math.max(L1,L2)+0.05)/(Math.min(L1,L2)+0.05);
    const px=parseFloat(cs.fontSize), large=px>=24||(px>=18.66&&+cs.fontWeight>=700); const need=large?3:4.5;
    if(ratio<need) cand.push({text:t.slice(0,28),ratio:+ratio.toFixed(2),need,px,color:cs.color}); });
  console.log('nghi van duoi AA='+cand.length+' | bo qua vi lab()/oklab()='+skip+'  <- bo qua la BINH THUONG');
  if(cand.length) console.table(cand.slice(0,20));
  say('IA01-05', (cand.length===0 && skip===0) ? 'P' : '?',
    (cand.length===0&&skip===0) ? 'moi cap chu/nen doc duoc deu dat AA'
      : cand.length+' nghi van + '+skip+' mau khong doc duoc => PHAI soi bang DevTools color picker (uu tien nut chinh: chu trang tren nen mau)');

  /* ---- IA01-07 + IA01-08 : i18n ---- */
  H('IA01-07 / IA01-08  i18n');
  const keyRe=/^[a-z][a-zA-Z0-9]*(\.[a-z][a-zA-Z0-9_]*){1,}$/; const leak=[];
  S.querySelectorAll('*').forEach(el=>{ if(el.children.length) return; const t=el.textContent?.trim();
    if(!t||t.length>60) return; if(keyRe.test(t)||/^\{\{.*\}\}$/.test(t)||/missing.?translation/i.test(t))
      leak.push({suspect:t,tag:el.tagName.toLowerCase()}); });
  if(leak.length) console.table(leak);
  say('IA01-07', leak.length===0 ? '?' : 'F',
    leak.length===0 ? 'khong thay raw i18n key => con phai mat xem co lan EN/VI khong'
                    : leak.length+' chuoi lo raw translation key');
  say('IA01-08', '?', 'doi sang VI roi chay lai script: so sanh so phan tu tran o IA01-01 (tang => layout vo do chuoi VI dai)');

  /* ---- IA01-11 : locale ---- */
  H('IA01-11  locale ngay/so');
  const dates=[]; S.querySelectorAll('*').forEach(el=>{ if(el.children.length) return; const t=el.textContent?.trim()||'';
    const m=t.match(/\b\d{1,4}[\/\-.]\d{1,2}[\/\-.]\d{1,4}\b/); if(m&&dates.length<15) dates.push({found:m[0],full:t.slice(0,32)}); });
  if(dates.length) console.table(dates);
  say('IA01-11', dates.length===0 ? 'NA' : '?',
    dates.length===0 ? 'khong tim thay chuoi ngay co dinh dang => man nay khong ap dung'
                     : dates.length+' chuoi ngay => tu doi chieu co dung dd/mm/yyyy nhat quan khong');

  /* ---- IA01-12 : images ---- */
  H('IA01-12  images (alt + ti le)');
  const imgs=[...S.querySelectorAll('img')];
  const miss=imgs.filter(i=>!i.hasAttribute('alt'));
  const rows=imgs.map(i=>({ src:(i.currentSrc||i.src||'').split('/').pop().slice(0,28),
    shown:Math.round(i.width)+'x'+Math.round(i.height), natural:i.naturalWidth+'x'+i.naturalHeight,
    alt:i.hasAttribute('alt')?(i.alt||'(rong=trang tri)'):'THIEU',
    meo: !!(i.naturalWidth && Math.abs((i.width/i.height)-(i.naturalWidth/i.naturalHeight))>0.02) }));
  const meo=rows.filter(r=>r.meo);
  if(imgs.length) console.table(rows.slice(0,20));
  say('IA01-12', imgs.length===0 ? 'NA' : (miss.length===0 && meo.length===0) ? 'P' : 'F',
    imgs.length===0 ? 'khong co <img> tren man nay'
      : miss.length+' anh thieu alt, '+meo.length+' anh sai ti le'+((miss.length===0&&meo.length===0)?' => dat':' => xem bang tren'));

  /* ---- manual-only ---- */
  H('Cac muc script KHONG do duoc — phai lam tay');
  say('IA01-06','?','so sanh icon/nut cung chuc nang giua >=2 man hinh');
  say('IA01-09','?','tao trang thai rong (search chuoi khong khop), xem co thong bao + goi y hanh dong');
  say('IA01-10','?','Network -> Slow 3G -> reload, xem co skeleton/spinner');
  say('IA01-14','?','bam header de sort, cuon danh sach dai xem header co sticky');
  say('IA01-15','?','nhap text rat dai, chon nhieu dong, xem bang rong');

  /* ---- SUMMARY ---- */
  const nP=OUT.filter(o=>o.ketQua==='P').length, nF=OUT.filter(o=>o.ketQua==='F').length;
  const nNA=OUT.filter(o=>o.ketQua==='NA').length, nQ=OUT.filter(o=>o.ketQua==='?').length;
  console.log('%c==================== TONG KET IA-01 ====================',
    'font-size:14px;font-weight:bold;background:#334;color:#fff;padding:4px 10px');
  console.table(OUT);
  console.log('%cP(auto)='+nP+'   F(auto)='+nF+'   NA='+nNA+'   can-xem-tay='+nQ,
    'font-size:13px;font-weight:bold;background:#eee;padding:3px 10px');
  if(nF) console.log('%cCAC MUC FAIL: '+OUT.filter(o=>o.ketQua==='F').map(o=>o.muc).join(', ')+
    '  -> moi muc F can Note + anh bugs/<MAN>_<MUC>.png + 1 dong trong Bug Log','color:#c00;font-weight:bold');
  console.log('%cGoi y dong Task1B (chi cac muc script da chot):','background:#ffd;padding:3px 8px');
  console.log(OUT.filter(o=>o.ketQua!=='?').map(o=>'| '+o.muc+' | ... | '+o.ketQua+' | '+(o.ketQua==='P'?'':String(o.lyDo).replace(/\|/g,'/'))+' |').join('\n'));
  window.__ia01 = OUT;
})();
