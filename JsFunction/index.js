// //------Object---------
// let stormtroopers = 0;
// const army = {
//     stormtroopers: 5000,
//     replenishArmy: function() {
//         this.stormtroopers += 1000;
//         this.replenishArmy += addRandomClones(100, 200);

//     },
// }

// const addRandomClones = function (min, max) {
//     return Math.floor(Math.random() * (max - min) + min);
// }

// army.replenishArmy();

// console.log(army.replenishArmy);

//------consttuctor & invocation---------
// let stormtroopers = 0;

// const Army = function(startAmount) {
//     this.stormtroopers =  startAmount || 0;
//     this.replenishArmy = function() {
//         this.stormtroopers += 1000;
//         this.replenishArmy += addRandomClones(100, 200);

//     };
// };
// const  army = new Army(2000);

// const addRandomClones = function (...args) {
//     let args = [].slice.call(arguments);
//     return Math.floor(Math.random() * (arguments[1] - arguments[0]) + arguments[0]);
// }

// army.replenishArmy();
// //const repl = army.replenishArmy.bind(army);

// repl();

// console.log(army.replenishArmy);

//------es2015---------
// const btn = document.querySelector('button');

// class Army  {
//     constructor(startAmount){
//         this.stormtroopers =  startAmount || 0;
//         this.replenish = () => {
//             this.stormtroopers += 1000;
//             this.replenish += addRandomClones(100, 200);
//         };

//     }
// };
// const  army = new Army(0);

// const addRandomClones =  (...args) => {

//     return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
// }

// army.replenish();
// //const repl = army.replenish.bind(army);

// btn.addEventListener('click', () => {
//     army.replenish();
//     if (army.stormtroopers > 10000) {
//        alert('галактика у Ваших ног');
//        army.stormtroopers = 0;
//     }
//     document.getElementById('stormtroopers').innerText = army.stormtroopers;
// });

// //------scope---------
// const smallArmy = {
//     fighters: 400,
// }

// const showArmy = () => {
//     const smallArmy = {
//     fighters: 200,
// };

// console.log('army', this);
// }

// const Army = function (name) {
//     this.name = name;
//     this.stormtroopers = 1000;
//     this.replenish = function () {
//         //console.log(this);
//         this.stormtroopers += addRandomClones(100, 200);
//     };
//     this.showArmy = (...smth) => {
//         console.log('army', this, smth[0]);
//     };
// };

// const  army1 = new Army("Imperial");
// const  army2 = new Army("Rebels");

// const addRandomClones =  (...args) => {

//     return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
// }

// army.replenish();

// army1.showArmy('stormtroopers');
// army2.showArmy('separatists');

// //------closure---------
// const smallArmy = {
//     fighters: 400,
// }

// const showArmy = () => {
//     const smallArmy = {
//     fighters: 200,
// };

// console.log('army', this);
// }

// var soldiersType = 'aliens';

// const Army = function (name) {
//     this.name = name;
//     this.stormtroopers = 1000;
//     this.replenish = function () {
//         //console.log(this);
//         this.fighters += addRandomClones(100, 200);
//     };
//     this.showArmy = (...smth) => {
//        const soldiersType = smth[0];

//         return  () => {
//             console.log(this, '\n soldiers ==', + this.soldiersType);
//         }
//     };
// };

// const  army1 = new Army("Imperial");
// const  army2 = new Army("Rebels");

// const addRandomClones =  (...args) => {

//     return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
// }

// army.replenish();

// army1.showArmy('stormtroopers')();
// army2.showArmy('separatists')();

//------chaining+singleton (first patern)---------
// const smallArmy = {
//     fighters: 400,
// }

// const showArmy = () => {
//     const smallArmy = {
//     fighters: 200,
// };

// console.log('army', this);
// }

// var soldiersType = 'aliens';

//  function Army(name) {
//      const instance = this;

//      Army = function()  {
//         return   instance;
//     }

//     this.name = name || 'neutrals';
//     this.stormtroopers = 1000;
//     this.replenish = function () {
//         //console.log(this);
//         this.fighters += addRandomClones(100, 200);
//         return this;
//     };

//     this.showArmy = (...smth) => {
//        const soldiersType = smth[0];
//        console.log(this == self ); // не равны если не переопределять  const self = this;
//          console.log(this,  '\n soldiers ==' + soldiersType);
//        return this;
//     };
// };

// const  army1 = new Army("Imperial");
// const  army2 = new Army("Rebels");

// const addRandomClones =  (...args) => {

//     return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
// }

