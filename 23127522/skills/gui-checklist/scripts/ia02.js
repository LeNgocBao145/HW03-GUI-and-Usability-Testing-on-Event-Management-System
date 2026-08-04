/* ============================================================
   IA-02 AUDIT — Forms
   Dùng: mở form/modal -> F12 -> Console -> dán -> Enter
   §12: "P"/"F" là KẾT QUẢ ĐO của script; "?" là bạn phải tự thao tác kiểm.
   ============================================================ */
(() => {
  const M = document.querySelector('[role=dialog],[aria-modal=true],dialog[open]');
  const S = M || document.body;
  const H = t => console.log('%c'+t,'font-weight:bold;background:#e8ffe8;padding:2px 8px;border-radius:3px');
  const OUT = [];
  const say = (id, verdict, reason) => {
    OUT.push({ muc:id, ketQua:verdict, lyDo:reason });
    const col = verdict==='P' ? '#0a0' : verdict==='F' ? '#c00' : verdict==='NA' ? '#888' : '#c60';
    console.log('%c  => '+id+' : '+verdict+'  — '+reason,'color:'+col+';font-weight:bold');
  };
  console.log('%cIA-02 AUDIT (FORMS) — scope: '+(M?'MODAL':'TOAN TRANG'),
    'font-size:14px;font-weight:bold;background:#252;color:#fff;padding:4px 10px');

  const F=[...S.querySelectorAll('input:not([type=hidden]),select,textarea')];
  if(!F.length){
    console.warn('Khong tim thay field nao => man nay khong co form.');
    for(let i=1;i<=13;i++) say('IA02-'+String(i).padStart(2,'0'),'NA','man nay khong co form nhap lieu');
    console.table(OUT); window.__ia02=OUT; return;
  }
  console.log('tong so field = '+F.length);

  /* ---- IA02-01 : label ---- */
  H('IA02-01  label gan dung input');
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
  const noLab=lab.filter(x=>!x.hasLabel), phOnly=lab.filter(x=>x.placeholderLamLabel);
  console.table(lab);
  say('IA02-01', noLab.length===0 ? 'P' : 'F',
    noLab.length===0 ? 'ca '+F.length+' field deu co label gan dung'
      : noLab.length+'/'+F.length+' field THIEU label'+(phOnly.length?' ('+phOnly.length+' dung placeholder thay label)':'')+
        ' => '+noLab.map(x=>x.field).join(', '));

  /* ---- IA02-02 : required ---- */
  H('IA02-02  truong bat buoc co danh dau thi giac');
  const req=F.filter(el=>el.required||el.getAttribute('aria-required')==='true');
  if(!req.length){
    say('IA02-02','?','KHONG field nao co required/aria-required => kiem tay: xoa trong roi Submit. App chan => validate bang JS (xet tiep dau *). App cho luu rong => F');
  } else {
    const rrows=req.map(el=>{
      const l=(el.id&&document.querySelector('label[for="'+CSS.escape(el.id)+'"]'))||el.closest('label');
      const t=l?.textContent?.trim()||'', near=el.parentElement?.textContent||'';
      const star=/\*/.test(t)||/\*/.test(near);
      const word=/bắt buộc|required/i.test(t)||/bắt buộc|required/i.test(near);
      return { field:el.name||el.id||el.type, label:t.slice(0,28), coDauSao:star, coChuBatBuoc:word, coDanhDau:star||word }; });
    console.table(rrows);
    const bad=rrows.filter(r=>!r.coDanhDau);
    say('IA02-02', bad.length===0 ? 'P' : 'F',
      req.length+' field bat buoc, '+bad.length+' THIEU danh dau thi giac (* hoac "bat buoc")'+
      (bad.length?' => '+bad.map(x=>x.field).join(', '):''));
  }

  /* ---- IA02-03 : constraints ---- */
  H('IA02-03  rang buoc validation (thuoc tinh HTML)');
  const vrows=F.map(el=>({ field:el.name||el.id||el.type, type:el.type||el.tagName.toLowerCase(),
    required:!!el.required, pattern:el.pattern||'', min:el.min||'', max:el.max||'',
    minLength:el.minLength>0?el.minLength:'', maxLength:(el.maxLength>0&&el.maxLength<524288)?el.maxLength:'' }));
  console.table(vrows);
  const hasEmail=vrows.some(r=>r.type==='email'), anyConstraint=vrows.some(r=>r.required||r.pattern||r.min||r.max||r.minLength||r.maxLength);
  say('IA02-03', anyConstraint ? '?' : 'F',
    anyConstraint ? 'co rang buoc o tang HTML'+(hasEmail?' (co type=email)':'')+' => con phai kiem tay: nhap email sai, so am, chuoi qua dai'
                  : 'KHONG field nao co rang buoc HTML nao => nghi van khong validate, kiem tay ngay');

  /* ---- IA02-11 : double submit + BAY: nut X la submit? ---- */
  H('IA02-11  chong double-submit  +  canh bao nut submit an');
  const btns=[...S.querySelectorAll('button,input[type=submit]')].filter(e=>e.offsetParent!==null)
    .map(el=>({ nhan:(el.innerText||el.value||el.getAttribute('aria-label')||'(khong chu)').trim().slice(0,24),
                type:el.type||'button', disabled:!!el.disabled, ariaBusy:el.getAttribute('aria-busy')||'(none)' }));
  console.table(btns);
  const submits=btns.filter(b=>b.type==='submit');
  const suspicious=submits.filter(b=>/^\(khong chu\)$|đóng|dong|close|hủy|huy|cancel|×|✕/i.test(b.nhan));
  if(suspicious.length){
    console.log('%cCANH BAO: co nut type="submit" nhung nhan la dong/huy/khong chu: '+
      suspicious.map(b=>'"'+b.nhan+'"').join(', '),'color:#c00;font-weight:bold');
    console.log('%c  => nut nay thieu type="button" nen mac dinh thanh submit.\n'+
      '     Hau qua co the: (1) bam X lai SUBMIT form, (2) nhan Enter trong o text kich hoat nut submit DAU TIEN = nut X => dong modal thay vi luu.\n'+
      '     KIEM TAY: dat con tro trong o text roi nhan Enter, xem no luu / dong / khong lam gi.','color:#c00');
  }
  say('IA02-11','?','bam Submit va quan sat nut co disable/loading trong luc gui khong (script khong do duoc trang thai runtime)');

  /* ---- IA02-12 : keyboard ---- */
  H('IA02-12  keyboard: thu tu Tab + Enter submit');
  const FSEL='a[href],button,input:not([type=hidden]),select,textarea,[tabindex]:not([tabindex="-1"])';
  const tabbable=[...S.querySelectorAll(FSEL)].filter(e=>e.offsetParent!==null&&!e.disabled);
  const posTab=tabbable.filter(e=>+(e.getAttribute('tabindex')||0)>0);
  console.table(tabbable.map((el,i)=>({ thuTu:i+1, tag:el.tagName.toLowerCase(),
    nhan:(el.innerText||el.value||el.placeholder||el.getAttribute('aria-label')||'').trim().slice(0,24),
    tabindex:el.getAttribute('tabindex')??'(auto)' })));
  console.log('%cLuu y: cot outline o trang thai thuong KHONG phai focus ring. Ring thuong chi hien voi :focus-visible => phai nhan Tab THAT de xem.','color:#c60');
  say('IA02-12', posTab.length ? 'F' : '?',
    posTab.length ? posTab.length+' phan tu co tabindex duong => pha thu tu Tab tu nhien'
      : 'thu tu DOM co '+tabbable.length+' phan tu, khong co tabindex duong => thu tu hop ly. CON phai: nhan Tab that xem co vien focus, nhan Enter xem submit dung'+
        (suspicious.length?' (DAC BIET: xem canh bao nut submit an o tren)':''));

  /* ---- manual-only ---- */
  H('Cac muc phai lam tay');
  say('IA02-04','?','gay loi 1 field, xem thong bao hien SAT field do hay gom mot cho');
  say('IA02-05','?','doc noi dung loi: co ro nghia + chi cach sua, hay la ma loi tho');
  say('IA02-06','?','dat ngay bat dau sau ngay ket thuc / thoi diem qua khu (NA neu form khong co ngay)');
  say('IA02-07','?','upload sai dinh dang/qua dung luong roi upload anh dung (NA neu khong co upload)');
  say('IA02-08','?','bam bold/list/link trong rich-text, luu roi mo lai (NA neu khong co editor)');
  say('IA02-09','?','dien form -> gay validation fail -> submit -> xem du lieu con giu khong');
  say('IA02-10','?','nhap do roi dong/bam backdrop/roi trang -> co xac nhan hay mat am tham');
  say('IA02-13','?','kiem mac dinh cua toggle cau hinh + thu gia tri khong hop le (Max Slots <= 0)');

  /* ---- SUMMARY ---- */
  const nP=OUT.filter(o=>o.ketQua==='P').length, nF=OUT.filter(o=>o.ketQua==='F').length;
  const nNA=OUT.filter(o=>o.ketQua==='NA').length, nQ=OUT.filter(o=>o.ketQua==='?').length;
  console.log('%c==================== TONG KET IA-02 ====================',
    'font-size:14px;font-weight:bold;background:#252;color:#fff;padding:4px 10px');
  console.table(OUT);
  console.log('%cP(auto)='+nP+'   F(auto)='+nF+'   NA='+nNA+'   can-xem-tay='+nQ,
    'font-size:13px;font-weight:bold;background:#eee;padding:3px 10px');
  if(nF) console.log('%cCAC MUC FAIL: '+OUT.filter(o=>o.ketQua==='F').map(o=>o.muc).join(', ')+
    '  -> moi muc F can Note + anh bugs/<MAN>_<MUC>.png + 1 dong trong Bug Log','color:#c00;font-weight:bold');
  console.log('%cGoi y dong Task1B (chi cac muc script da chot):','background:#ffd;padding:3px 8px');
  console.log(OUT.filter(o=>o.ketQua!=='?').map(o=>'| '+o.muc+' | ... | '+o.ketQua+' | '+(o.ketQua==='P'?'':String(o.lyDo).replace(/\|/g,'/'))+' |').join('\n'));
  window.__ia02 = OUT;
})();
