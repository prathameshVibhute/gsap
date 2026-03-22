// Example 1
// // Ideally we don't apply scrollTrigger to first element of the page
// gsap.from("#page1 #box",{
//     rotate: 360,
//     duration: 1,
//     delay: 1,
//     opacity: 0,
//     scale: 0,
//     borderRadius: 100,
// });

// gsap.from("#page2 #box",{
//     rotate: 360,
//     duration: 1,
//     opacity: 0,
//     scale: 0,
//     borderRadius: 100,
//     scrollTrigger: {
//         trigger: "#page2 #box", // Triggering element
//         scroller: "body", // Scroll on element
//         markers: true, // Add scroll marker to page
//         scrub: 2, // Using this property the animation also completely depends on scroll. The more you scroll animation happens. Replays the animation at the time of reverse scrolling values can we true / false or 1 - 5.
//         start: "top 110%", // Marker position to start the animation
//         end: "top 90%" // Marker position to start the animation
//     }
// });


// Example 2: https://wethinkelastic.com/index.html (Pin example)

gsap.from("#page2 h1",{
    transform: "translateX(-200%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 0%",
        end: "top -100%",
        scrub: 2,
        pin: true
    }
})