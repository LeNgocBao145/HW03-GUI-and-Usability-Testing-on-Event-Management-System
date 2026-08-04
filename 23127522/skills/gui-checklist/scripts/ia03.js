/* ============================================================
   IA-03 AUDIT — Navigation
   Dùng: F12 -> Console -> dán -> Enter  (tự nhận scope: modal nếu đang mở, không thì cả trang)
   §12: "P"/"F" là KẾT QUẢ ĐO của script; "?" là bạn phải tự thao tác kiểm.
   ============================================================ */
(() => {
  const M = document.querySelector('[role=dialog],[aria-modal=true],dialog[open]');
  const S = M || document.body;
  const H = t => console.log('%c'+t,'font-weight:bold;background:#fff0e0;padding:2px 8px;border-radius:3px');
  const OUT = [];
  const say = (id, verdict, reason) => {
    OUT.push({ muc:id, ketQua:verdict, lyDo:reason });
    const col = verdict==='P' ? '#0a0' : verdict==='F' ? '#c00' : verdict==='NA' ? '#888' : '#c60';
    console.log('%c  => '+id+' : '+verdict+'  — '+reason,'color:'+col+';font-weight:bold');
  };
  console.log('%cIA-03 AUDIT (NAVIGATION) — scope: '+(M?'MODAL':'TOAN TRANG'),
    'font-size:14px;font-weight:bold;background:#630;color:#fff;padding:4px 10px');
  console.log('URL: '+location.href);

  const FSEL='a[href],button,input:not([type=hidden]),select,textarea,[tabindex]:not([tabindex="-1"])';

  /* ---- IA03-01 : menu/sidebar ---- */
  H('IA03-01  menu / sidebar');
  if(M){
    say('IA03-01','NA','modal khong co sidebar; dieu huong test o man cha');
  } else {
    const items=[...document.querySelectorAll('nav a,aside a,[role=navigation] a,nav button,aside button')]
      .filter(e=>e.offsetParent!==null).map(el=>({
        nhan:(el.innerText||el.getAttribute('aria-label')||'(icon)').trim().slice(0,26),
        href:el.getAttribute('href')||'(button)',
        ariaCurrent:el.getAttribute('aria-current')||'',
        classActive:/active|selected|current/i.test((el.className||'').toString()) }));
    const act=items.filter(i=>i.ariaCurrent||i.classActive);
    if(items.length) console.table(items.slice(0,25));
    say('IA03-01', !items.length ? '?' : act.length>0 ? 'P' : '?',
      !items.length ? 'khong tim thay nav/aside => tu xem man co menu khong'
        : act.length>0 ? items.length+' muc nav, '+act.length+' muc co danh dau active (aria-current/class)'
        : items.length+' muc nav nhung KHONG muc nao co aria-current/class active => tu xem highlight bang mau CSS khac khong');
  }

  /* ---- IA03-02 : breadcrumb ---- */
  H('IA03-02  breadcrumb');
  if(M){
    say('IA03-02','NA','modal khong doi route nen khong co breadcrumb rieng');
  } else {
    const bc=[...document.querySelectorAll('[aria-label*="readcrumb" i],.breadcrumb,nav ol,nav ul')]
      .filter(e=>e.offsetParent!==null && /\/|>|›|»/.test(e.textContent||''));
    if(bc.length){ bc.slice(0,3).forEach(b=>console.log('breadcrumb:',
      b.textContent.trim().replace(/\s+/g,' ').slice(0,90),'| so link:',b.querySelectorAll('a').length)); }
    say('IA03-02', bc.length===0 ? 'NA' : '?',
      bc.length===0 ? 'khong tim thay breadcrumb tren app => khong ap dung (dieu huong bang sidebar)'
        : 'tim thay breadcrumb => tu kiem: di sau 1 cap xem co them cap moi, bam crumb truoc xem co lui dung');
  }

  /* ---- IA03-03 : tabs ---- */
  H('IA03-03  tabs');
  const tabs=[...document.querySelectorAll('[role=tab],[role=tablist] button')].filter(e=>e.offsetParent!==null);
  if(tabs.length) console.table(tabs.map(t=>({ nhan:(t.innerText||'').trim().slice(0,24),
    ariaSelected:t.getAttribute('aria-selected')||'(none)',
    classActive:/active|selected/i.test((t.className||'').toString()) })));
  const selTab=tabs.filter(t=>t.getAttribute('aria-selected')==='true');
  say('IA03-03', tabs.length===0 ? 'NA' : selTab.length===1 ? '?' : '?',
    tabs.length===0 ? 'khong co [role=tab] => man khong dung tab (dropdown filter KHONG phai tab)'
      : tabs.length+' tab, '+selTab.length+' tab dang aria-selected=true => tu bam tung tab xem noi dung doi dung va tab active co ro');

  /* ---- IA03-06 : deep link ---- */
  H('IA03-06  deep link');
  console.log('URL hien tai: '+location.href);
  if(M){
    say('IA03-06','NA','modal dang mo ma URL khong doi => modal khong co URL rieng');
  } else {
    say('IA03-06','?','copy URL nay, mo TAB MOI dan vao + Enter, roi F5. Bi day ve / hoac /dashboard SAU KHI da dang nhap => F. Redirect qua login roi quay lai dung URL => OK');
  }

  /* ---- IA03-08 : loi thoat ---- */
  H('IA03-08  loi thoat (emergency exit)');
  const closers=[...S.querySelectorAll('button,[role=button],a')].filter(e=>e.offsetParent!==null)
    .filter(e=>/hủy|huy|cancel|close|đóng|dong|back|tro lai|trở lại/i.test((e.innerText||e.getAttribute('aria-label')||'')));
  console.log('nut thoat tim thay = '+closers.length+
    (closers.length?' ('+closers.map(e=>(e.innerText||e.getAttribute('aria-label')||'X').trim().slice(0,12)).join(' | ')+')':''));
  say('IA03-08', closers.length>=2 ? '?' : closers.length===1 ? '?' : 'F',
    closers.length===0 ? 'KHONG tim thay nut huy/dong nao => khong co loi thoat ro rang'
      : closers.length+' loi thoat tim thay => con phai kiem tay: nhan Esc co dong khong, bam Huy co huy that khong');

  /* ---- IA03-09 : affordance ---- */
  H('IA03-09  affordance: cursor / hover / focus');
  const clk=[...S.querySelectorAll('button,a,[role=button],input[type=submit],input[type=button],select,summary')]
    .filter(e=>e.offsetParent!==null);
  const crow=clk.map(el=>{ const cs=getComputedStyle(el);
    return { nhan:(el.innerText||el.value||el.getAttribute('aria-label')||'(icon)').trim().slice(0,26),
      tag:el.tagName.toLowerCase(), cursor:cs.cursor, pointerOK:cs.cursor==='pointer', disabled:!!el.disabled }; });
  const noptr=crow.filter(r=>!r.pointerOK&&!r.disabled);
  if(noptr.length){ console.log('%c-- THIEU cursor:pointer --','color:#c00;font-weight:bold'); console.table(noptr); }
  console.table(crow);
  say('IA03-09', clk.length===0 ? 'NA' : noptr.length===0 ? '?' : 'F',
    clk.length===0 ? 'khong tim thay phan tu bam duoc'
      : noptr.length===0 ? 'ca '+clk.length+' phan tu bam duoc deu co cursor:pointer => con phai re chuot xem hover doi mau + Tab xem vien focus'
      : noptr.length+'/'+clk.length+' phan tu bam duoc THIEU cursor:pointer => '+noptr.slice(0,5).map(x=>'"'+x.nhan+'"').join(', ')+
        (noptr.length>5?' ...':''));

  /* ---- IA03-10 : phan trang ---- */
  H('IA03-10  phan trang / giu ngu canh');
  if(M){
    say('IA03-10','NA','modal khong co phan trang');
  } else {
    const pg=[...document.querySelectorAll('[aria-label*="pagination" i],.pagination,nav')]
      .filter(e=>e.offsetParent!==null && /\d/.test(e.textContent||'') && e.querySelectorAll('button,a').length>2);
    if(pg.length) console.log('mau:',pg[0].textContent.trim().replace(/\s+/g,' ').slice(0,80));
    say('IA03-10', pg.length===0 ? 'NA' : '?',
      pg.length===0 ? 'khong thay phan trang tren man nay'
        : 'tim thay phan trang => kiem tay: sang trang 2-3, mo chi tiet, Back xem co giu dung trang/filter');
  }

  /* ---- IA03-11 : keyboard nav (+ focus trap dung cach) ---- */
  H('IA03-11  keyboard nav'+(M?'  + focus trap cua modal':''));
  const tabbable=[...S.querySelectorAll(FSEL)].filter(e=>e.offsetParent!==null&&!e.disabled);
  const posTab=tabbable.filter(e=>+(e.getAttribute('tabindex')||0)>0);
  console.table(tabbable.map((el,i)=>({ thuTu:i+1, tag:el.tagName.toLowerCase(),
    nhan:(el.innerText||el.value||el.placeholder||el.getAttribute('aria-label')||'').trim().slice(0,24),
    tabindex:el.getAttribute('tabindex')??'(auto)' })).slice(0,40));

  let trapNote='';
  if(M){
    /* Cach dung: kiem co CHE CHAN nen (inert/aria-hidden) thay vi dem so phan tu ngoai modal.
       Dem so ngoai modal LUON > 0 ke ca khi trap hoat dong tot => false alarm. */
    const outside=[...document.querySelectorAll(FSEL)].filter(e=>e.offsetParent!==null&&!e.disabled&&!M.contains(e));
    const blocked=outside.filter(e=>e.closest('[inert]')||e.closest('[aria-hidden="true"]'));
    const exposed=outside.length-blocked.length;
    const role=M.getAttribute('role')||'(none)', am=M.getAttribute('aria-modal')||'(none)';
    const named=!!(M.getAttribute('aria-label')||M.getAttribute('aria-labelledby'));
    console.table({ role, ariaModal:am, coTenAccessible:named,
      focusableTrongModal:tabbable.length, ngoaiModal_tong:outside.length,
      ngoaiModal_daCheChan:blocked.length, ngoaiModal_conPhoiBay:exposed,
      scrollNenBiKhoa:getComputedStyle(document.body).overflow==='hidden' });
    if(exposed>0){
      console.log('%cNen phia sau KHONG duoc che bang inert/aria-hidden ('+exposed+' phan tu con phoi bay).',
        'color:#c60;font-weight:bold');
      console.log('%c  => Day CHUA chac la thieu focus trap: nhieu thu vien trap bang JS (chan su kien Tab) ma khong dung inert.\n'+
        '     KIEM TAY (chuan xac nhat): dat focus vao nut cuoi trong modal roi nhan Tab.\n'+
        '       - Focus quay lai dau modal => CO trap (P).\n'+
        '       - Focus nhay ra sidebar/bang phia sau => THIEU trap (F).','color:#c60');
    }
    trapNote = exposed>0 ? ' | nen sau chua che inert/aria-hidden => nhan Tab qua nut cuoi de xac nhan trap'
                         : ' | nen sau da che inert/aria-hidden => trap dung cach';
    if(!named) console.log('%cModal THIEU accessible name (khong co aria-label/aria-labelledby) => screen reader chi doc "dialog" ma khong biet dialog gi.\n'+
      '  LUU Y PHAN LOAI: day la loi WCAG that, NHUNG IA03-11 la ve DIEU HUONG BAN PHIM (Tab order, focus).\n'+
      '  => Khong dung loi nay de fail IA03-11. Hay log thanh finding rieng trong Bug Log (WCAG 4.1.2 Name/Role/Value).','color:#c00;font-weight:bold');
    say('IA03-11', posTab.length ? 'F' : '?',
      posTab.length ? posTab.length+' phan tu co tabindex duong => pha thu tu Tab'+trapNote
        : tabbable.length+' phan tu focus duoc, thu tu DOM hop ly, khong co tabindex duong'+trapNote+
          '. CON phai nhan Tab that xem co vien focus'+
          (!named?'  [rieng: modal thieu accessible name => log finding WCAG rieng, khong tinh vao muc nay]':''));
  } else {
    say('IA03-11', posTab.length ? 'F' : '?',
      posTab.length ? posTab.length+' phan tu co tabindex duong => pha thu tu Tab tu nhien'
        : tabbable.length+' phan tu focus duoc, khong co tabindex duong => thu tu DOM hop ly. CON phai nhan Tab that xem co vien focus va co tới duoc moi phan tu');
  }

  /* ---- manual-only ---- */
  H('Cac muc phai lam tay');
  say('IA03-04', M?'NA':'?', M?'modal dung close, xem IA03-08':'dat ngu canh (trang 3/filter), mo chi tiet, bam Back (app + browser) xem ve dung cho va giu context');
  say('IA03-05','?','thu keo-tha 1 hang/muc de doi thu tu (NA neu man khong co reorder)');
  say('IA03-07', M?'NA':'?', M?'modal khong doi route':'di qua nhieu trang, xem menu/header/nut co giu nguyen vi tri');

  /* ---- SUMMARY ---- */
  const nP=OUT.filter(o=>o.ketQua==='P').length, nF=OUT.filter(o=>o.ketQua==='F').length;
  const nNA=OUT.filter(o=>o.ketQua==='NA').length, nQ=OUT.filter(o=>o.ketQua==='?').length;
  console.log('%c==================== TONG KET IA-03 ====================',
    'font-size:14px;font-weight:bold;background:#630;color:#fff;padding:4px 10px');
  console.table(OUT.sort((a,b)=>a.muc.localeCompare(b.muc)));
  console.log('%cP(auto)='+nP+'   F(auto)='+nF+'   NA='+nNA+'   can-xem-tay='+nQ,
    'font-size:13px;font-weight:bold;background:#eee;padding:3px 10px');
  if(nF) console.log('%cCAC MUC FAIL: '+OUT.filter(o=>o.ketQua==='F').map(o=>o.muc).join(', ')+
    '  -> moi muc F can Note + anh bugs/<MAN>_<MUC>.png + 1 dong trong Bug Log','color:#c00;font-weight:bold');
  console.log('%cGoi y dong Task1B (chi cac muc script da chot):','background:#ffd;padding:3px 8px');
  console.log(OUT.filter(o=>o.ketQua!=='?').map(o=>'| '+o.muc+' | ... | '+o.ketQua+' | '+(o.ketQua==='P'?'':String(o.lyDo).replace(/\|/g,'/'))+' |').join('\n'));
  window.__ia03 = OUT;
})();
