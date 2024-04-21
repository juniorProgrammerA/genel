let ka = prompt("kaç üzterinden olsun") 
let ras =Math.floor(Math.random() * ka)
document.querySelector(".ran").addEventListener("click", () => {
    document.querySelector(".sayı").textContent=ras
    document.querySelector(".div").textContent=ras
    document.querySelector(".div").style.animation =`1s dön ${ras}`
})