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
    const style = (node, styles) => Object.keys(styles).forEach(key => node.style[key] = styles[key])
    const el = document.createElement('span');
    style(el, {
        position: 'absolute',
        transform: `translate(${ e.offsetX }px, ${ e.offsetY }px`,
        background: 'red',
         width: '10px',
        height: '10px'
    })
    document.querySelector('.area').appendChild(el);

    // pressKey();

    console.log(e.offsetX);
    // document.querySelector('.area').innerHTML = `<span style='position: absolute; transform: translate(${ e.offsetX }px, ${ e.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;

    // upFunction();
    moveFunction();

    // document.querySelector('.area').addEventListener('mouseup', function(evv) {
    //     return;
    // });
});

// function pressKey () {
//     document.querySelector('.area').addEventListener('mousedown', function(e) {

//         console.log(e.offsetX);
//         document.querySelector('.area').innerHTML = `<span style='position: absolute; transform: translate(${ e.offsetX }px, ${ e.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;
    
//         moveFunction();
//     });
// }

// function upFunction () {
//     document.querySelector('.area').addEventListener('mouseup', function() {
//         var stopFunc = 'Stop';
//         console.log(stopFunc);
//         return stopFunc;
//     });
// }

function moveFunction () {
    // let stopFunc = new upFunction();
    // console.log(stopFunc);
    // if (stopFunc == true) {
    //     return;
    // } else {
    //     document.querySelector('.area').addEventListener('mousemove', function(ev) {
    //         console.log(ev.offsetX);
    //         const style = (node, styles) => Object.keys(styles).forEach(key => node.style[key] = styles[key])
    //         const el = document.createElement('span');
    //         style(el, {
    //             position: 'absolute',
    //             transform: `translate(${ ev.offsetX }px, ${ ev.offsetY }px`,
    //             background: 'red',
    //             width: '10px',
    //             height: '10px'
    //         })
    //         document.querySelector('.area').appendChild(el);
    
    //         upFunction(ev);
    //     });
    // }
    document.querySelector('.area').addEventListener('mousemove', function(ev) {
        // let stopFunc = upFunction();
        // console.log(stopFunc);
        console.log(ev.offsetX);
        const style = (node, styles) => Object.keys(styles).forEach(key => node.style[key] = styles[key])
        const el = document.createElement('span');
        style(el, {
            position: 'absolute',
            transform: `translate(${ ev.offsetX }px, ${ ev.offsetY }px`,
            background: 'red',
            width: '10px',
            height: '10px'
        })
        document.querySelector('.area').appendChild(el);

        upFunction(ev);
    });

    document.querySelector('.area').addEventListener('mouseup', function(ev) {
        document.removeEventListener("mousemove", function(ev) {

        });
    });
    // upFunction(ev);
}

function upFunction () {
    document.querySelector('.area').addEventListener('mouseup', function() {
        document.removeEventListener("mousemove", move);
    });
}

// document.querySelector('.area').addEventListener('mousemove', function(ev) {
//     console.log(ev.offsetX);
//     document.querySelector('.area').innerHTML = `<span style='position: absolute; transform: translate(${ ev.offsetX }px, ${ ev.offsetY }px); background-color: red; width: 10px; height: 10px'></span>`;
// });

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
