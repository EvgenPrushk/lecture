//--1--Какие методы массива возвращают новый массив
- some(); // возвращает boolean
- map();  "правильный отевет"
- filter();  "правильный отевет"
- forEach(); // нечего не возвращает  
- 'никакой из перечисленных';

//--2--Какой из методов массива удалит и вернет первый элемент
- pop(); // 
- push();  //
- shift();  "правильный отевет" 
- unshift(); 
- 'никакой из перечисленных';

//--3--Какой из методов массива удалит и вернет последний элемент
- pop(); "правильный отевет" 
- push();  
- shift();   
- unshift(); //  
- 'никакой из перечисленных';

//--4--Какой из методов вернет длину нового/ cуществующего массива
- pop(); 
- push();  "правильный отевет" 
- length;   "правильный отевет" 
- unshift(); "правильный отевет"   
- 'никакой из перечисленных';

//--5--Какие методы  массива передают в коллбек функцию 4 аргумента
- reduce(); "правильный отевет"  // 3 аргумента+ аккумулятор
- map();   // 3 аргумента
- reduceRight();   "правильный отевет" 
- forEach(); 
- 'никакой из перечисленных';

//--6--Что вернет метод fill [1, 2, 3, 4, 5, 6].fill(0, 2, 3)
-  [0, 2, 3, 0, 2, 3]; 
-  [1, 2, 0, 4, 5, 6];   "правильный отевет" // первый  аргумент -  чем заполняем, второй аргумент - с какой позиции заполняет, третий - по какую позицию заполняем.
-  [1, 2, 0, 1, 2, 0];   
-  [4, 5, 5, 1, 2, 3]; 
- 'никакой из перечисленных';

//--7--Если второй аргумент в методе reduce не задан, то
-  'выведет ошибку ReferenceError:"argument" is not define';
-  'выведет ошибку SyntaxError: "x" is reversed identidier' ; 
-  'возьмет первый  элемент массива  в аккумулятор';   "правильный отевет"
-  'возьмет undefined в аккумулятор';
-  'вернет undefined как результат выполнения функции';

//--8--Какие методы  массива вернут строку, как результат
- slice();   // новый массив
- toString();   "правильный отевет"
- join('');   "правильный отевет" 
- splice(); // удаляет или вставляет часть массива
- split(); //разбивает массив

//--9--Какие методы  массива вернут строку, как результат
- every();   "правильный отевет"
- some();   "правильный отевет"
- indexOf('');    // вернет порядковый номер элемента массива
- includes(); "правильный отевет"
- isArray(); "правильный отевет"

//--10--При помощи какого метода  можно создать новый массив
- of();   "правильный отевет"
- reverse();   // перевернет массив
- find();    // поиск по массиву, вернут значение
- from(); "правильный отевет"
- sort(); // сортирует массив

//--11--Какие методы массива вернуть значение ячейки, если условие будет соблюдено
- of();   // создает новый массив
- includes();  
- find();    "правильный отевет"
- indexOf(); // начнет праверять с начала позицию ячейки
- lastIndexOf(); // начнет праверять с конца позицию ячейки

//--12--Какие методы массива вернуть позицию ячейки, если условие будет соблюдено
- of();   // создает новый массив
- includes();  
- find();    // вернет значение ячейки
- indexOf(); "правильный отевет"
- lastIndexOf(); "правильный отевет"

//--12--Какие методы массива обращают порядок следования элементов
- slice();   // создает новый массив
- splice();   //удаляет или вставляет часть массива
- reverse();    "правильный отевет"
- some(); // возвращает true or false
- every(); // возвращает true or false

//--13--Какие методы массива изменяют исходный массив
- slice();   // создает новый массив
- splice();    "правильный отевет"
- reverse();    "правильный отевет"
- some(); // возвращает true or false
- pop();  "правильный отевет"

//--14--Для объединения двух и более массивов в используется метод 
- slice();   // создает новый массив
- concat();    "правильный отевет"
- findindex();   // 
- join(); // 
- pop();  // удаляет и возвращает последний элемент

//--15--Проверить содержит массив ( состоящий из строк) строку можно следующими методами
- findindex();   "правильный отевет"
- lastIndexOf();    "правильный отевет"
- includes();   "правильный отевет" 
- find();  "правильный отевет"
- indexOf();  "правильный отевет"

//--16--Какие методы массива возвращают новый массив со всеми элементами, 
// удовлетворяющие условию в колбек функции
- findindex();   //поиск
- every();    // true or false
- filter();   "правильный отевет" 
- find(); // поиск
- forEach();  // нечего не возвращает

