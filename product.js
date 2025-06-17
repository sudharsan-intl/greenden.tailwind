var sidenav =document.getElementById("sidenav")
var close =document.getElementById("close")
var a=document.getElementById("menu")

a.addEventListener("click",function()
{

 sidenav.style.right=0




})
close.addEventListener("click",function(){
sidenav.style.right="-50%"
})