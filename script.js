// 简单的页面小交互（云雾移动）
document.addEventListener('DOMContentLoaded', ()=>{
  // subtle parallax on mouse move
  const hero = document.querySelector('.hero');
  if(!hero) return;
  hero.addEventListener('mousemove', (e)=>{
    const x = (e.clientX - window.innerWidth/2)/100;
    const y = (e.clientY - window.innerHeight/2)/200;
    hero.style.backgroundPosition = `${50 - x}% ${40 - y}%`;
  });
});
