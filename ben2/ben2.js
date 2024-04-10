

// Aşağıdakii yeri foraraflarınız kadar doldurunuz
//Örnek {tabindex:"5",src:"ressimlerim/res5.jpg"},
let foto =[
    {tabindex:"1",src:"ressimlerim/res1.jpg",class:"B1",id:"ahmet1"},
    {tabindex:"2",src:"ressimlerim/res2.jpg",class:"B2",id:"ahmet2"},
    {tabindex:"3",src:"ressimlerim/res3.jpg",class:"B3",id:"ahmet3"},
    {tabindex:"4",src:"ressimlerim/res4.jpg",class:"B4",id:"ahmet4"},
    {tabindex:"5",src:"ressimlerim/res5.jpg",class:"B5",id:"ahmet5"},
    {tabindex:"6",src:"ressimlerim/res6.jpg",class:"B6",id:"ahmet6"},
    {tabindex:"7",src:"ressimlerim/res7.jpg",class:"B7",id:"ahmet7"},
    {tabindex:"8",src:"ressimlerim/res8.jpg",class:"B8",id:"ahmet8"},
    // {tabindex:"9",src:"ressimlerim/res5.jpg",class:"B9",id:"ahmet9"},
    // {tabindex:"10",src:"ressimlerim/res6.jpg",class:"B10",id:"ahmet10"},
    // {tabindex:"11",src:"ressimlerim/res7.jpg",class:"B11",id:"ahmet11"},
    // {tabindex:"12",src:"ressimlerim/res8.jpg",class:"B12",id:"ahmet12"},
    ] 
    
        let is =[".B1",'.B2','.B3','.B4']
        let is2 =[".B5",".B6",".B7",".B8",]
        let is3 =["ahmet1","ahmet2","ahmet3","ahmet4",]
    
    
    let liste =`<div class="div"></div>`
    for(let i=0;i<foto.length;i++){
        liste += `<img tabindex=${foto[i].tabindex}  src=${foto[i].src}  class=${foto[i].class} id=${foto[i].id} >`}
    liste +=`<div class="ben"></div>`
    
    document.getElementById("gönder_1").innerHTML=liste
    
        for(let i=0;i<foto.length;i++){
            var images = document.querySelectorAll(is[i]);
            if (foto.length > 4 ) {
                images.forEach(function(img) {
                    img.style.height = '200px';
                });
                document.getElementById(is3[i]).addEventListener("focusin", function() {
                    document.querySelector(is[i]).style.transform = "scale(2.5)";
                    document.querySelector(is[i]).style.marginTop = "360px";


                });
                document.addEventListener("DOMContentLoaded", function() {
                document.getElementById(is3[i]).addEventListener("focusout", function() {
                    document.querySelector(is[i]).style.transform = "scale(1)";
                    document.querySelector(is[i]).style.marginTop = "270px";


                });
            })
    }
        
    }
    
        var kont = document.querySelectorAll('.div');
        if (foto.length > 8) {
            kont.forEach(function(img) {
                img.style.margin = '100px 330px';
                img.style.height = '800px';
            });
        }
    
    
    for(let i=0;i<is.length;i++){
        var images = document.querySelectorAll(is[i]);
        if (foto.length > 8) {
            images.forEach(function(img) {
                img.style.marginTop ='160px'; 
            });
        }
        console.log(is[6])
    }
    for(let i=0;i<is.length;i++){
        var images = document.querySelectorAll(is2[i]);
        if (foto.length > 8) {
            images.forEach(function(img) {
                img.style.marginTop ='420px'; 
            });
        }
        console.log(is[6])
    }
    console.log(images.length)
    console.log(foto.length)
    









// Aşağıdakii yeri foraraflarınız kadar doldurunuz
// Örnek {tabindex:"5",src:"ressimlerim/res5.jpg"},
// let foto =[,
//     {tabindex:"1",src:"ressimlerim/res1.jpg",class:"img1",id:"Ahmet1",},
//     {tabindex:"2",src:"ressimlerim/res2.jpg",class:"img1",id:"Ahmet2",},
//     {tabindex:"3",src:"ressimlerim/res3.jpg",class:"img1",id:"Ahmet3",},
//     {tabindex:"4",src:"ressimlerim/res4.jpg",class:"img1",id:"Ahmet4",},
//     {tabindex:"5",src:"ressimlerim/res5.jpg",class:"img1",id:"Ahmet5",},
//     {tabindex:"6",src:"ressimlerim/res6.jpg",class:"img1",id:"Ahmet6",},
//     {tabindex:"7",src:"ressimlerim/res7.jpg",class:"img1",id:"Ahmet7",},
//     {tabindex:"8",src:"ressimlerim/res8.jpg",class:"img1",id:"Ahmet8",},
//     ]
    
    
//     let is =[]
    
    
    
//     let liste =`<div class="div"></div>`
//     for(let i=0;i<foto.length;i++){
//     liste += `<img tabindex=${foto[i].tabindex}  src=${foto[i].src}  class=${foto[i].class} id=${foto[i].id} >`}
//     liste +=`<div class="ben"></div>` 
    
//     document.getElementById("gönder_1").innerHTML=liste
//        is.push(foto[i].id)
//     var images = document.querySelectorAll('.img1');
//     if (foto.length > 4) {
//         images.forEach(function(img) {
//             img.style.height = '200px';
//         });
//     }
    
//     for(let i=0;i<is.length;i++){
    
//     document.getElementById(is[i]).addEventListener("focus", function() {
//         document.querySelector(".img1").style.height = "400px";
//     });
//     }
//     console.log(images.length)
//     console.log(foto.length)