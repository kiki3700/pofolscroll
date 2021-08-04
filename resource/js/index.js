//화면 스크롤 펑션

var indexBtn = document.querySelectorAll(".index-btn");
var sectionList = document.querySelectorAll(".section");

var about = document.querySelector(".section");
console.log(about)
var length = about.getBoundingClientRect()
console.log(length)
var x = length.y
const a = document.querySelector(".index-btn")

console.log(x);

let arr = Array.from(indexBtn);
let arr1 = Array.from(sectionList)
for(let i = 0; i<arr.length; i++){
    arr[i].addEventListener("click",function(){
        window.scrollTo(0,-window.innerHeight/2.5+window.pageYOffset+arr1[i].getBoundingClientRect().top)
        console.log(-window.innerHeight/2.5+window.pageYOffset+arr1[i].getBoundingClientRect().top)


    })
}


// 모달 창 펑션
const detailsBtn = document.querySelectorAll(".pofol-detail-btn");
const details = document.querySelectorAll(".pofol-detail");
const closeBtn = document.querySelectorAll(".close-btn")
let detailArrBtn = Array.from(detailsBtn)
let detailArr = Array.from(details)
const closeArr = Array.from(closeBtn)
console.log(detailArr[0])

for(let i=0; i<detailArrBtn.length; i++){
    detailArrBtn[i].addEventListener("click",function(){
        detailArr[i].style.display="block"
        document.querySelector("body").style.overflow = 'hidden';
        document.querySelector("body").style.backgroundColor="rgb(145, 145, 145)"
        document.querySelector("nav").style.backgroundColor="rgb(145, 145, 145)"
        document.querySelector("nav").style.zIndex=6
        document.querySelector("body").style.color="rgb(112, 112, 112)"
        detailArr[i].style.color="#000"
    })
}

for(let i = 0 ; i<closeArr.length; i++){
    closeArr[i].addEventListener("click",function(){
        detailArr[i].style.display="none"
        document.querySelector("body").style.opacity="1"
        document.querySelector("body").style.overflow = 'scroll';
        document.querySelector("nav").style.backgroundColor="#fff"
        document.querySelector("body").style.backgroundColor="rgba(255,255,255)"
        document.querySelector("body").style.color="rgba(0,0,0)"
    })
}

