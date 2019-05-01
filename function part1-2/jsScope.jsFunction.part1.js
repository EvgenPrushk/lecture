//--------------Var and Scope----------
// const STORM = 500;
// let stormtrooopers = 1000;

// // local sope

// if (true) {
//     //new scope
//     let stormtrooopers = 3000;
//     console.log(stormtrooopers);
    
// }

// function func() {
// //new  value
//      let stormtrooopers = 2000;
//     console.log(stormtrooopers);
     
// }


// func();

// console.log(stormtrooopers);



//-------------Nested Scope----------------

//  let stormtrooopers = 0;

// function replenishArmy() {

//         stormtrooopers += 1000;
//         console.log(stormtrooopers);


//          function addMoreClone() {

//              let clones = 100;

//              stormtrooopers += clones;
//          }
//          addMoreClone();
//     }
    
    
//     replenishArmy();
    
//     console.log(stormtrooopers);

    //---------------------Window--------------
    
    // var stormtrooopers = 0;

    // function replenishArmy() {
    
    //         stormtrooopers += 1000;
    //         console.log(stormtrooopers);
    
    
    //          function addMoreClone() {
    
    //              let clones = 100;
    
    //              stormtrooopers += clones;
    //          }
    //          addMoreClone();
    //     }
        
        
    //     replenishArmy();
        
    //     console.log(stormtrooopers);

    //======== function declaration  expression---------

     
    // var stormtrooopers = 0;

    // const replenishArmy = function replenishArmy() {
    
    //         stormtrooopers += 1000;
    //         console.log(stormtrooopers);
    
    
    //          function addMoreClone() {
    
    //              let clones = 100;
    
    //              stormtrooopers += clones;
    //          }
    //          addMoreClone();
    //     };
        
        
    //     replenishArmy();
        
    //     console.log(stormtrooopers);


    // // --------return----------------------
    // var stormtrooopers = 0;

    // const replenishArmy = function() {
    
    //         stormtrooopers += 1000;
    //         stormtrooopers += addMoreClones();
    // }

    // const addMoreClones = function () {
    //     let clones = 100;
    //     return clones;
    // };
        
        
    //     replenishArmy();
        
    //     console.log(stormtrooopers);

        
    //     // --------arguments----------------------
    // var stormtrooopers = 0;

    // const replenishArmy = function() {
    
    //         stormtrooopers += 1000;
    //         stormtrooopers += addMoreClones(100);
    // };

    // const addMoreClones = function (amount) {
    //     let clones = amount;
    //     return amount + 10;
    // };
        
        
    //     replenishArmy();
        
    //     console.log(stormtrooopers);



// --------Object----------------------
// let stormtrooopers = 0;

// const army = {
//     stormtrooopers: 5000,
//     replenishArmy: function () {
//     this.stormtrooopers += 1000;
//    this.stormtrooopers += addRandomClones(100, 200);
//     },

// };

// const addRandomClones = function (min, max) {
// // Math.floor = {}, возвращаем и округляет 
//     return Math.floor(Math.random() * (max - min) + min);

// };

// army.replenishArmy();

// console.log(army.stormtrooopers);


// --------Construstor&invocation----------------------
let stormtrooopers = 0;

const army = function(startAmount) {
    stormtrooopers: 5000,
    replenishArmy: function () {
    this.stormtrooopers += 1000;
   this.stormtrooopers += addRandomClones(100, 200);
    };

};


const army = {};


const addRandomClones = function (min, max) {
// Math.floor = {}, возвращаем и округляет 
    return Math.floor(Math.random() * (max - min) + min);

};

army.replenishArmy();

console.log(army.stormtrooopers);