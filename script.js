const body = document.getElementById("body");
const hand = document.getElementById("hand");
const game = document.getElementById("game");
const scoreUI = document.getElementById("score");

let score = 0;
let busy = false;

/* 手的基础位置 */
const HAND_OFFSET_X = -120;
const HAND_OFFSET_Y = 40;

const HAND_REST =
  `translate(calc(-50% + ${HAND_OFFSET_X}px), calc(-50% + ${HAND_OFFSET_Y}px))`;

const HAND_TARGET =
  `translate(calc(-50% + ${HAND_OFFSET_X + 40}px), calc(-50% + ${HAND_OFFSET_Y - 30}px))`;

hand.style.transform = HAND_REST;

game.onclick = async () => {
  if (busy) return;
  busy = true;

  hand.style.transform = HAND_TARGET;
  await sleep(300);

  body.src = "animal_after.png";

  score++;
  scoreUI.textContent = "本次已为" + score + "只布菇单画上眼影！";

  await sleep(400);

  hand.style.transform = HAND_REST;

  await sleep(300);

  body.style.opacity = 0;
  await sleep(800);

  body.src = "animal_before.png";
  body.style.opacity = 1;

  busy = false;
};

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}
