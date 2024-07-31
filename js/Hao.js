function playVideo() {
    var dom = document.getElementById('div1');
    dom.innerHTML = '';
    var videoElement = document.createElement('video');
    videoElement.src = 'video/d263bad9c21beac8bda202380b242aa6.mp4';
    videoElement.controls = true;
    videoElement.autoplay = true;
    videoElement.loop = true;
    videoElement.muted = false;
    var videoContainer = document.createElement('div');
    videoContainer.style.border = '1px pink dashed';
    videoContainer.style.position = 'relative';
    videoContainer.style.top = '41px';
    videoContainer.style.right = '100px';
    videoElement.style.width = '1000px';
    videoContainer.appendChild(videoElement);
    dom.appendChild(videoContainer);
}

function getQuote() {
    window.location.href = `../contact.html`;
}

var num1 = 0;
var num2 = 0;

function funLike1() {
    var p = document.getElementById('like1').parentNode;
    var span = document.getElementById('newLikeSpan1');
    if (!span) {
        span = document.createElement('span');
        span.innerText = num1 + 1;
        span.style.color = "pink";
        span.id = 'newLikeSpan1';
        p.appendChild(span);
        num1++;
    } else { 
        span.innerText = num1 + 1;
        num1++;
    }
}

function funLike2() {
    var p = document.getElementById('like2').parentNode;
    var span = document.getElementById('newLikeSpan2');
    if (!span) {
        span = document.createElement('span');
        span.innerText = num2 + 1;
        span.style.color = "pink";
        span.id = 'newLikeSpan2';
        p.appendChild(span);
        num1++;
    } else { 
        span.innerText = num2 + 1;
        num2++;
    }
}

function funComment1() {
    var p = document.getElementById('commemt1').parentNode;
    var input = document.createElement('textarea');
    input.style.width = '100%';
    input.style.height = '100px';
    input.style.padding = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';
    input.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    input.style.resize = 'vertical';
    input.style.fontSize = '16px';
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit!';
    submit.style.marginTop = '10px';
    submit.style.padding = '10px 20px';
    submit.style.fontSize = '16px';
    submit.style.color = '#fff';
    submit.style.backgroundColor = '#e6615a';
    submit.style.border = 'none';
    submit.style.borderRadius = '4px';
    submit.style.cursor = 'pointer';
    submit.style.transition = 'background-color 0.5s ease-in, color 0.5s ease-in';
    submit.onmouseover = function() {
        submit.style.backgroundColor = '#0056b3';
    }
    submit.onmouseout = function() {
        submit.style.backgroundColor = '#e6615a';
    }
    p.appendChild(input);
    p.appendChild(submit);
    submit.onclick = function() {
        var comm = document.getElementById('comm1');
        var span = document.createElement('span');
        span.innerText += input.value;
        comm.appendChild(span);
        comm.appendChild(document.createElement('br'));
        input.style.display = 'none';
        submit.style.display = 'none';
    }
}

function funComment2() {
    var p = document.getElementById('commemt2').parentNode;
    var input = document.createElement('textarea');
    input.style.width = '100%';
    input.style.height = '100px';
    input.style.padding = '10px';
    input.style.border = '1px solid #ccc';
    input.style.borderRadius = '4px';
    input.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    input.style.resize = 'vertical';
    input.style.fontSize = '16px';
    var submit = document.createElement('input');
    submit.type = 'submit';
    submit.value = 'Submit!';
    submit.style.marginTop = '10px';
    submit.style.padding = '10px 20px';
    submit.style.fontSize = '16px';
    submit.style.color = '#fff';
    submit.style.backgroundColor = '#e6615a';
    submit.style.border = 'none';
    submit.style.borderRadius = '4px';
    submit.style.cursor = 'pointer';
    submit.style.transition = 'background-color 0.3s';
    submit.onmouseover = function() {
        submit.style.backgroundColor = '#0056b3';
    }
    submit.onmouseout = function() {
        submit.style.backgroundColor = '#e6615a';
    }
    p.appendChild(input);
    p.appendChild(submit);
    submit.onclick = function() {
        var comm = document.getElementById('comm2');
        var span = document.createElement('span');
        span.innerText += input.value;
        comm.appendChild(span);
        comm.appendChild(document.createElement('br'));
        input.style.display = 'none';
        submit.style.display = 'none';
    }
}

function funReadMore1() {
    var p1 = document.getElementById('newReadMoreDiv1');
    var coll1 = document.getElementById('read_more1');
    var p2 = document.getElementById('newReadMoreDiv2');
    var coll2 = document.getElementById('read_more2');
    var p3 = document.getElementById('newReadMoreDiv3');
    var coll3 = document.getElementById('read_more3');
    if (p1.style.display == 'none' || p1.style.display == '') {
        p1.style.display = 'block';
        coll1.innerText = 'Collapse';
        coll2.innerText = 'View Custom Designs';
        coll3.innerText = 'View Collection';
        document.getElementById('newReadMoreDiv2').style.display = 'none';
        document.getElementById('newReadMoreDiv3').style.display = 'none';
    } else {
        p1.style.display = 'none';
        coll1.innerText = 'View Wedding Collection';
    }
}

function funReadMore2() {
    var p1 = document.getElementById('newReadMoreDiv1');
    var coll1 = document.getElementById('read_more1');
    var p2 = document.getElementById('newReadMoreDiv2');
    var coll2 = document.getElementById('read_more2');
    var p3 = document.getElementById('newReadMoreDiv3');
    var coll3 = document.getElementById('read_more3');
    if (p2.style.display == 'none' || p2.style.display == '') {
        p2.style.display = 'block';
        coll2.innerText = 'Collapse';
        coll1.innerText = 'View Wedding Collection';
        coll3.innerText = 'View Collection';
        document.getElementById('newReadMoreDiv1').style.display = 'none';
        document.getElementById('newReadMoreDiv3').style.display = 'none';
    } else {
        p2.style.display = 'none';
        coll2.innerText = 'View Custom Designs';
    }
}

function funReadMore3() {
    var p1 = document.getElementById('newReadMoreDiv1');
    var coll1 = document.getElementById('read_more1');
    var p2 = document.getElementById('newReadMoreDiv2');
    var coll2 = document.getElementById('read_more2');
    var p3 = document.getElementById('newReadMoreDiv3');
    var coll3 = document.getElementById('read_more3');
    if (p3.style.display == 'none' || p3.style.display == '') {
        p3.style.display = 'block';
        coll3.innerText = 'Collapse';
        coll1.innerText = 'View Wedding Collection';
        coll2.innerText = 'View Custom Designs';
        document.getElementById('newReadMoreDiv1').style.display = 'none';
        document.getElementById('newReadMoreDiv2').style.display = 'none';
    } else {
        p3.style.display = 'none';
        coll3.innerText = 'View Collection';
    }
}

function displayTextByWord(element, text, index = 0) {
    if (index < text.length) {
        let nextWord = text[index];
        element.innerHTML += nextWord;
        setTimeout(() => displayTextByWord(element, text, index + 1), 50);
    }
}
