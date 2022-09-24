// Responsive Menu

let menu =document.getElementById("menuburger");
let navM =document.getElementById("navMobile");
let cancel=document.getElementById("close");

menu.onclick = function(){
navM.style= "display:flex";
}

cancel.onclick = function(){
navM.style= "display:none";
}

//////////////////////////////////





// Changing the right click default menu 
     


document.oncontextmenu = rightClick;

function rightClick(e) {
    e.preventDefault();// Canceling the default context menu 

    
// Adding our customized context menu

if (document.getElementById("contextMenu")
            .style.display == "block")
        hideMenu();
    else{
        var menu = document.getElementById("contextMenu")
        menu.style.display = 'block';
        menu.style.left = e.pageX + "px";
        menu.style.top = e.pageY + "px";
}
}
///////////////////////////////////



// Hiding the customized menu when we click any place in the document 

document.onclick = hideMenu;
    function hideMenu() {
        document.getElementById("contextMenu")
                .style.display = "none"
}



// Changing the display of the form on submitting  

// let formJs =document.getElementById('form');
// let thanks =document.getElementById('thanks');
// let btnSoumis = document.getElementById('submit');
// let back =document.getElementById('back');

// btnSoumis.onclick=function(){
//     formJs.style="display:none;";
//     thanks.style="display:flex;";
// }

// back.onclick=function(){
//     formJs.style="display:static;";
//     thanks.style="display:none;";
// }


////////////////////////////////////////////



// Animation myPhoto


var myPhoto = document.getElementsByClassName("myphoto");
gsap.from (myPhoto ,{ duration:1.7 , delay:2.5 ,width:0 , height:0 , opacity:-1 } )


////////////////////////////////////////////



// Animation 4 circles



let twoJs = document.getElementById('twojs');
let threeJs = document.getElementById('threejs');
let fourJs = document.getElementById('fourjs');

function dis2() {
    twoJs.style="display:flex;"
};
function dis3() {
    threeJs.style="display:flex;"
};
function dis4() {
    fourJs.style="display:flex;"
};
setTimeout(dis2 ,700 );
setTimeout(dis3 ,1400 );
setTimeout(dis4 ,2100 );

/////////////////////////////////////////////


// List of competences animation


function yes (){

let list = document.querySelectorAll(".skills lu li");
if(window.innerWidth <= 1500) {
return;
}else{
for( i=1; i <= list.length ; i++){
gsap.from(`.skills lu li:nth-child(${i})` , {
  scrollTrigger: {
    trigger:`.skills lu li:nth-child(${i})`,
    scrub:false,
    toggleActions:"play reset play reset",
},
  x: 200 ,
  opacity:0 ,
  color:"	#ff4500",
  duration:1.5,
  delay:i/3,
 
});}}

}

yes ();




////////////////////////////////////////////


// Competences loading  

gsap.from('.table div div', {scrollTrigger: {
 trigger:'.js-per', 
 toggleActions:"play reset play reset",
 onEnter:animate,
 onEnterBack:animate,   
},
 width:0  , duration: 2 , opacity:-1  }
); 

// Animated counters function 

  function animate (){
    let spanC= document.querySelectorAll('.table div span:first-child');
    
    for(i=0;i<spanC.length; i++){
    
    function animatePer(obj, start, end, duration) {
        let startTime;
        let step = (time) => {
          if (!startTime) startTime = time;
          let progress = Math.min((time - startTime) / duration, 1);
          obj.innerHTML = Math.floor(progress * (end - start) + start);
          if (progress < 1) {
            window.requestAnimationFrame(step);
          }
        };
        window.requestAnimationFrame(step);
      }
      animatePer(spanC[i], 0, spanC[i].innerHTML, 2000);
    };}



////////////////////////////////////////////



// Animation projects paragraphs 


for(i=1 ; i<=3 ; i++){
gsap.from(`#p${i}`, {
  scrollTrigger:{ 
    trigger:`#p${i}`,
    toggleActions:"play reset play reset",
   },
  duration: 2.5 ,
  yPercent: 100,
  opacity: 0,
  ease: "power4",
  stagger: 0.1,
});};


////////////////////////////////////////////




$(function(){

  function one(){console.log($(this))};
  function two(){console.log("two")};
  function three(){$("form tr:nth-child(2) td").css('color', 'red')};


// $("input[id=firstname]").keypress( one )
$("input[id=firstname]").keyup( one )
$("input[id=lastname]").keydown( three )
$("input[id=e-mail]").keypress( three )



});



