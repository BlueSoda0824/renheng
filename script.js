const body = document.getElementById("body");
const hand = document.getElementById("hand");
const game = document.getElementById("game");
const scoreUI = document.getElementById("score");

let score = 0;
let busy = false;

game.onclick = async () => {
  if (busy) return;
  busy = true;

  // 手移动到眼睛
  hand.style.transform = "translate(calc(-50% + 40px), calc(-50% - 30px))";
  await sleep(300);

  // 画完眼影
  body.src = "animal_after.png";

  // 加分
  score++;
  scoreUI.textContent = "本次已为" + score + "只布菇单画上眼影！";

  await sleep(400);

  // 手收回
  hand.style.transform = "translate(-50%, -50%)";
  await sleep(300);

  // 手先消失
  hand.style.opacity = "0";
  await sleep(500);

  // 动物再消失
  body.style.opacity = "0";
  await sleep(800);

  // 重置内容
  body.src = "animal_before.png";

  // 先出现动物
  body.style.opacity = "1";
  await sleep(300);

  // 再出现手
  hand.style.opacity = "1";
  hand.style.transform = "translate(-50%, -50%)";

  busy = false;
};

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
