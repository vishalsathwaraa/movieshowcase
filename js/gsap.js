gsap.from(".logo", {
    y: 200,
    delay: .5,
    duration: 2,
    opacity: 0,
});


gsap.from("h1", {
    x: -200,
    duration: 1,
    opacity: 0,
    delay: 2.5,
    opacity: 0,

});




gsap.from(".search", {
    y: 200,
    delay: .5,
    duration: 2,
    opacity: 0
});

gsap.from(".menu li", {
    duration: 1,
    y: 200,
    delay: .5,
    opacity: 0,
    ease: "power1.inOut",
    stagger: {
        from: "start",
        amount: 1.5
    }
});

//  <-----------------------Toggle Menu --------------------->

$(document).ready(function () {

    $('.toggle').click(function () {
        $('.toggle').toggleClass('active') 
        $('.menu').toggleClass('active')  //Chanege Bars to Times(Cross)
    })

    // $('.dp').click(function () {
    //      $('.dp').toggleClass('dp-active')  
    // })
});