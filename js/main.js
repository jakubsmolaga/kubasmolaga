console.log("static file loaded!")
window.onscroll = ()=>{
  console.log(window.pageYOffset);
  if(window.pageYOffset > 0)
    document.getElementById('scrollToTop').classList.add('visible');
  else
    document.getElementById('scrollToTop').classList.remove('visible');  
}
