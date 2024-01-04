// NAV BAR - TWEENMAX
var t1 = new TimelineMax({paused: true});

t1.to(".one", 0.8, {
     y: 5,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
     y: -5,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.8
});
t1.to(".three", 0.8, {
     y: -6,
     rotation: -45,
     opacity: 0,
     ease: Expo.easeInOut,
     delay: -0.8
});

t1.to(".menu", 2, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -2
});

t1.staggerFrom(".menu ul li", .5, {x: -200, opacity: 0, ease:Expo.easeOut}, .15);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
     t1.reversed(!t1.reversed());
});
$(document).on("click", "a", function() {
     t1.reversed(!t1.reversed());
});


// STICKY NAV
// window.onscroll = function() {myFunction()};
// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// } 