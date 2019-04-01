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
// ---------------------------


// Big o natation

// числа Фибоначчи

//---Bogosort
function Bogosort(arr) {
    var isSorted = function (arr) {
        for (let i = 1; i < arr.length; i++) {
           if (arr[i - 1] > arr[i]) {
               return false;
           }
            
        }
        return true;
    };

    function shuffler(arr) {
        
    }
}