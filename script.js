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

hand.style.transform = isMobile
? "translate(calc(-50% + 10px), calc(-50% - 10px))"
: "translate(calc(-50% + 30px), calc(-50% - 35px))"

await sleep(300)


body.src = "animal_after.png"


score++
scoreUI.textContent = "本次已为"+score+"只布菇丹画上眼影！"

await sleep(400)


hand.style.transform = isMobile
? "translate(calc(-50% + 0px), calc(-50% + 0px))"
: "translate(-50%, -50%)"

await sleep(300)


body.style.opacity = 0
hand.style.opacity = 1

await sleep(1000)


body.src = "animal_before.png"
body.style.opacity = 1
hand.style.opacity = 1

busy = false
}

function sleep(ms){
return new Promise(resolve=>setTimeout(resolve,ms))
}
