const body = document.getElementById("body")
const hand = document.getElementById("hand")
const game = document.getElementById("game")
const scoreUI = document.getElementById("score")

let score = 0
let busy = false

// 手的初始偏移
const HAND_BASE_X = 90
const HAND_BASE_Y = 80

// 手移动时相对初始位置的位移
const HAND_MOVE_X = 20
const HAND_MOVE_Y = -60

// 初始位置
const HAND_REST =
  `translate(calc(-50% + ${HAND_BASE_X}px), calc(-50% + ${HAND_BASE_Y}px))`

// 动画位置（在初始位置基础上移动）
const HAND_TARGET =
  `translate(calc(-50% + ${HAND_BASE_X + HAND_MOVE_X}px), calc(-50% + ${HAND_BASE_Y + HAND_MOVE_Y}px))`

hand.style.transform = HAND_REST

game.onclick = async () => {

if(busy) return
busy = true

// 手移动到眼睛
hand.style.transform = HAND_TARGET

await sleep(300)

// 画完眼影
body.src = "animal_after.png"

// 加分
score++
scoreUI.textContent = "本次已为"+score+"只布菇单画上眼影！"

await sleep(400)

// 手收回
hand.style.transform = HAND_REST

await sleep(300)

// 淡出
body.style.opacity = 0
hand.style.opacity = 1

await sleep(1000)

// 重置
body.src = "animal_before.png"
body.style.opacity = 1
hand.style.opacity = 1

busy = false
}

function sleep(ms){
return new Promise(resolve=>setTimeout(resolve,ms))
}
