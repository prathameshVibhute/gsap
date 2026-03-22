// Example 1
// gsap.to("#box1",{
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360,
//     borderRadius: 100,
//     scale: 0.4,
//     repeat: 1,
//     yoyo: true                  // For executing animation in reverse order after playing it, but for it reverse flag should be passed
// });

// gsap.from("#box2",{
//     x: 1200,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360,
//     borderRadius: 100,
// });

// Example 2
// gsap.from('h3',{
//     y: 30,
//     duration: 1,
//     delay: 1,
//     opacity: 0,
//     stagger: 0.5, // This property trigger each element after particular seconds
//     repeat: 2
// });


// Example 3 timeline
const timeline = gsap.timeline();

timeline.to("#box1",{
    x: 1200,
    duration: 1.5,
    delay: 1,
    rotate: 360,
    borderRadius: 100,
    scale: 0.4,
});

timeline.from("#box2",{
    x: 1200,
    duration: 1.5,
    // delay: 1,
    rotate: 360,
    borderRadius: 100,
});