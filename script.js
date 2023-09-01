 var btn_img=document.getElementsByClassName("btn-img");


 for(i=0; i<btn_img.length;i++){

    btn_img[i].addEventListener("click",function(){
document.getElementById("main-image").src=this.src;
for(i=0; i<btn_img.length;i++){
    btn_img[i].classList.remove("mystyle") 
}

      this.classList.add("mystyle") ;

    })
 }



 var btn_color=document.getElementsByClassName("color-c");



 for(i=0; i<btn_color.length;i++){
  btn_color[i].addEventListener("click",(event)=>{
 
console.log(event.target.style.backgroundColor);
    
  var the_class="index-"+event.target.style.backgroundColor
 console.log();
 document.getElementsByClassName(the_class)[0].click();
  })
 }