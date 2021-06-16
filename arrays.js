let arr = "11 12 13 A14 15 15 12 19 16 B18".split(" ");
let newArr = [...new Set(arr)].join(" ");

console.log(`newArr`, newArr);

// Beautiful array
let a2 = "5 25 35 -5 30".split(" ");
let b2 = a2.reduce((a, b) => parseInt(a) + parseInt(b));

if (b2 % 2 === 0 && b2 % 3 === 0 && b2 % 5 === 0) {
    console.log(`Beautiful array`);
} else {
    console.log(`b2`, b2);
}

// Immediate duplicate removal
let a3 = "133121445".split("");
let b3 = {};
let c3 = [];
let c4 = [];
let prevEl = 0;

function keysGreaterThanZero(obj) {
    const arr = [];
    Object.keys(obj).forEach((el) => {
        if (obj[el] > 0) {
            arr.push(el);
        }
    });
    return arr;
}

const printArrays = (arr, arr2) => arr.filter((el) => arr2.includes(el));

a3.forEach((el) => {
    let currEl = parseInt(el);

    if (prevEl === currEl) {
        b3[currEl] = b3[currEl] - 1;
    } else {
        if (currEl in b3) {
            b3[currEl] = b3[currEl] + 1;
        } else {
            b3[currEl] = 1;
        }

        prevEl = currEl;
    }
});
c3 = keysGreaterThanZero(b3);
c4 = printArrays(a3, c3);

console.log(c4.join(""));