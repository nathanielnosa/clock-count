function clockCount(){
  const now = new Date();
  let h = now.getHours(),
      m = now.getMinutes(),
      s = now.getSeconds();

      s = s > 9 ? s : '0' + s;
      m = m > 9 ? m : '0' + m;
      h = h > 9 ? h : '0' + h;
  const clock = h + ':' + m + ':' + s;
  document.querySelector('#count').innerHTML = clock;

  setTimeout(clockCount, 500)
}

clockCount();