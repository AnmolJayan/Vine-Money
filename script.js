var win = window,
    doc = document,
    body = doc.body;

body.style.overflow = 'hidden';

var a = TweenMax;

var paths = doc.getElementsByTagName('path');
paths = [].slice.call(paths);

paths.forEach(function (path, i) {
    var len = Math.ceil(path.getTotalLength());
    path._len = len;
    path.style.strokeDasharray = len;
    path.style.strokeDashoffset = len;
});

function pathsReset() {
    paths.forEach(function (path, i) {
        a.to(path, 1, { strokeDashoffset: 0 });
    });
}

function pathsOut() {
    paths.forEach(function (path, i) {
        a.to(path, 1, { strokeDashoffset: -path._len });
    });
}

function pathsIn() {
    paths.forEach(function (path, i) {
        a.to(path, 1, { strokeDashoffset: path._len });
    });
}

function animate() {
    pathsReset();
    setTimeout(pathsOut, 5000);
    setTimeout(pathsIn, 5000);
    setTimeout(animate, 5000); 
}

animate();