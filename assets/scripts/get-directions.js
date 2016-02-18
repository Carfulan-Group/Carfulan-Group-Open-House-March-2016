function openDirections () {
    TweenMax.to(".directions__popup", 0.5, {top:0, ease:Power2.easeOut});
}

function closeDirections () {
    TweenMax.to(".directions__popup", 0.5, {top:"100%", ease:Power2.easeOut});
}
