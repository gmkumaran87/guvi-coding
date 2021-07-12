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

// Print Double elements
// Repeated Prisoner IDs

const findingCount = (arr) => {
    const obj = {};

    arr.forEach((el) => {
        if (el in obj) {
            obj[el] = obj[el] + 1;
        } else {
            obj[el] = 1;
        }
    });
    return obj;
};

const elementsTwo = (obj) => {
    const arr = Object.keys(obj).filter((el) => {
        return obj[el] === 2;
    });
    return arr[0];
};
let a4Arr = "13 12 13 12 13".split(" ");
let b4Obj = findingCount(a4Arr);
let c4El = elementsTwo(b4Obj);
console.log(`c4El`, c4El);

// Finding the smallest element

const smallestElement = (arr) => {
    let small = Infinity;

    arr.forEach((el) => {
        if (el < small) small = el;
    });
    return small;
};

let a5Arr = "3 4 9 1 6".split(" ");
let smallest = smallestElement(a5Arr);
console.log(`smallest`, smallest);

// Array - 10

function findDifference(arr, num) {
    let diff = 0;
    let diffStr = " ";

    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) {
            diff = Math.abs(arr[i] - arr[0]);
        } else {
            diff = Math.abs(arr[i] - arr[i + 1]);
        }
        diffStr += " " + diff > num ? "1 " : "0 ";
    }
    return diffStr;
}

arr10 = "50 65 85 98 35 95 35 26 12 10".split(" ");
const str10 = findDifference(arr10, 11);
console.log(str10.trim());

// Array - 11 Next Smallest element
const nextSmallest = (num, arr) => {
    console.log(`num`, num);

    for (let elem of arr) {
        if (num > elem) return elem;
    }
    return -1;
};

const smallestElem = (arr) => {
    let outArr = [];
    let smallest = 0;
    arr.forEach((el) => {
        const remArr = arr.slice(arr.indexOf(el) + 1);

        smallest = nextSmallest(el, remArr);
        outArr.push(smallest);
    });
    return outArr;
};

const arr11 = ["7", "10 7 9 3 2 1 15"];

const output = smallestElem(arr11[1].split(" ").map((el) => +el));
console.log(`output`, output.join(" "));

// Perfect Sqrt
let [n, m] = [5, 10];

if (Number.isInteger(Math.sqrt(m * n))) {
    console.log(`yes`);
} else {
    console.log(`no`);
}

// Number of Prime Numbers

const isPrime = (num) => {
    let count = 1;

    if (num === 2) return 1;
    if (num < 2 || num % 2 === 0) return 0;

    let sqrtNum = Math.floor(Math.sqrt(num));

    for (let i = 3; i <= sqrtNum; i = i + 3) {
        if (num % i === 0) {
            return 0;
        } else {
            return 1;
        }
    }
    return count;
};

let [primeS, primeEnd] = [2, 20];
let primeCnt = 0;
for (let i = primeS; i <= primeEnd; i++) {
    primeCnt += isPrime(i);
}

console.log(primeCnt);

// Composite Number

let compNum = 137;
let composite = true;

for (let i = 2; i < compNum; i++) {
    if (compNum % i === 0) {
        composite = false;
        break;
    }
}
if (composite) {
    console.log(`yes`);
} else {
    console.log(`no`);
}