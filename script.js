// 保持简单互动
document.addEventListener('DOMContentLoaded', ()=>{
  const hero = document.querySelector('.hero');
  if(!hero) return;
  hero.addEventListener('mousemove', (e)=>{
    const x = (e.clientX - window.innerWidth/2)/120;
    const y = (e.clientY - window.innerHeight/2)/240;
    hero.style.backgroundPosition = `${50 - x}% ${40 - y}%`;
  });
});
