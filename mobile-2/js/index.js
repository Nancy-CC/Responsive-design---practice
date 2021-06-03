window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var w = focus.offsetWidth;
    var ol = focus.children[1];
    var index = 0;
    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        ul.style.transition = "all .3s";
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 5000);
    ul.addEventListener('transitioned', function() {
        if (index >= 3) {
            index = 0;
            ul.style.transition = 'none';
            var transatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            ul.style.transition = 'none';
            var translatex = -index * w;

        }
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })
    var startX = 0;
    var moveX = 0;
    ul.addEventListener('touchstart', function() {
        startX = e.targettouches[0].pageX;
    })
    ul.addEventListener('touchmove', function(e) {
        moveX = e.targetTouches[0].pageX - startX;
        var translatex = -index * w + moveX;
        ul.style.transform = 'translateX(' + translatex + 'px)';
    })
    ul.addEventListener('touchend', function(e) {
        if (Math.abs(moveX) > 50) {
            if (moveX > 0) {
                index--;
            } else {
                index++;
            }
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
    })
})