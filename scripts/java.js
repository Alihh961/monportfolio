// Responsive Menu

var openMenu = document.querySelector('.open-menu');
var menuMobile = document.querySelector('.menu-mobile');


openMenu.onclick = function (e) {


  // stop propagation

  e.stopPropagation();

  //toggle class menu-active //
  this.classList.toggle("menu-active");

  //toggle class open //
  menuMobile.classList.toggle("open");



};

//check if the menuMobile is opened  



document.addEventListener('click', function (e) {


  if (e.target !== openMenu && e.target !== menuMobile) {

    if (menuMobile.classList.contains('open')) {

     //toggle class menu-active  //
   openMenu.classList.toggle("menu-active");

     //toggle class open //
    menuMobile.classList.toggle("open");

    }

  }
})


// stop propagation on menuMobile 

menuMobile.onclick = function () {

  e.stopPropagation();

}





// **************************************************************************************





// Changing the right click default menu 



document.oncontextmenu = rightClick;

function rightClick(e) {
  e.preventDefault();// Canceling the default context menu 




  // Adding our customized context menu

  if (document.getElementById("contextMenu")
    .style.display == "block")
    hideMenu();
  else {
    var menu = document.getElementById("contextMenu")
    menu.style.display = 'block';
    menu.style.left = e.pageX + "px";
    menu.style.top = e.pageY + "px";
  }
}




// Hiding the customized menu when we click any place in the document 

document.onclick = hideMenu;
function hideMenu() {
  document.getElementById("contextMenu")
    .style.display = "none"
}



// **************************************************************************************


// Animation myPhoto


var myPhoto = document.getElementsByClassName("myphoto");
gsap.from(myPhoto, { duration: 1.7, delay: 1.5, width: 0, height: 0, opacity: -1 })


// **************************************************************************************




// Animation 4 circles



// let twoJs = document.getElementById('twojs');
// let threeJs = document.getElementById('threejs');
// let fourJs = document.getElementById('fourjs');

// function dis2() {
//   twoJs.style = "display:flex;"
// };
// function dis3() {
//   threeJs.style = "display:flex;"
// };
// function dis4() {
//   fourJs.style = "display:flex;"
// };
// setTimeout(dis2, 700);
// setTimeout(dis3, 1400);
// setTimeout(dis4, 2100);



// **************************************************************************************



// List of competences animation




  let list = document.querySelectorAll(".skills lu li");
  if (window.innerWidth <= 1800) {
    for (i = 1; i <= list.length; i++) {
      gsap.from(`.skills lu li:nth-child(${i})`, {
        scrollTrigger: {
          trigger: `.skills lu li:nth-child(${i})`,
          start: "-=500", 
          end: "+=700",
          scrub: false,
          toggleActions: "play reset play reset",
        },
        yPercent: 100,
        opacity: 0,
        color: "#ff4500",
        duration: 1.5,
        delay: i / 3,

      });
    }
  }





// **************************************************************************************



// Competences loading  

gsap.from('.table div', {
  scrollTrigger: {
    trigger: '.js-per',
    toggleActions: "play reset play reset",
    onEnter: animate,
    onEnterBack: animate,
  },
  duration: 5, opacity: -1
}
);

// Animated counters function 

function animate() {
  let spanC = document.querySelectorAll('.table div span:first-child');

  for (i = 0; i < spanC.length; i++) {

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
    animatePer(spanC[i], 0, spanC[i].innerHTML, 3500);
  };
}



// **************************************************************************************



// Animation projects paragraphs 


for (i = 1; i <= 3; i++) {
  gsap.from(`#p${i}`, {
    scrollTrigger: {
      trigger: `#p${i}`,
      toggleActions: "play reset play reset",
    },
    duration: 2.5,
    yPercent: 100,
    opacity: 0,
    ease: "power4",
    stagger: 0.1,
  });
};


// **************************************************************************************






