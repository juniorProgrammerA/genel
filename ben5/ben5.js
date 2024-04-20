let calculationScreen = document.querySelector(".calculation-screen")
let buttonsDiv = document.querySelector(".buttons-div")
let button0 = document.querySelector(".button0")
let button1 = document.querySelector(".button1")
let button2 = document.querySelector(".button2")
let button3 = document.querySelector(".button3")
let button4 = document.querySelector(".button4")
let button5 = document.querySelector(".button5")
let button6 = document.querySelector(".button6")
let button7 = document.querySelector(".button7")
let button8 = document.querySelector(".button8")
let button9 = document.querySelector(".button9")
let buttonArtı = document.querySelector(".buttonArtı")
let buttonEksi = document.querySelector(".buttonEksi")
let buttonCarpı = document.querySelector(".buttonCarpı")
let buttonBölme = document.querySelector(".buttonBölme")
let buttonEşittir = document.querySelector(".buttonEşittir")
let buttonC = document.querySelector(".buttonC")
var buttons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9];
var buttons2 = [buttonArtı, buttonEksi, buttonCarpı, buttonBölme]
var A1 = ""

for (let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", () => {
        A1 = calculationScreen.textContent
        calculationScreen.textContent = A1+buttons[i].textContent
    })
}
function konturol(oparatör,oparatörcıktı){
    oparatör.addEventListener("click", () => {
        calculationScreen.textContent += oparatörcıktı
        let hangioparatör = oparatörcıktı
        return hangioparatör
    })}

konturol(buttonArtı,"+")
konturol(buttonEksi,"-")
konturol(buttonBölme,"÷")
konturol(buttonCarpı,"x")


buttonEşittir.addEventListener("click",() => {
    let index = calculationScreen.textContent.indexOf("+");
    let index1 = calculationScreen.textContent.indexOf("-");
    let index2 = calculationScreen.textContent.indexOf("÷");
    let index3 = calculationScreen.textContent.indexOf("x");


if(calculationScreen.textContent.includes("+")){
    let öncesi = calculationScreen.textContent.substring(0, index);
let sonrası = calculationScreen.textContent.substring(index + 1);
öncesi = parseInt(öncesi)
sonrası = parseInt(sonrası)
    calculationScreen.textContent = öncesi + sonrası
}

if(calculationScreen.textContent.includes("-")){
    let öncesi = calculationScreen.textContent.substring(0, index1);
let sonrası = calculationScreen.textContent.substring(index1 + 1);
öncesi = parseInt(öncesi)
sonrası = parseInt(sonrası)
    calculationScreen.textContent = öncesi - sonrası
}

if(calculationScreen.textContent.includes("÷")){
let öncesi = calculationScreen.textContent.substring(0, index2);
let sonrası = calculationScreen.textContent.substring(index2 + 1);
öncesi = parseInt(öncesi)
sonrası = parseInt(sonrası)
    calculationScreen.textContent = öncesi / sonrası
}

if(calculationScreen.textContent.includes("x")){
    let öncesi = calculationScreen.textContent.substring(0, index3);
let sonrası = calculationScreen.textContent.substring(index3 + 1);
öncesi = parseInt(öncesi)
sonrası = parseInt(sonrası)
    calculationScreen.textContent = öncesi * sonrası
}
})
buttonC.addEventListener("click", function () {
    calculationScreen.textContent = ""
})

document.querySelector(".img").addEventListener("click", function () {
    calculationScreen.textContent = calculationScreen.textContent.slice(0, -1);
})










// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function () {
//         buttons = [button0, button1, button2, button3, button4, button5, button6, button7, button8, button9];
//         calculationScreen.textContent = buttons[i].textContent
//         let A1 = calculationScreen.textContent
//         if (calculationScreen.textContent.length == 1) {
//             for (let i = 0; i < buttons2.length; i++) {
//                 buttons2[i].addEventListener("click", function () {
//                     calculationScreen.textContent = A1 + buttons2[i].textContent
//                     let A2 = A1 + buttons2[i].textContent
//                     let B1 = buttons2[i].textContent
//                     if (calculationScreen.textContent.length == 2) {
//                         for (let i = 0; i < buttons.length; i++) {
//                             buttons[i].addEventListener("click", function () {
//                                 calculationScreen.textContent = A2 + buttons[i].textContent
//                                 let C1 = buttons[i].textContent
//                                 buttonEşittir.addEventListener("click", function () {
//                                     A1 = parseInt(A1)
//                                     C1 = parseInt(C1)
//                                     if (B1 == "+") {
//                                         calculationScreen.textContent = A1 + C1
//                                     }

//                                     if (B1 == "-") {
//                                         calculationScreen.textContent = A1 - C1
//                                     }

//                                     if (B1 == "*") {
//                                         calculationScreen.textContent = A1 * C1
//                                     }

//                                     if (B1 == "/") {
//                                         calculationScreen.textContent = A1 / C1
//                                     }
//                                 })
                              
//                             })
//                         }
//                     }
//                 })
//             } 
//         } 
//     })
// }
// buttonC.addEventListener("click", function () {
//     calculationScreen.textContent = "0"
//     location.reload();
// buttons=[]

// })
// // B1 oparatör
// // A1 birincis
// // C1 sonuncu