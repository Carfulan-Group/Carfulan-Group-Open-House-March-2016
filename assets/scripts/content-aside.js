function asideOpen () {
    var aside = document.querySelector(".content__aside"),
        asideWidth = aside.clientWidth ,
        newPaddingRight = asideWidth + 15;

    TweenMax.to( aside , 0.3 , {
        right:15
    } );

    document.body.style.paddingRight = newPaddingRight + "px";
}

function asideClose () {
    var aside = document.querySelector(".content__aside");

    TweenMax.to( aside , 0.3 , {
        right: -400
    } );

    document.body.style.paddingRight = 0;
}

function contentAside () {
    var aside = document.querySelector(".content__aside"),
        asideWindowWidth = window.innerWidth;

    if ( !aside ){
        document.body.style.paddingRight = 0;
    } else {
        if ( asideWindowWidth > 1000 ) {
            asideOpen ();
        }
        else {
            asideClose();
        }
    }
}

window.onresize = function () {
    contentAside();
}
