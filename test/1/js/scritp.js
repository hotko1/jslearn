'use strict';

addEventListener('resize', (e) => {
    const heightArea = document.querySelector('.area').clientHeight;
    console.log(heightArea);
    const widthArea = document.querySelector('.area').clientWidth;
    console.log(widthArea);

    headFunction();
});

const heightArea = document.querySelector('.area').clientHeight;
console.log(heightArea);
const widthArea = document.querySelector('.area').clientWidth;
console.log(widthArea);

// let area = document.querySelector('.area');

document.querySelector('.area').addEventListener('mousedown', function(e) {
    // headFunction ();

    // let area = document.querySelector('.area');
    console.log(e.offsetX);
    document.querySelector('.area').innerHTML = `<span style='position: absolute; transform: translate(${ e.offsetX }px, ${ e.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;

    // area = document.querySelector('.area');
    // document.querySelector('.area').addEventListener('mousemove', function(ev) {
    //     console.log(ev.offsetX);
    //     document.querySelector('.area').innerHTML = `<span style='position: absolute; transform: translate(${ ev.offsetX }px, ${ ev.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;
    // });
    // const el = document.createElement('span');
    // document.el.style.position = 'absolute';
    // document.el.style.translate = `${ e.offsetX }, ${ e.offsetY }`;
    // document.el.innerHTML += `<style>position: absolute; transform-translate: (${ e.offsetX }, ${ e.offsetY })</style>`;
    // document.querySelector('.area').appendChild(el);
    // this.textContent = `
    //     relX: ${ e.offsetX }, absX: ${ e.pageX }
    //     relY: ${ e.offsetY }, absY: ${ e.pageY }
    // `;
});

document.querySelector('.area').addEventListener('mousemove', function(ev) {
    console.log(ev.offsetX);
    document.querySelector('.area').innerHTML = `<span style='position: absolute; transform: translate(${ ev.offsetX }px, ${ ev.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;
});

// document.querySelector('.area').addEventListener('mousemove', function(e) {
//     console.log(e.offsetX);
//     document.querySelector('.area').innerHTML = `<span style='position: absolute; transform: translate(${ e.offsetX }px, ${ e.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;
// });

// area.addEventListener('mousemove', function(e) {
//     console.log(e.offsetX);
//     area.innerHTML = `<span style='position: absolute; transform: translate(${ e.offsetX }px, ${ e.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;
// });

// function headFunction () {
    // document.querySelector('.area').addEventListener('mousemove', function(ev) {
    //     console.log(ev.offsetX);
    //     document.querySelector('.area').innerHTML = `<span style='position: absolute; transform: translate(${ ev.offsetX }px, ${ ev.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;
    // });
// }

// function headFunction () {
//     for (let i = 0; i < heightArea; i++) {
//         for (let k = 0; k < widthArea; k++) {
//             const el = document.createElement('span');
//             el.classList.add(`${heightArea}-${widthArea}`);
//             document.querySelector('.area').appendChild(el);
//         }
//     }
// }

// headFunction();
