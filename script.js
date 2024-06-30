const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


gsap=gsap.timeline()

gsap.to("#yellow",{
    top:"-100%",
    duration:1,
    ease:"expo.out"
})

gsap.to("#loader",{
    top:"-100%",
    duration:1,
    

})

gsap.from(".products-bar a",{
    // delay:1,
    x:50,
    opacity:0,
    stagger:0.4
})



     
    




var elems = document.querySelectorAll(".elem");
var page2BackgroundImage = document.getElementById("page2");
elems.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        var image = elem.getAttribute("data-img");
        page2BackgroundImage.style.backgroundImage=`url(${image})`

    })
})

