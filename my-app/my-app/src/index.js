console.log('work');

function fun1() {
    console.clear();
    // for (let i = 0; i < img.length; i++) {
    img.push(img[0]);
    img.shift();
    setTimeout(() => {
        immg.style.opacity = '0.75';
        console.log('1');
    }, 100);
    setTimeout(() => {
        immg.style.opacity = '0.5';
        console.log('2');
    }, 200);
    setTimeout(() => {
        immg.style.opacity = '0.25';
        console.log('3');
    }, 300);
    setTimeout(() => {
        immg.style.opacity = '0';
        console.log('4');
    }, 400);
    setTimeout(() => {
        immg.setAttribute('src', img[0]);
        console.log('5');
    }, 550);
    setTimeout(() => {
        immg.style.opacity = '0.3';
        console.log('7');
    }, 650);
    setTimeout(() => {
        immg.style.opacity = '0.55';
        console.log('8');
    }, 750);
    setTimeout(() => {
        immg.style.opacity = '0.8';
        console.log('9');
    }, 850);
    setTimeout(() => {
        immg.style.opacity = '1';
        console.log('10');
    }, 1050);

    ovr1.setAttribute('src', img[1]);

    ovr2.setAttribute('src', img[2]);

    ovr3.setAttribute('src', img[3]);
    return;
    // }
}

