const body = document.getElementById("body")
const hand = document.getElementById("hand")
const game = document.getElementById("game")
const scoreUI = document.getElementById("score")

let score = 0
let busy = false

const isMobile = window.innerWidth <= 768

game.onclick = async () => {

if(busy) return
busy = true

// 手移动到眼睛
hand.style.transform = isMobile
? "translate(calc(-50% + 20px), calc(-50% - 15px))"
: "translate(calc(-50% + 40px), calc(-50% - 30px))"

await sleep(300)

// 画完眼影
body.src = "animal_after.png"

// 加分
score++
scoreUI.textContent = "本次已为"+score+"只布菇单画上眼影！"

await sleep(400)

// 手收回
hand.style.transform = isMobile
? "translate(calc(-50% + 20px), calc(-50% + 20px))"
: "translate(-50%, -50%)"

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
