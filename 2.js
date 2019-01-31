"use strict"

const list = [30, -5, 0, 10, 5];

function sort(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //console.log('Inside sort we have got left part: ', left);
    //console.log('And right part: ', right);

    while (leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            //console.log('left element has pushed to result: ', result);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            //console.log('right element has pushed to result: ', result);
            rightIndex++;
        }
    }


    let leftIsBigger = left.slice(leftIndex);
    let rightIsBigger = right.slice(rightIndex);
    //concat all the numbers, add the biggest part to the end of the array
    return result.concat(leftIsBigger.concat(rightIsBigger));
}


function mySort(list) {
    if (list.length <= 1) {
        return list;
    }

    const middle = Math.floor(list.length / 2);
    const leftPart = list.slice(0, middle);
    const rightPart = list.slice(middle);

    //console.log('The left part ', leftPart);
    //console.log('The right part ', rightPart);

    return sort(mySort(leftPart), mySort(rightPart));
}

console.log(mySort(list));
