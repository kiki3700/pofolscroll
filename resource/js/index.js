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