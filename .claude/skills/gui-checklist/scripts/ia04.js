/* ============================================================
   IA-04 AUDIT — Feedback & State
   Dùng: F12 -> Console -> dán -> Enter  (tự nhận scope: modal nếu đang mở, không thì cả trang)
   §12: "P"/"F" là KẾT QUẢ ĐO của script; "?" là bạn phải tự thao tác kiểm.

   KHÁC 3 script kia: IA-04 là HÀNH VI SAU KHI THAO TÁC, nên script này có 2 phần:
     (A) đo tĩnh ngay lúc chạy  -> IA04-05, 06, 07, 08 (+ liệt kê nút phá hủy cho 03/04)
     (B) BẬT MONITOR nằm chờ    -> IA04-01, 02, 09, 10, 11
         => sau khi dán script, BẠN PHẢI thao tác thật (Save/Delete/Offline...) rồi đọc log.
         => gõ  __ia04stop()  để tắt monitor và in tổng kết lại.
   ============================================================ */
(() => {
  const M = document.querySelector('[role=dialog],[aria-modal=true],dialog[open]');
  const S = M || document.body;
  const H = t => console.log('%c'+t,'font-weight:bold;background:#efe0ff;padding:2px 8px;border-radius:3px');
  const OUT = [];
  const say = (id, verdict, reason) => {
    const old = OUT.find(o=>o.muc===id);
    if(old){ old.ketQua=verdict; old.lyDo=reason; } else OUT.push({ muc:id, ketQua:verdict, lyDo:reason });
    const col = verdict==='P' ? '#0a0' : verdict==='F' ? '#c00' : verdict==='NA' ? '#888' : '#c60';
    console.log('%c  => '+id+' : '+verdict+'  — '+reason,'color:'+col+';font-weight:bold');
  };
  console.log('%cIA-04 AUDIT (FEEDBACK & STATE) — scope: '+(M?'MODAL':'TOAN TRANG'),
    'font-size:14px;font-weight:bold;background:#527;color:#fff;padding:4px 10px');

  /* =========== PHAN A : DO TINH =========== */

  /* ---- IA04-03 / IA04-04 : nut pha huy + dialog xac nhan ---- */
  H('IA04-03 / IA04-04  thao tac pha huy + dialog xac nhan');
  const DESTRUCT=/delete|remove|xóa|xoa|block|chặn|chan|ban|reset password|đặt lại mật khẩu|revoke|thu hồi|thu hoi|deactivate|vô hiệu|vo hieu|archive|lưu trữ/i;
  const dbtn=[...S.querySelectorAll('button,[role=button],a')].filter(e=>e.offsetParent!==null)
    .filter(e=>DESTRUCT.test((e.innerText||e.getAttribute('aria-label')||e.title||'')))
    .map(el=>({ nhan:(el.innerText||el.getAttribute('aria-label')||el.title||'(icon)').trim().slice(0,26),
                tag:el.tagName.toLowerCase(),
                mauChu:getComputedStyle(el).color, mauNen:getComputedStyle(el).backgroundColor }));
  if(dbtn.length) console.table(dbtn);
  console.log('nut pha huy tim thay = '+dbtn.length);
  if(!dbtn.length){
    say('IA04-03','NA','man/modal nay khong co thao tac pha huy (khong tim thay Delete/Block/Reset...)');
    say('IA04-04','NA','khong co dialog xac nhan thao tac pha huy — xem IA04-03');
  } else {
    say('IA04-03','?','bam '+dbtn.map(b=>'"'+b.nhan+'"').join(', ')+' -> co dialog xac nhan khong, va dialog co NEU HAU QUA cu the (ten doi tuong, "khong the hoan tac") hay chi noi chung chung');
    say('IA04-04','?','trong dialog do: nut chinh/nut huy co phan biet ro (mau, thu tu) khong; nut nguy hiem CO PHAI la mac dinh/auto-focus khong (neu co => F)');
  }

  /* ---- IA04-05 : badge ---- */
  H('IA04-05  badge / chip / counter');
  const bsel='[role=status],[class*=badge i],[class*=Badge],[class*=chip i],[class*=Chip],[class*=pill i],[class*=tag i],sup';
  const badges=[...S.querySelectorAll(bsel)].filter(e=>e.offsetParent!==null&&(e.textContent||'').trim().length<=24);
  if(badges.length) console.table(badges.slice(0,20).map(el=>({
    noiDung:(el.textContent||'').trim().slice(0,24)||'(rong)', tag:el.tagName.toLowerCase(),
    cls:(el.className||'').toString().slice(0,34),
    mauNen:getComputedStyle(el).backgroundColor, laSo:/^\d+$/.test((el.textContent||'').trim()) })));
  say('IA04-05', badges.length===0 ? 'NA' : '?',
    badges.length===0 ? 'khong tim thay badge/chip/counter tren pham vi nay'
      : badges.length+' badge/chip => tu kiem: doi state (them/xoa/doc thong bao) roi xem so/nhan co cap nhat dung khong');

  /* ---- IA04-06 : progress bar ---- */
  H('IA04-06  progress bar');
  const prog=[...S.querySelectorAll('progress,[role=progressbar],[class*=progress i]')].filter(e=>e.offsetParent!==null);
  if(prog.length) console.table(prog.map(el=>({ tag:el.tagName.toLowerCase(),
    role:el.getAttribute('role')||'(none)', valueNow:el.getAttribute('aria-valuenow')??el.value??'(none)',
    valueMax:el.getAttribute('aria-valuemax')??el.max??'(none)', cls:(el.className||'').toString().slice(0,34) })));
  say('IA04-06', prog.length===0 ? 'NA' : '?',
    prog.length===0 ? 'khong co progress bar tren pham vi nay'
      : prog.length+' progress bar => chay tac vu that, xem no tang dan hay dung hinh / nhay 0->100');

  /* ---- IA04-07 : mau trang thai nhat quan ---- */
  H('IA04-07  mau trang thai nhat quan va co nghia');
  const STATUS=/^(active|inactive|enabled|disabled|pending|approved|rejected|blocked|banned|success|failed|error|warning|draft|published|expired|online|offline|đang hoạt động|hoạt động|không hoạt động|bị khóa|chờ duyệt|đã duyệt|từ chối|thành công|thất bại|lỗi|nháp|hết hạn)$/i;
  const stEls=[];
  S.querySelectorAll('*').forEach(el=>{
    if(el.children.length||el.offsetParent===null) return;
    const t=(el.textContent||'').trim(); if(!t||t.length>22||!STATUS.test(t)) return;
    const cs=getComputedStyle(el);
    let bg=cs.backgroundColor, n=el;
    while((!bg||bg==='rgba(0, 0, 0, 0)')&&n.parentElement&&n!==S){ n=n.parentElement; bg=getComputedStyle(n).backgroundColor; }
    stEls.push({ nhan:t, nhanChuan:t.toLowerCase(), mauChu:cs.color, mauNen:bg });
  });
  if(stEls.length) console.table(stEls.slice(0,25));
  const byLabel={};
  stEls.forEach(s=>{ (byLabel[s.nhanChuan]=byLabel[s.nhanChuan]||new Set()).add(s.mauChu+' / '+s.mauNen); });
  const clash=Object.entries(byLabel).filter(([,set])=>set.size>1);
  if(clash.length){ console.log('%c-- CUNG NHAN nhung KHAC MAU --','color:#c00;font-weight:bold');
    clash.forEach(([k,set])=>console.log('  "'+k+'": '+[...set].join('   |   '))); }
  say('IA04-07', stEls.length===0 ? 'NA' : clash.length ? 'F' : 'P',
    stEls.length===0 ? 'khong tim thay nhan trang thai nao tren pham vi nay'
      : clash.length ? clash.length+' nhan trang thai dung NHIEU mau khac nhau cho cung 1 gia tri => khong nhat quan: '+clash.map(c=>'"'+c[0]+'"').join(', ')
      : Object.keys(byLabel).length+' loai trang thai ('+Object.keys(byLabel).join(', ')+'), moi loai chi 1 to hop mau => nhat quan. CON nen doi chieu voi man hinh khac xem cung nghia khong');

  /* ---- IA04-08 : khong chi dung mau ---- */
  H('IA04-08  khong chi dung mau (kem text/icon)');
  const dots=[];
  S.querySelectorAll('span,i,div,em').forEach(el=>{
    if(el.children.length||el.offsetParent===null) return;
    if((el.textContent||'').trim()) return;                       // co chu => khong phai dot mau tran
    const b=el.getBoundingClientRect(); if(!b.width||b.width>20||b.height>20) return;
    const cs=getComputedStyle(el);
    const coMau=cs.backgroundColor&&cs.backgroundColor!=='rgba(0, 0, 0, 0)';
    if(!coMau) return;
    const tron=parseFloat(cs.borderRadius)>=b.width/2-1;
    const chuKemBen=(el.parentElement?.textContent||'').trim();
    const coAria=el.getAttribute('aria-label')||el.getAttribute('title')||el.getAttribute('role');
    dots.push({ kichThuoc:Math.round(b.width)+'x'+Math.round(b.height), mauNen:cs.backgroundColor, tron,
      chuKemBen:chuKemBen.slice(0,20)||'(KHONG CO)', aria:coAria||'(none)',
      chiCoMau:!chuKemBen&&!coAria });
  });
  const colorOnly=dots.filter(d=>d.chiCoMau);
  if(dots.length) console.table(dots.slice(0,20));
  say('IA04-08', (stEls.length===0&&dots.length===0) ? 'NA' : colorOnly.length ? 'F' : 'P',
    (stEls.length===0&&dots.length===0) ? 'khong co chi bao trang thai bang mau tren pham vi nay'
      : colorOnly.length ? colorOnly.length+' cham mau KHONG kem chu/icon/aria-label nao => nguoi mu mau khong doc duoc'
      : 'moi chi bao mau deu kem nhan chu ben canh ('+stEls.length+' nhan chu, '+dots.length+' cham mau co chu kem) => khong dua vao mau don thuan');

  /* =========== PHAN B : MONITOR CHO THAO TAC =========== */
  H('IA04-01 / 02 / 09 / 10 / 11  — BAT MONITOR (nam cho ban thao tac)');

  if(window.__ia04stop) { window.__ia04stop(); console.log('(da tat monitor cu truoc khi bat cai moi)'); }

  const TOASTRE=/toast|snackbar|notification|alert|message|notistack|sonner|swal/i;
  const RAWERR=/failed to fetch|network ?error|networkerror|error \d{3}|\b5\d\d\b|exception|undefined is not|cannot read|traceback|stack trace|internal server/i;
  let sawToast=0, sawRawErr=0, lastToastMs=null;

  const looksToast = n => {
    if(!(n instanceof HTMLElement)) return false;
    const cls=(n.className||'').toString(), role=n.getAttribute('role')||'';
    return TOASTRE.test(cls)||TOASTRE.test(n.id||'')||role==='alert'||role==='status'||
           n.getAttribute('aria-live')==='assertive'||n.getAttribute('aria-live')==='polite';
  };

  const obs=new MutationObserver(ms=>{
    ms.forEach(mu=>{
      mu.addedNodes.forEach(n=>{
        if(!(n instanceof HTMLElement)) return;
        const hit = looksToast(n) ? n : [...n.querySelectorAll('*')].find(looksToast);
        const txt=(hit?hit:n).textContent?.trim()||'';
        if(hit && txt){
          sawToast++;
          const t0=performance.now();
          console.log('%c[TOAST #'+sawToast+'] "'+txt.slice(0,90)+'"','color:#07c;font-weight:bold');
          const node=hit;
          const chk=setInterval(()=>{ if(!document.body.contains(node)){ clearInterval(chk);
            lastToastMs=performance.now()-t0;
            console.log('%c[TOAST bien mat] sau '+(lastToastMs/1000).toFixed(1)+'s'+
              '   (IA04-02: >=4s hoac co nut dong = du doc)','color:#07c'); } },200);
          setTimeout(()=>clearInterval(chk),60000);
        }
        if(txt && RAWERR.test(txt)){
          sawRawErr++;
          console.log('%c[LOI THO HIEN CHO USER] "'+txt.slice(0,110)+'"  => IA04-10 = F','color:#c00;font-weight:bold');
        }
      });
    });
  });
  obs.observe(document.body,{childList:true,subtree:true});

  /* Doc method/url DUNG CACH: app co the goi fetch(new Request(url,{method:'POST'}))
     => luc do a[1] la undefined, KHONG duoc lay method tu a[1] roi mac dinh 'GET'. */
  const reqInfo = a => {
    const r0 = a[0];
    const isReq = typeof Request !== 'undefined' && r0 instanceof Request;
    const url = isReq ? r0.url : (typeof r0 === 'string' ? r0 : (r0 && r0.url) || String(r0 || ''));
    const method = (a[1] && a[1].method) || (isReq ? r0.method : null) || 'GET';
    return { url, method: method.toUpperCase() };
  };

  /* Nhan dien file tai ve (quan trong cho luong Export) */
  const FILERE=/spreadsheetml|officedocument|application\/vnd\.ms-excel|text\/csv|application\/octet-stream|application\/zip/i;
  let sawFile=0;
  const noteFile=(nguon,chiTiet)=>{ sawFile++;
    console.log('%c[FILE TAI VE #'+sawFile+'] '+nguon+'  '+chiTiet,'color:#0a7;font-weight:bold'); };

  const origFetch=window.fetch;
  window.fetch=function(...a){
    const { url, method } = reqInfo(a);
    const t0=performance.now();
    if(method!=='GET') console.log('%c[REQ] '+method+' '+url.slice(0,90),'color:#888');
    return origFetch.apply(this,a).then(r=>{
      const ms=Math.round(performance.now()-t0);
      const ct=r.headers&&r.headers.get?(r.headers.get('content-type')||''):'';
      const cd=r.headers&&r.headers.get?(r.headers.get('content-disposition')||''):'';
      if(FILERE.test(ct)||/attachment/i.test(cd))
        noteFile('server tra file','status='+r.status+' sau '+ms+'ms | content-type='+ct.slice(0,60)+(cd?' | '+cd.slice(0,60):''));
      if(method!=='GET'||!r.ok)
        console.log('%c[RES] '+method+' '+r.status+' sau '+ms+'ms  '+url.slice(0,80),
          'color:'+(r.ok?'#0a0':'#c00'));
      if(method!=='GET'&&r.ok) console.log('%c  => bat dau dem: bao lau nua UI moi doi? (IA04-09) va gia tri co dung khong? (IA04-11)','color:#07c');
      return r;
    }).catch(e=>{
      console.log('%c[RES] '+method+' THAT BAI: '+e.message+'  => app hien thi lai gi cho user? (IA04-10)','color:#c00;font-weight:bold');
      throw e;
    });
  };

  /* Hook XHR — app dung axios-XHR/jQuery se khong qua fetch */
  const OrigXHR=window.XMLHttpRequest;
  let xhrCount=0;
  if(OrigXHR){
    window.XMLHttpRequest=function(){
      const x=new OrigXHR(); let _m='GET', _u='', _t0=0;
      const open=x.open;
      x.open=function(m,u,...rest){ _m=(m||'GET').toUpperCase(); _u=u||''; return open.call(this,m,u,...rest); };
      const send=x.send;
      x.send=function(...s){ _t0=performance.now(); xhrCount++;
        if(_m!=='GET') console.log('%c[REQ-XHR] '+_m+' '+String(_u).slice(0,90),'color:#888');
        x.addEventListener('load',()=>{
          const ms=Math.round(performance.now()-_t0);
          const ct=x.getResponseHeader&&(x.getResponseHeader('content-type')||'');
          const cd=x.getResponseHeader&&(x.getResponseHeader('content-disposition')||'');
          if(FILERE.test(ct||'')||/attachment/i.test(cd||''))
            noteFile('server tra file (XHR)','status='+x.status+' sau '+ms+'ms | content-type='+String(ct).slice(0,60));
          if(_m!=='GET'||x.status>=400)
            console.log('%c[RES-XHR] '+_m+' '+x.status+' sau '+ms+'ms  '+String(_u).slice(0,80),
              'color:'+(x.status<400?'#0a0':'#c00'));
        });
        x.addEventListener('error',()=>console.log('%c[RES-XHR] '+_m+' THAT BAI (network)  => app hien gi cho user? (IA04-10)','color:#c00;font-weight:bold'));
        return send.apply(this,s); };
      return x;
    };
    window.XMLHttpRequest.prototype=OrigXHR.prototype;
  }

  /* Hook createObjectURL — bat truong hop file duoc tao o CLIENT (Blob + <a download>),
     luc do KHONG co request nao ca => log rong khong co nghia la "khong co gi xay ra". */
  const origCOU=URL.createObjectURL;
  URL.createObjectURL=function(obj){
    const url=origCOU.call(this,obj);
    const type=(obj&&obj.type)||'', size=(obj&&obj.size)!=null?obj.size:'?';
    if(FILERE.test(type)||type==='')
      noteFile('tao o CLIENT (Blob)','type='+(type||'(khong co)')+' | '+size+' bytes => file KHONG di qua network, khong the test bang Offline theo cach thong thuong');
    else console.log('%c[createObjectURL] type='+type+' '+size+' bytes','color:#888');
    return url;
  };

  const T=s=>console.log('%c'+s,'background:#ffd;padding:3px 8px');
  T('BAY GIO HAY THAO TAC THAT (monitor dang chay):\n'+
    ' 1. Sua/tao roi Submit         => co [TOAST] khong (IA04-01), bien mat sau bao lau (IA04-02)\n'+
    ' 2. Submit xong               => bang/list tu doi hay phai F5 (IA04-09), gia tri moi co dung (IA04-11)\n'+
    ' 3. Network -> Offline (KHONG F5) roi Submit  => app bao gi (IA04-10)\n'+
    ' 4. Bam nut pha huy           => dialog xac nhan the nao (IA04-03/04)\n'+
    'XONG THI GO:  __ia04stop()   de tat hook va in tong ket.');

  say('IA04-01','?','thao tac roi xem console co dong [TOAST] khong — khong co dong nao = khong co feedback = F');
  say('IA04-02','?','doc dong [TOAST bien mat] sau X.Xs — <3s va khong co nut dong => F; NA neu khong he co toast');
  say('IA04-09','?','sau dong [RES ... 200], bang/list co tu cap nhat khong hay phai F5 (phai F5 => F)');
  say('IA04-10','?','bat Offline roi Submit — neu console in [LOI THO HIEN CHO USER] hoac UI hien "Failed to fetch" => F');
  say('IA04-11','?','doi mot gia tri co the thay bang mat (VD Vai tro) -> Luu -> doi chieu hang trong bang co dung gia tri moi');

  const summary=()=>{
    const nP=OUT.filter(o=>o.ketQua==='P').length, nF=OUT.filter(o=>o.ketQua==='F').length;
    const nNA=OUT.filter(o=>o.ketQua==='NA').length, nQ=OUT.filter(o=>o.ketQua==='?').length;
    console.log('%c==================== TONG KET IA-04 ====================',
      'font-size:14px;font-weight:bold;background:#527;color:#fff;padding:4px 10px');
    console.table(OUT.slice().sort((a,b)=>a.muc.localeCompare(b.muc)));
    console.log('%cP(auto)='+nP+'   F(auto)='+nF+'   NA='+nNA+'   can-xem-tay='+nQ,
      'font-size:13px;font-weight:bold;background:#eee;padding:3px 10px');
    console.log('monitor ghi nhan: toast='+sawToast+'  |  loi tho lo ra UI='+sawRawErr+
      '  |  file tai ve='+sawFile+'  |  xhr='+xhrCount+
      (lastToastMs!==null?'  |  toast cuoi ton tai '+(lastToastMs/1000).toFixed(1)+'s':''));
    if(sawToast===0) console.log('%cCHUA thay toast nao. Neu ban DA submit thanh cong ma van 0 toast => IA04-01 = F.','color:#c00;font-weight:bold');
    if(sawRawErr)   console.log('%cCo '+sawRawErr+' lan loi ky thuat tho lo ra UI => IA04-10 = F.','color:#c00;font-weight:bold');
    if(nF) console.log('%cCAC MUC FAIL: '+OUT.filter(o=>o.ketQua==='F').map(o=>o.muc).join(', ')+
      '  -> moi muc F can Note + anh bugs/<MAN>_<MUC>.png + 1 dong trong Bug Log','color:#c00;font-weight:bold');
    console.log('%cGoi y dong Task1B (chi cac muc script da chot):','background:#ffd;padding:3px 8px');
    console.log(OUT.filter(o=>o.ketQua!=='?').sort((a,b)=>a.muc.localeCompare(b.muc))
      .map(o=>'| '+o.muc+' | ... | '+o.ketQua+' | '+(o.ketQua==='P'?'':String(o.lyDo).replace(/\|/g,'/'))+' |').join('\n'));
    window.__ia04=OUT;
  };
  summary();

  window.__ia04stop=()=>{
    obs.disconnect(); window.fetch=origFetch; URL.createObjectURL=origCOU;
    if(OrigXHR) window.XMLHttpRequest=OrigXHR;
    window.__ia04stop=null;
    console.log('%cMonitor IA-04 da TAT (fetch/XHR/createObjectURL tra ve nguyen ban).','background:#527;color:#fff;padding:3px 10px');
    summary();
  };
  window.__ia04=OUT;
})();