// army1.showArmy().replenish('stormtroopers');

// army2.showArmy('separatists');
// // console.log(this == self );
// console.log(army1 == army2 ); //false
// console.log(army1.fighters, army2.fighters);
// army1.replenish();
// console.log(army1.fighters, army2.fighters);
// army2.replenish();
// console.log(army1.fighters, army2.fighters);

//------decotation(second patern)---------
// const smallArmy = {
//     fighters: 400,
// }

// const addRandomClones =  (...args) => {
//     return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
// }

// var soldiersType = 'aliens';

//  function Army(name) {
//        this.name = name || 'neutrals';
//     this.stormtroopers = 1000;
//     this.replenish = function () {
//         //console.log(this);
//         this.fighters += addRandomClones(100, 200);
//         return this;
//     };

//     this.showArmy = (...smth) => {
//        const soldiersType = smth[0];
//        console.log(this == self ); // не равны если не переопределять  const self = this;
//          console.log(this,  '\n soldiers ==' + soldiersType);
//        return this;
//     };
// };

// const  army1 = new Army("Imperial");
// const  army2 = new Army("Rebels");

// function showReplanishedArmy(func) {
//     return function(...args){
//         console.log(this,  'ARMY', args[0]);
//         return func(...args);
//     }
// }

// army2.showArmy = showReplanishedArmy(army2.replenish);

// army1.replenish().showArmy('stormtroopers');
// army2.replenish().showArmy('separatists');

// const button = document.querySelector('button');
// const endText = document.querySelector('#galaxy');

// const addRandomClones = (...args) => {
//   return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
// };

// var soldiersType = "aliens";

// function Army(name) {
//   this.name = name || "neutrals";
//   this.stormtroopers = 1000;
//   this.replenish = function() {
//     this.fighters += addRandomClones(100, 200);
//     return this;
//   };
//   this.refresh = function () {
//       this.fighters = 1000;
//   }
// };

// const army1 = new Army("Imperial");
// const army2 = new Army("Rebels");

// army1.replenish().showArmy("stormtroopers");
// army2.replenish().showArmy("separatists");

// function logFight(func) {
//     return function () {
//         console.log(`${army1.name} ${army1.fighters} / ${army2.name} ${army2.fighters}`);
//         return func();
//     }
// }

// function fight() {
//     if(army1.fighters - army2.fighters > 200) {
//         return endText.innerHTML = `${army1.name} rulese the galaxy`;
//     } else if (army2.fighters - army1.fighters > 200){ 
//         return endText.innerHTML = `${army2.name} rulese the galaxy`;
//     } else {
//         if(army1.fighters > army2.fighters) {
//             army2.fighters -= 10;
//         } else {army1.fighters -= 10; }

//         if (army1.fighters > 5000 || army2.fighters > 5000 ) {
//             return endText.innerHTML = 'Our galaxy is mired in war'
//         } 
//     army1.replenish();
//     army2.replenish();
//     return fight();
//     }
// }

// fight = logFight(fight);

// button.addEventListener('click', function () {
//     army1.refresh();
//     army2.refresh();
//     fight();
// });



const button = document.querySelector('button');
const endText = document.querySelector('#galaxy');

const addRandomClones = (...args) => {
    return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
};

var soldiersType = "aliens";

class Army {
    constructor(name) {
        this.name = name || "neutrals";
        this.fighters = 1000;
        
        
    }

    replenish() {
        this.fighters += addRandomClones(100, 200);
        return this;
    }

    refresh() {
        this.fighters = 1000;
    }

};


const army1 = new Army("Imperial");
const army2 = new Army("Rebels");



function logFight(func) {
    return function () {
        console.log(`${army1.name} ${army1.fighters} / ${army2.name} ${army2.fighters}`);
        return func();
    }
}

function fight() {
    if (army1.fighters - army2.fighters > 200) {
        return endText.innerHTML = `${army1.name} rulese the galaxy`;
    } else if (army2.fighters - army1.fighters > 200) {
        return endText.innerHTML = `${army2.name} rulese the galaxy`;
    } else {
        if (army1.fighters > army2.fighters) {
            army2.fighters -= 10;
        } else { army1.fighters -= 10; }

        if (army1.fighters > 5000 || army2.fighters > 5000) {
            return endText.innerHTML = 'Our galaxy is mired in war'
        }
        army1.replenish();
        army2.replenish();
        return fight();
    }
}

fight = logFight(fight);

button.addEventListener('click', function () {
    army1.refresh();
    army2.refresh();
    fight();
});
