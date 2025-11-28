const run = document.getElementById('run');
const out = document.getElementById('out');
const hexTitle = document.getElementById('hexTitle');
const hexText = document.getElementById('hexText');
const hexImg = document.getElementById('hexImg');

function randomPick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

const guaList = [
  {name:'震为雷', hint:'动、惊、变 — 适合守中试探，勿贸然重仓'},
  {name:'坤为地', hint:'稳重承接 — 适合定投与持仓'},
  {name:'乾为天', hint:'阳刚上攻 — 有突破潜质，但伴随回撤'},
  {name:'离为火', hint:'热点板块优先，多看强势板块'},
];

run.addEventListener('click', ()=>{
  const birth = document.getElementById('birth').value.trim();
  const coin = document.getElementById('coin').value.trim() || 'BTC';
  if(!birth || birth.length<4){ alert('请输入出生年份，例如 1998'); return; }
  // 模拟生成
  const g = randomPick(guaList);
  hexTitle.innerText = `${g.name} · ${coin}`;
  hexText.innerText = `生肖线索（由出生年推断）：${(1998 - Number(birth)) % 12} — ${g.hint}（老子建议：轻仓试探）`;
  hexImg.innerText = `${g.name}（示意图）`;
  out.style.display = 'block';
});
