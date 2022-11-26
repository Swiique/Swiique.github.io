function loadCursor(ball) {
    let x = window.outerWidth / 2;
    let y = window.outerHeight / 2;

    let ballX = x;
    let ballY = y;

    let hideTimeout = null;

    function drawBall() {
        ballX += (x - ballX) * 0.1 - 1;
        ballY += (y - ballY) * 0.1 - 1;

        ball.style.top = `${ballY}px`;
        ball.style.left = `${ballX}px`;
    }

    function loop() {
        drawBall();
        requestAnimationFrame(loop);
    }

    loop();

    function touch(event) {
        x = event.touches[0].pageX;
        y = event.touches[0].pageY;
    }

    function mousemove(event) {
        ball.style.opacity = '1';

        if (hideTimeout) {
            clearTimeout(hideTimeout);
        }

        x = event.pageX;
        y = event.pageY;

        hideTimeout = setTimeout(() => {
            ball.style.opacity = '0';
        }, 300);
    }

    function mousedown() {
        ball.style.transform = 'scale(2)';
    }

    function mouseup() {
        ball.style.transform = 'scale(1)';
    }

    window.addEventListener('touchstart', touch);
    window.addEventListener('touchmove', touch);
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mousedown', mousedown);
    window.addEventListener('mouseup', mouseup);

    return () => {
        window.removeEventListener('touchstart', touch);
        window.removeEventListener('touchmove', touch);
        window.removeEventListener('mousemove', mousemove);
        window.removeEventListener('mousedown', mousedown);
        window.removeEventListener('mouseup', mouseup);
    };
}

loadCursor(document.getElementById("ball"))

function ASCIIAnimation(animArray, speed, DOMtarget) {
  var currentFrame = 0;
    for(var i = 0; i < animArray.length; i++) {
        animArray[i] = animArray[i].replace(/ /g,"&nbsp;");
        animArray[i] = "<pre>" + animArray[i] + "</pre>";
    }
    DOMtarget.innerHTML = animArray[0];
    currentFrame++;
    this.animation = setInterval(function() {
        DOMtarget.innerHTML = animArray[currentFrame];
        currentFrame++;
        if(currentFrame >= animArray.length) currentFrame = 0;
    }, speed);
    this.getCurrentFrame = function() {
        return currentFrame;
    }
}

ASCIIAnimation.prototype.stopAnimation = function() {
    clearInterval(this.animation);
}

function makeDiv() { return document.createElement("div"); }
function bodyAppend(element) { document.getElementById("footer_wrapper").appendChild(element); }

var div3 = makeDiv();
bodyAppend(div3);
div3.style.fontFamily = "monospace";
var animArray3 = [".(^-^)'","-(^-^)-","'(^-^).","-(^o^)-",".(^-^)'","-(^-^)-","'(^-^).","-(^-^)-"];

var anim3 = new ASCIIAnimation(animArray3, 125, div3);