//--16--Что вернет метод splice [1,2,3,4,5,6]
- 3;  
- ['3'];
- [3];  "правильный отевет" 
- [2, 3]; 
- [2, 3, 2, 3, 2, 3]

//--17--Для чего используется метод Object.assign
- 'добавить свойство массиву ';
- 'удалит свойства ключа';
- 'удалит ключ';
- 'расширение одного объекта путем копирования свойст  другого объекта'; "правильный отевет"
- 'объединить объект с массивом'

//--18--Какие из методов вернут массив
- Object.valueOf; 
- Object.keys;  "правильный отевет" 
- Object.entries; "правильный отевет" 
- Object.vvakues; "правильный отевет" 

//--19--Какие дискрипторы определяемого или изменяемого св-ва объекта могут быть
- configurable; "правильный отевет" 
- enumerable; "правильный отевет" 
- value; "правильный отевет" 
- writeble; "правильный отевет" 
- readable;

//--20--Какой из методов делает объект не изменным 
- Object.is; 
- Object.freeze; "правильный отевет" 
- Object.defineProperty; //дискрипторы свойств 
- Object.hasOwnProperty;  
- Object.getOwnPropertyDescriptors;

//--21--Какие из методов устанавливают дискрипторы свойств 
- Object.is; 
- Object.freeze;
- Object.defineProperty;  "правильный отевет" 
- Object.hasOwnProperty;  
- Object.getOwnPropertyDescriptors;

//--22--Офицальное название языка согласно стандарту
- 'ECMAScript'; "правильный отевет" 
- 'JavaScript';
- 'ECMA262';  
- 'JScript'; 

//--23--Number в JS по умолчанию храниться в 
- '64 бита'; "правильный отевет" 
- '32 бита';
- '16 бит'; 
- '8 бит';  

//--24--Выбирите движки JS
- 'V8';"правильный отевет" 
- 'JavaScriptCore';"правильный отевет" 
- 'Chakra'; "правильный отевет" 
- 'SpiderMonkey'; "правильный отевет"  

//--25--Что из перечисленного подвержено Hoisting JS
- 'fuction declaration'; "правильный отевет" 
- 'переменные объявленные через var'; "правильный отевет" 
- 'переменные объявленные через let и const';  
- 'классы объявленные через ключевое слово class';  

// --25--Что выведеться в консоль
 let x = null || 0 || {name: "false"};
-  null;
- 0;
-  {name: "false"}; "правильный отевет" 
-   undefined;

// --25--Что выведеться в консоль
var scope = "global";
function buffer() {
    function scope() {
        console.log();
            }
            scope();
}
buffer();

-  'global';
- 'объект window';
-  'тело функции scope'; "правильный отевет" 
-   'Reference: scope is not defined';

// --26--Какие из перечисленных вызовов вызовут 'invoke' в консоль
 const invoke = function () {
     console.log('invoke');
 }
 -invoke();  "правильный отевет" 
 -invoke.call();  "правильный отевет" 
 -invoke.apply();  "правильный отевет" 
 invoke.bind(); // не вызывает функцию сейчас - отложенный вызов

// --27--Какие из пунктов выведет true, усли x,y = null;

-console.log(x==y);  "правильный отевет" 
-console.log(x===y);  
-console.log(x===inefined);   "правильный отевет" 
-console.log(null===y); "правильный отевет" 

// --28--Какие из пунктов выведет [object Object], если const obj = {}
- console.log(obj.valueOf());
- console.log(obj.toString()); "правильный отевет" 
- console.log(obj.toLocaleString()); "правильный отевет" 
- console.log(obj.isPrototypeOf()());

// --29--Что выведеться в консоль код ниже
var result = "ten" = 2;
console.log(result== NaN);
-true;
-false; "правильный отевет" 
-null;
-undefined;

// --30--Что выведет в консоль код ниже
var array1 = new Array(3);
console.log(array1[0]);
-true;
-"3"; 
-null; "правильный отевет" 
-undefined;

// --31--Что выведет в консоль код ниже
let x = 50; // 
if (x < 100) {
    let x = 200; //своя область видимости
    console.log('x inside if %i', x); 
}
console.log('x outside if %i', x); // не перезаписывается, потому что let
-'x inside if 200', 'x outside if 50'; "правильный отевет" 
-'x inside if 50', 'x outside if 200';
-'x inside if 50', 'x outside if 50';
-'x inside if 200', 'x outside if 200';

