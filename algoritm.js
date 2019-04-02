//Алгоритмы

//асинхронные функции  ситевые запросы, вебворкеры
Promise;
setTimeout;
async function name(params) {
    
};
observable;

//Детерменированность( одиноковый результат функции), завершенность, массовость
//Recursion
function  sum( a, b) {
    if (a > 0) {
        const c = a - 1;
        const f = b + 1;
         return sum(c, f);
    } else {
        return b;
    }
}
sum(3, 1); // 4
// ---------------------------

// Big O natation 
// Основная база алгоритмов https://github.com/trekhleb/javascript-algorithms
// O(n!) -  very bad algoritm
// O(n*n) - bad algoritm
//O(n*logn) - not good algoritm
//O(n) - not good algoritm
//O(logn) - good algoritm
// O(1) - good algoritm

//------------------------------------

// number fibonnacci

export default function fibonacci(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fibonacci (n - 1) + fibonacci ( n -2);
    }
}

let invoke = 0;
// расход memory 109 O(n*n)
function fibonacciSumm(n) {
    invoke++;
    if (n <= 2) {
        return 1;
    } else {
        return fibonacciSumm( n - 1) + fibonacciSumm( n - 2);
    }
}
// расход memory 9, O(n)
function fibonacci(n) {
    const fibSequence = [1];
    let currentValue = 1;
    let previousValue = 0;
    if (n === 1) {
        return fibSequence;
    }
    let iterationsCounter = n - 1;
    while (iterationsCounter) {
        invoke++;
        currentValue += previousValue;
        previousValue = currentValue - previousValue;
        fibSequence.push(currentValue);
        iterationsCounter -= 1;
    }
    return fibSequence;
}

//-----------------------------------


//-----Bubble Sort-----------------------
// memory not match, O(n) - best, O(n*n) - normal version

var a =[33, 103, 3, 726, 200, 984, 198, 764, 9];
function bubbleSort(a) {
    var swapped;

    do{ 
        swapped = false;

        for (let i = 0; i < a.length; i++) 
        {   if (a[i] > a[i + 1]) {
            var temp = a[i];
            a[i] = a[i + 1];
            a[i + 1] = temp;
            swapped = true;
        }
        }
    } 
    while (swapped);
}

//----Merge Sort------- O(n*logn)
function mergeSort(arr) {
    arr = [1, 57, 88, 404, 505, 2, 7, 200, 3, 1220, 300];
    if (arr.length === 1) {
        return arr;
    } 
const middle = Math.floor(arr.length / 2);
const left = arr.slice(0, middle);
const rigth = arr.slice(middle);
return merge(    mergeSort(left),        mergeSort(rigth) );
};

function merge(left, right) {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    while ( indexLeft < left.length && 
        indexRight < right.length) {
        if (left[indexLeft] < right[indexRight]) {
            result.push(left[indexLeft]);
            indexLeft++;
        } else {
            result.push(right[indexRight]);
            indexRight++;
        }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}




//------------------------------