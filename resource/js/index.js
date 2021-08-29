


// 모달 창 펑션
const detailsBtn = document.querySelectorAll(".pofol-detail-btn");
const details = document.querySelectorAll(".pofol-detail");
const closeBtn = document.querySelectorAll(".close-btn")
let detailArrBtn = Array.from(detailsBtn)
let detailArr = Array.from(details)
const closeArr = Array.from(closeBtn)
console.log(detailArr[0])

console.log(window.innerWidth)

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
        document.querySelector("nav").style.backgroundColor="#121212"
        document.querySelector("body").style.backgroundColor="#121212"
        document.querySelector("body").style.color="#fafafa"
    })
}

/*메뉴 버튼*/

const openBtn = document.querySelector("#open-menu");
const nav =document.querySelector('.topnav')
const menu = document.querySelector("#menu");

console.log(menu.style.display)

openBtn.addEventListener("click", function(){
    console.log(menu.style.display=="")
    if(menu.style.display=="" || menu.style.display=='none'){
        menu.style.backgroundColor="#121212"
        nav.style.backgroundColor="#121212 !important"
        openBtn.style.backgroundColor="#121212"
        document.querySelector("body").style.overflow = 'hidden';
        console.log("색"+nav.style.backgroundColor)


        menu.style.display='flex'
        menu.style.flexDirection="column!important";
    }else{
        menu.style.display='none'
        openBtn.style.backgroundColor="#00000000";
        menu.style.backgroundColor="#00000000";
       nav.style.backgroundColor="#00000000 !important";
       document.querySelector("body").style.overflow = 'scroll';
    }
    console.log(menu.style.display)
})


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
        document.querySelector("body").style.overflow = 'scroll';
        window.scrollTo(0,-window.innerHeight/4+window.pageYOffset+arr1[i].getBoundingClientRect().top)
        console.log(-window.innerHeight/4+window.pageYOffset+arr1[i].getBoundingClientRect().top)
        if(window.innerWidth<=460){
            menu.style.display='none'
            openBtn.style.backgroundColor="#00000000";
            menu.style.backgroundColor="#00000000";
        }

    })
}