// --32--Что выведет в консоль код ниже
var arr1 = ["3"];
var arr2 = ["3"];
console.log(arr1=arr2);
-true;
-false; "правильный отевет" 
-null;
-undefined;
-NaN;

// --33--Что выведет в консоль код ниже
function x(o) {
    o.a = o.a = 5;
    // o =obj
    console.log(o.a); //6
    o = {
        a:20
    };
    //console.log(o.a); //20
}
var obj = {a : 1};
x(obj);
console.log(obj.a);
-1;
-5; 
-6; "правильный отевет" 
-20;
-'Uncaugth ReferenceError: obj is not defined';

// --34--Что выведет в консоль код ниже
var obj = {x: 12};
Object.prototype.z = 12;
console.log(typeof obj.z == indefined); //  13  tupeof 13  не равен indefined
-true;
-false; "правильный отевет" 
-null;
-undefined;
-'Uncaugth ReferenceError: obj is not defined';

// --35--Что выведет в консоль код ниже
var globalVar = "global";
function test1() {
    console.log(globalVar);
    return;
    var globalVar; // если убрать var, то выведет global,  если заменить на let то ошибка
} 
test1();
-true;
-false;
-null;
-undefined; "правильный отевет" 
-'Uncaugth ReferenceError: globalVar is not defined';

// --36--Что выведет в консоль код ниже
 var i = 5; // тот же будет результат, если мы поменяем 2 var на let
 (function () {
    var j = 2;
})();  
console.log(i+j); // вывод за пределами функции в которой она объявлена
-"52";
-52; 
-7; 
-Sundefined;
-'Uncaugth ReferenceError: j is not defined'; "правильный отевет" 

// --37--Что выведет в консоль код ниже
var sum = function (x, y) {
   console.log(arguments.length); 
   return x + y;
} 
sum3(3, 5, 8); // вывод за пределами функции в которой она объявлена
-"358";
-16;   
- 8; 
- 3; "правильный отевет"  // передаем из sum3 3 аргумента
-'Uncaugth ReferenceError: j is not defined';

// --38--Что выведет в консоль код ниже
var test2 = {
    "name" : "max",
    "GetName" : function () {
        return this.name;
    }
};
var GetName = test2.GetName; // потеря контекста 
console.log(getName() =="max");
-true;
-false; "правильный отевет"
-null;
-undefined;  
-'Uncaugth ReferenceError: test2 is not defined';

// --39--Что выведет в консоль код ниже
var test3 = function () {
    var i = 0;
    for(var i = 0; i < 10; i++) {
        var j = i;
    }
    console.log(i + j);
}
test3();
-10; 
-'10undefined'; 
-19; "правильный отевет"
-'undefinedundefined';  
-'Uncaugth ReferenceError: j is not defined';

// --40--Что выведет в консоль код ниже
var answer = 42; 
var logAnswer = function () {
    console.log(answer); // answer береться из глобал скоупа
};

var sum = function (x, y) {
    var answer = x + y;
    logAnswer();
    return answer;
}
sum(2, 3);
-6; 
-'undefinedundefined'; 
-42; "правильный отевет"
-24;  
-'Uncaugth ReferenceError: answer is not defined';

// // --42--Что выведет в консоль код ниже
// function Car(color) {
//     this.color = color;
// } 

// var lada = new Car("black");
// Car.prototype.currentGear = 5;
// console.log(++lada.currentGear); // 6
// console.log(Car.prototype.currentGear);  // 5

// 
// -6, 5
// -
// -
// -

// --43--Что выведет в консоль код ниже
function Car(color) {
    var that = {};
    that.color = color;
    return that;
}
var lada = new Car("red");
console.log(lada instanceof Car); // lada instanceof Object
-true;
-undefined; 
-false;  "правильный отевет"
-null;  

// --44--Что выведет в консоль код ниже
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.getName = () => this.firsName + " " + this.lastName; //Если заменить на обычную функцию, то будет результа Clark Kent
}

let batman = new Person("Bruce", "Wayne");
console.log(batman.getName()); //Bruce Wayne
console.log(batman.getName.call({firsName:"Clark", lastName: "Kent"}));//Bruce Wayne
-Bruce Wayne Clark Kent;
-Bruce Wayne Clark Kent; 
-Bruce Wayne  Bruce Wayne;  "правильный отевет"
-Clark Ken Clark Ken; 

// --45--Что выведет в консоль код ниже 
function f() {
    return f;
}
var wildguess = new f() instanceof f;
console.log(wildguess);
-false;  "правильный отевет"
