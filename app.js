const cursor = document.getElementsByClassName('cursor')[0];
let hovMeElements = document.querySelectorAll('.hov-me');

document.addEventListener('mousemove', (e) => {
    let x = e.clientX;
    let y = e.clientY;

    cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0px)`;
})

hovMeElements.forEach( item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hovered');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hovered');
    });
});