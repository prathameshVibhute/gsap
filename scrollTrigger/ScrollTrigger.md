## GSAP ScrollTrigger

Gsap scrollTrigger is a property which is used to animate the html using on html, we use the `scrollTrigger` property in `to()` or `from()` functions as shown below.

```Javascript
gsap.from("#page2 #box",{
    rotate: 360,
    duration: 1,
    opacity: 0,
    scale: 0,
    borderRadius: 100,
    scrollTrigger: {
        /* Scroll trigger properties */
    }
});
```

We can also assign a value to `scrollTrigger` like show below, just by assigning the element to which we want to apply the animation. The below code means that i want to apply the scroll trigger animation for the `#box` element inside `#page2` element.

```Javascript
gsap.from("#page2 #box",{
    rotate: 360,
    duration: 1,
    opacity: 0,
    scale: 0,
    borderRadius: 100,
    scrollTrigger: "#page2 #box"
});
```


### Properties of Scroll Trigger

#### 1] trigger
To trigger property we pass the element to which we want to apply scrollTrigger animation. In below example we passed the value as `#page2 #box`, which means we want the scroll animation for that element.

```Javascript
scrollTrigger: {
        trigger: "#page2 #box",
}
```
---

##### 2] scroller
To apply scroll animation gsap need to know which element will be responsible for the scroll animation. Most of the time we pass `body` tag name to scroller as show below.

```Javascript
scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body"
}
```
---

#### 3] markers
In scrollTrigger `markers` is a debugging feature which shows where your scroll animation starts and stops. This property accepts a boolean value `true` or `false`.

```Javascript
scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true
}
```
---

#### 4] start
The `markers` property show us scroll position for start and end of animation. So the start property accept the position of start marker where the animation start. Ideally the start marker is at the bottom of the screen. We pass the value to start as show below. The `start: "top 80%"` tells the start position will be 80% down from the top.

```Javascript
scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 80%"
}
```

#### 4] start
The `markers` property show us scroll position for start and end of animation. So the end property accept the position of end marker where the animation end. Ideally the end marker is at the top of the screen. We pass the value to end as show below. The `end: "top 30%"` tells the end marker position will be 30% down from the top.

```Javascript
scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 30%"
}
```

#### 5] scrub
While applying animation with scroll you might see that the animation will execute immediately after the scroll reaches the start point and if you don't want the animation to behave like this. We use `scrub` property which tells animation that the animation will execute as the user scrolls not on the duration property. This property accepts boolean value as `true / false`.

```Javascript
scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: true
}
```

Applying `scrub` run the animation on scroll but it might look as bit fast. Hence to handle this smoothly we can pass numerical value between `1 - 5` which defines the smoothness of the animation. More the number smoother the animation.

```Javascript
scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 2
}
```

*** Note: *** Using less smooth frequency for animation is good for performance.

After applying the `scrub` property the scrollAnimation also works in reverse order. Means as we scroll down the animation work in forward direction, but as we scroll up the animation will work in reverse order.

#### 6] pin
In scrollTrigger, the  `pin` property is used to fix (stick) element in place while scrolling, for certain duration. This property holds a boolean value `true` as show in below given code.

```Javascript
scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
        pin: true
}
```