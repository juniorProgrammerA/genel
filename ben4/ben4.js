
//Fotoraflar bura girilecek 
let photos =[
    { tabindex:"1",class:"img1",src:"ressimler/res1.jpg"},
    { tabindex:"2",class:"img2",src:"ressimler/res2.jpg"},
    { tabindex:"3",class:"img3",src:"ressimler/res3.jpg"},
    { tabindex:"4",class:"img4",src:"ressimler/res4.jpg"},
    { tabindex:"4",class:"img5",src:"ressimler/res4.jpg"},
    { tabindex:"1",class:"img6",src:"ressimler/res1.jpg"},
    { tabindex:"2",class:"img7",src:"ressimler/res2.jpg"},
    // { tabindex:"3",class:"img8",src:"ressimler/res3.jpg"},
    // { tabindex:"4",class:"img9",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img10",src:"ressimler/res4.jpg"},
    // { tabindex:"1",class:"img11",src:"ressimler/res1.jpg"},
    // { tabindex:"2",class:"img12",src:"ressimler/res2.jpg"},
    // { tabindex:"3",class:"img13",src:"ressimler/res3.jpg"},
    // { tabindex:"4",class:"img14",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img15",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img16",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img17",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img18",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img19",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img20",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img21",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img22",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img23",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img24",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img25",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img26",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img27",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img28",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img29",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img30",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img31",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img32",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img33",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img34",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img35",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img36",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img37",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img38",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img39",src:"ressimler/res4.jpg"},
    // { tabindex:"4",class:"img40",src:"ressimler/res4.jpg"},

]


let Codes_To_Go_To_HtmlPage = ""; 

for (let i = 0; i < photos.length; i++) {
    Codes_To_Go_To_HtmlPage +=
        `<img tabindex=${photos[i].tabindex} class=${photos[i].class} src=${photos[i].src}>`;
}

Codes_To_Go_To_HtmlPage += `<div class="great-photographer"></div>`;

document.getElementById("gönder_1").innerHTML = Codes_To_Go_To_HtmlPage;


let slideContainer =document.querySelector(".slide-container")
let greatPhotographer =document.querySelector(".great-photographer")
let rearColor =document.querySelector(".rear-color")
let times = document.querySelector(".times")
console.log(times)
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");
let img9 = document.querySelector(".img9");
let img10 = document.querySelector(".img10");
let img11 = document.querySelector(".img11");
let img12 = document.querySelector(".img12");
let img13 = document.querySelector(".img13");
let img14 = document.querySelector(".img14");
let img15 = document.querySelector(".img15");
let img16 = document.querySelector(".img16");
let img17 = document.querySelector(".img17");
let img18 = document.querySelector(".img18");
let img19 = document.querySelector(".img19");
let img20 = document.querySelector(".img20");
let img21 = document.querySelector(".img21");
let img22 = document.querySelector(".img22");
let img23 = document.querySelector(".img23");
let img24 = document.querySelector(".img24");
let img25 = document.querySelector(".img25");
let img26 = document.querySelector(".img26");
let img27 = document.querySelector(".img27");
let img28 = document.querySelector(".img28");
let img29 = document.querySelector(".img29");
let img30 = document.querySelector(".img30");
let img31 = document.querySelector(".img31");
let img32 = document.querySelector(".img32");
let img33 = document.querySelector(".img33");
let img34 = document.querySelector(".img34");
let img35 = document.querySelector(".img35");
let img36 = document.querySelector(".img36");
let img37 = document.querySelector(".img37");
let img38 = document.querySelector(".img38");
let img39 = document.querySelector(".img39");
let img40 = document.querySelector(".img40");


