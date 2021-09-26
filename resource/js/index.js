


// 모달 창 펑션
const detailsBtn = document.querySelectorAll(".pofol-detail-btn");
const details = document.querySelectorAll(".pofol-detail");
const closeBtn = document.querySelectorAll(".close-btn")
let detailArrBtn = Array.from(detailsBtn)
let detailArr = Array.from(details)
const closeArr = Array.from(closeBtn)


for(let i=0; i<detailArrBtn.length; i++){
    detailArrBtn[i].addEventListener("click",function(){
        detailArr[i].style.display="block"
        document.querySelector("body").style.overflow = 'hidden';
        document.querySelector("body").style.backgroundColor="#000"
        document.querySelector("nav").style.backgroundColor="#000"
        document.querySelector("nav").style.zIndex=1
        document.querySelector("body").style.color="#bebebe"
        detailArr[i].style.color="#fafafa"
    })
}

for(let i = 0 ; i<closeArr.length; i++){
    closeArr[i].addEventListener("click",function(){
        detailArr[i].style.display="none"
        document.querySelector("body").style.opacity="1"
        document.querySelector("body").style.overflow = 'scroll';
        document.querySelector("nav").style.backgroundColor="#000"
        document.querySelector("body").style.backgroundColor="#000"
        document.querySelector("body").style.color="#fafafa"
    })
}

/*메뉴 버튼*/

const openBtn = document.querySelector("#open-menu");
const nav =document.querySelector('.topnav')
const menu = document.querySelector("#menu");



openBtn.addEventListener("click", function(){
    if(menu.style.display=="" || menu.style.display=='none'){
        menu.style.backgroundColor="#000"
        nav.style.backgroundColor="#000 !important"
        openBtn.style.backgroundColor="#000"
        document.querySelector("body").style.overflow = 'hidden';


        menu.style.display='flex'
        menu.style.flexDirection="column!important";
    }else{
        menu.style.display='none'
        openBtn.style.backgroundColor="#00000000";
        menu.style.backgroundColor="#00000000";
       nav.style.backgroundColor="#00000000 !important";
       document.querySelector("body").style.overflow = 'scroll';
    }
})


//화면 스크롤 펑션

var indexBtn = document.querySelectorAll(".index-btn");
var sectionList = document.querySelectorAll(".section");

var about = document.querySelector(".section");
var length = about.getBoundingClientRect()
var x = length.y
const a = document.querySelector(".index-btn")


let arr = Array.from(indexBtn);
let arr1 = Array.from(sectionList)
for(let i = 0; i<arr.length; i++){
    arr[i].addEventListener("click",function(){
        document.querySelector("body").style.overflow = 'scroll';
        window.scrollTo(0,-window.innerHeight/4+window.pageYOffset+arr1[i].getBoundingClientRect().top)
        if(menu.style.display=="flex"){
            menu.style.display='none'
            openBtn.style.backgroundColor="#00000000";
            menu.style.backgroundColor="#00000000";
        }

    })
}

// (window).addEventListener('scroll', (function(e){

//     parallax();

// })
// );


// var bgi =document.querySelector('.background-image')
// function parallax(){

//     var scrolled = (window).scrollY;
    
//     bgi.style.backgroundPositionY = -(scrolled*0.4)+'px';

// }


