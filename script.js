let score = 0
let busy = false

const animal = document.getElementById("animal")
const scoreUI = document.getElementById("score")

animal.onclick = async () => {

if(busy) return
busy = true

// 1 伸手
animal.src = "animal_hand.png"

await sleep(300)

// 2 画完
animal.src = "animal_after.png"

// 3 加分
score++
scoreUI.textContent = score

await sleep(500)

// 4 慢慢消失
animal.style.opacity = 0

await sleep(1000)

// 5 重置
animal.src = "animal_before.png"
animal.style.opacity = 1

busy = false

}

function sleep(ms){
return new Promise(r=>setTimeout(r,ms))
}