if(photos.length > 5 ){
    slideContainer.style.height="350px";
    times.style.marginLeft="1148px";
    times.style.marginTop="-344px";
}
if(photos.length > 10 ){
    slideContainer.style.height="520px";
    times.style.marginLeft="1148px";
    times.style.marginTop="-515px";

}
if(photos.length > 15 ){
    slideContainer.style.height="690px";
    slideContainer.style.marginTop="110px";
    times.style.marginTop="-683px";
}
if(photos.length > 20 ){
    rearColor.style.height="2065px";
    slideContainer.style.width="1000px";
    slideContainer.style.height="690px";
    slideContainer.style.marginTop="110px";
    slideContainer.style.marginLeft="400px";
    times.style.marginLeft="1138px";
}
if(photos.length > 25 ){
    rearColor.style.height="2065px";
    slideContainer.style.width="1400px";
    slideContainer.style.height="690px";
    slideContainer.style.marginTop="110px";
    slideContainer.style.marginLeft="260px";
    times.style.marginLeft="1198px";
}
if(photos.length > 30){

    rearColor.style.height="2065px";
    slideContainer.style.width="1800px";
    slideContainer.style.height="690px";
    slideContainer.style.marginTop="110px";
    slideContainer.style.marginLeft="50px";
    times.style.marginLeft="1189px";
}



function enlargeİmage (img,changingPicture){
img.addEventListener("click", function(){
    greatPhotographer.style.display = "block";
    greatPhotographer.style.background= changingPicture;
    greatPhotographer.style.backgroundSize= "cover";
    greatPhotographer.style.transform= "scale(1)";
    greatPhotographer.style.transition= "0.5s";
    greatPhotographer.style.backgroundPosition= "center";
    times.style.display="block";
    rearColor.style.display="block";
})
times.addEventListener("click", function(){
    greatPhotographer.style.display = "none";
    rearColor.style.display="none";
    times.style.display="none";
})
}

enlargeİmage(img1,"url(ressimler/res1.jpg)")
enlargeİmage(img2,"url(ressimler/res2.jpg)")
enlargeİmage(img3,"url(ressimler/res3.jpg)")
enlargeİmage(img4,"url(ressimler/res4.jpg)")
enlargeİmage(img5,"url(ressimler/res4.jpg)")
enlargeİmage(img6,"url(ressimler/res1.jpg)")
enlargeİmage(img7,"url(ressimler/res2.jpg)")
enlargeİmage(img8,"url(ressimler/res3.jpg)")
enlargeİmage(img9,"url(ressimler/res4.jpg)")
enlargeİmage(img10,"url(ressimler/res1.jpg)")
enlargeİmage(img11,"url(ressimler/res2.jpg)")
enlargeİmage(img12,"url(ressimler/res3.jpg)")
enlargeİmage(img13,"url(ressimler/res4.jpg)")
enlargeİmage(img14,"url(ressimler/res4.jpg)")
enlargeİmage(img15,"url(ressimler/res1.jpg)")
enlargeİmage(img16,"url(ressimler/res2.jpg)")
enlargeİmage(img17,"url(ressimler/res3.jpg)")
enlargeİmage(img18,"url(ressimler/res4.jpg)")
enlargeİmage(img19,"url(ressimler/res4.jpg)")
enlargeİmage(img20,"url(ressimler/res4.jpg)")
enlargeİmage(img21,"url(ressimler/res4.jpg)")
enlargeİmage(img22,"url(ressimler/res4.jpg)")
enlargeİmage(img23,"url(ressimler/res4.jpg)")
enlargeİmage(img24,"url(ressimler/res4.jpg)")
enlargeİmage(img25,"url(ressimler/res4.jpg)")
enlargeİmage(img26,"url(ressimler/res4.jpg)")
enlargeİmage(img27,"url(ressimler/res4.jpg)")
enlargeİmage(img28,"url(ressimler/res4.jpg)")
enlargeİmage(img29,"url(ressimler/res4.jpg)")
enlargeİmage(img30,"url(ressimler/res4.jpg)")
enlargeİmage(img31,"url(ressimler/res4.jpg)")
enlargeİmage(img32,"url(ressimler/res4.jpg)")
enlargeİmage(img33,"url(ressimler/res4.jpg)")
enlargeİmage(img34,"url(ressimler/res4.jpg)")
enlargeİmage(img35,"url(ressimler/res4.jpg)")
enlargeİmage(img36,"url(ressimler/res4.jpg)")
enlargeİmage(img37,"url(ressimler/res4.jpg)")
enlargeİmage(img38,"url(ressimler/res4.jpg)")
enlargeİmage(img39,"url(ressimler/res4.jpg)")
enlargeİmage(img40,"url(ressimler/res4.jpg)")




