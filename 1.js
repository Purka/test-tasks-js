"use strict"

const list = [10, 20, 30];

function changeElements(list) {
    let element = list[0];
    list[0] = list[1];
    list[1] = element;
}

changeElements(list);

console.log(list);
