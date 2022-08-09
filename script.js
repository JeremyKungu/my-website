let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

timeline
.to('.img-3', 3, {y: -300})
.to('.img-2', 3, {y: -200}, '-=3')
.fromTo('.img-1', 3, {y: -50}, {y: 0, duration: 3}, '-=3')
.to('.content', 3, {top: '0%'}, '-=3')
.fromTo('.content-images', 3, {opacity: 0}, {opacity: 1, duration: 3})
.fromTo('.text', 3, {opacity: 0}, {opacity: 1, duration: 3});

let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '200%',
    triggerHook: 0,
})
.setTween(timeline)
.setPin('section')
.addTo(controller);