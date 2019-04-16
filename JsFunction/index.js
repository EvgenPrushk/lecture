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

//------scope---------
const smallArmy = {
    fighters: 400,
}
function showArmy() {
    const smallArmy = {
    fighters: 200,
};

console.log('army', this);
}



const Army = function (name) {
    this.name = name;
    this.stormtroopers = 1000;
    this.replenish = function () {
        //console.log(this);
        this.stormtroopers += addRandomClones(100, 200);
    };
    this.showArmy = showArmy;
};

const  army1 = new Army("Imperial");
const  army2 = new Army("Imperial");

const addRandomClones =  (...args) => {
   
    return Math.floor(Math.random() * (args[1] - args[0]) + args[0]);
}


army.replenish();

army1.showArmy();
army2.showArmy();