function craation() {
  let arrayWithInitSize = new Array(4);
  let arrayWithInitValue = Array.of(4);
  let arrayWithPreset = new Array(5, 6);
  let arrayWithInitOneValue = new Array("5");
  let simpleWayArray = ["a", "b", "c"];
  console.log("\nCreation");
  console.log("arrayWithInitSize:", arrayWithInitSize);
  console.log("arrayWithInitValue:", arrayWithInitValue);
  console.log("arrayWithPreset:", arrayWithPreset);
  console.log("arrayWithOneValue:", arrayWithInitOneValue);
  console.log("simpleWayArray:", simpleWayArray);
}

function howToAddRemove() {
  let array = [];
  console.log("[Init]:", array);

  array.push(4, 5, 6, 7);
  console.log("[After push]", array);

  array.unshift(1, 2);
  array.unshift(3);
  console.log("[After unshift]", array);

  array.pop();
  console.log("[After pop]", array);

  array.shift();
  console.log("[After shift]", array);
}

function modifyArray() {
  console.log("\nModify Array:");

  let array = [1, 2, 3, 4, 5];
  console.log("Init", array);

  array.fill("a");
  console.log("\n[After fill(a)]: ", array);

  array.fill("b", 2);
  console.log("[After fill(b, 2)]:", array);

  array.fill("c", 2, 4);
  console.log("[After fill(c, 2, 4)]:", array);

  let reversed = array.reverse();
  console.log("\n[After reverse, reversed]: ", reversed);
  console.log("[After reverse, original array]:", array);

  array = [4, 2, 1, 3];
  console.log("\n[Init before sort]:", array);
  let sorted = array.sort();
  console.log("[After sort, sorted]", sorted);
  console.log("[After sort, original array];", sort);

  //ok.. but...
  array = [40, 231, 1000, 31];
  console.log("\n[Init before sort]:", array);
  console.log("WTF?", array.sort());

  console.log("Set comparator", array.sort((a, b) => a - b));
}

function workWithSplice() {
  console.log("\nWork With Splice:");

  let array = [2, 3, 4, 5, 6];
  console.log("\n[Init]:", array);
  array.splice(2);
  console.log("[After splice(2)]: ", array);

  array = [2, 3, 4, 5, 6];
  console.log("n[Init]:", array);
  //console.log('-----------',array.splice(2,2));
  console.log("[After splice(2,2)]:", array);

  array = [2, 3, 4, 5, 6];
  console.log("\n[Init]:", array);
  array.slice(2, 0, "new", "item");
  console.log('[After splice(2, 0, "new", "item")]:', array);
}

function search() {
  console.log("\nSearch");

  let array = [2, 8, 3, NaN, 4];
  console.log("[Init]:", array);

  console.log("\n[.indexOf(2)]:", array.indexOf(2));
  console.log("\n[.indexof(NaN)]:", array.indexOf(NaN));

  console.log("\n[.includes(2)]:", array.includes(2));
  console.log("[.includes(NaN)]:", array.includes(NaN));

  console.log("\n[.find(четный)]", array.find(item => !(item & 1)));
  console.log("[.find(?)]:", array.find(item => false));

  console.log(
    "\n[.findIndex( четный )]:",
    array.findIndex(item => !(item & 1))
  );
  console.log("[.findIndex( ? )]:", array.findIndex(item => false));
}

function someFunction() {
  console.log("\nSome Functions");

  let array = [3, 4, 7];
  console.log("[Init]:", array);
  // не изменяет массив
  let result = array.concat(1);
  console.log("\n[.concat(1)]:", result);

  result = array.concat(10, 20);
  console.log("\n[.concat(10, 20)]:", result);

  result = array.concat([8, 9]);
  console.log("\n[.concat([8, 9])]:", result);

  result = array.concat(["a", "b"], "c");

  console.log("\n[.concat([a, b], c)]:", result);

  console.log("\n[.join()]:", result.join());

  console.log('\n[.join(", ")]:', result.join(", "));

  console.log('\n[.join("ANY_TEXT")]:', result.join("__ANY__"));

  console.log("\n[.toString()]:", result.toString());
}

function bypass() {
  console.log("\nBypas");

  let array = [2, 3, 4, 5, 6];
  console.log("[Init]:", array);

  console.log("\n[forEach( log)]:");
  array.forEach(item => console.log("item:", item));

  console.log("\n[after .map]:");
  console.log(array.map(item => item * 20));

  console.log(
    "\n[after .filter( четные )]:",
    array.filter(item => !(item & 1))
  );

  console.log(
    "\n[after .reduce( mul_func)]:",
    array.reduce((acc, item) => acc * item)
  );

  console.log("\n[.some( четные)]:", array.some(item => !(item & 1)));

  console.log("[.some( < 0 )]", array.some(item => item < 0));

  console.log("\n[.every( четные)]:", array.every(item => !(item & 1)));

  console.log("[.every( > 0)]:", array.every(item => item > 0));
}

function interestingBypass() {
  console.log("\n Interesting Bypass");

  let commentList = [
    {
      id: "#com1",
      outhor: { id: "#aut1", name: "John Doe" },
      text: "Cool!",
      postId: "#post1"
    },
    {
      id: "#com2",
      outhor: { id: "#aut1", name: "John Doe" },
      text: "Cool!",
      postId: "#post2"
    },
    {
      id: "#com3",
      outhor: { id: "#aut2", name: "Anthony Hopkins" },
      text: "Nice cooment, John! :)",
      postId: "#post1"
    },
    {
      id: "#com4",
      outhor: { id: "aut1", name: "John Doe" },
      text: "Thanks!",
      postId: "#post1"
    }
  ];

  console.log("[Init]:");
  commentList.forEach(comment => console.log(comment));

  console.log(
    "\n[Get all comments for post with id = #post1]:",
    commentList
      .filter(comment => comment.postId === "#post1")
      .map(comment => comment.text)
  );

  console.log(
    "\n[Find author names]:",
    commentList
      .map(comment => comment.author)
      .filter(
        (author, index, currentList) =>
          currentList.findIndex(item => item.id === author.id) === index
      )
      .map(author => author.name)
  );

  console.log("\n[Get Pairs <AuthorID, CommentCount]:", 
  commentList.
  map( comment => comment.author.id )
  .reduce( (acc, item) => {
      acc[item] = (acc[item] || 0) +1;
      return acc;
  }, {}) 
  );
  // .map ->[aut1, aut1, aut2, aut1]
  //. reduce -> {aut1: 1}-> {aut1: 2} ->{aut2: 1} -> {aut1: 3}->{aut1: 3, aut2: 1}

  let nestedArray = [1, [5, 7], [3, [2], 6], 8];
  console.log('\n[Init Nested Array]:', nestedArray);
  console.log('\n[Flat nestedArray]:',
  nestedArray.reduce(
      (result, element) => result.concat(element)
      , [] 
  ) 
  ); 
}

function workWithArrayLike() {
    console.log('\nArray Like Object');
    function fn() {
        console.log('args:', arguments, 'with length', arguments.length);
        
        console.log('\n[ has Array in prototype ]:', arguments instanceof Array);
        console.log('[.isArray]:', Array.isArray(arguments));
        
        console.log('\n[Arrray.from]:', Array.from(arguments));
        console.log('[Spread args]:', [...arguments]);
        
        console.log('\n[Array. from with mapper]:',
        Array.from(arguments, x => x * 2)
        );
    }

    fn(1, 2, 3);
}

function workWithArrayMethods() {
    console.log('\nArray Methods');
    
    function fn() {
       console.log('[ Array.prototype.map]:',
       Array.prototype.map.call(arguments, item => item * 2)
       );
       console.log('[ [].join ]:', [].join.call(arguments));
       // добавляем новое св-во join
       arguments.join = () => 'I am join';
       // выводит I am join объявленный ранее 
       console.log('WTF #2 [ [].toString ]:',
       Array.prototype.toString.call(arguments)
       );
    }
    fn(1, 2, 3);
}

function workWithGenerators() {
    console.log('\nGenerators');
    function* gen() {
        yield 2;
        yield 4;
        yield 6;
        yield 80;
    }
  console.log('[Spread]:', ...gen());
  console.log('[Array.from]:', Array.from(gen()));
  
  let it = gen();
  let item = it.next();

  console.log('\n[Work with iterator]:\n');
  
  while (!item.done) {
      console.log(item);
      item = it.next('abc');
  }
  console.log('\n[Result iterator]:', item);
  
}
function* BotGenerator() {
    let answer = yield 'I am rady';
   
    while (true) {
       switch (answer) {
           case '1':{
               answer = yield 'I have got 1';
               break;

           }
            case '2': {
                answer = yield 'I have got 2';
                break;
            }
            default: {
                answer = yield 'I dont now';
                break;
            }
            }  
       
       } 
       let it = gin();
       console.log(it.next('1'));
       console.log(it.next('2'));
       console.log(it.next('abcdddaa')); 
}
// итерируемый объект
(() =>{
 let abc = {};
 abc[Symbol.iterator] = function* () {
     yield 'a'
     yield 'b'
     yield 'c'
     yield 'end!'
 }
 console.log(...abc, Array.from(abc));
//
 Number.prototype[Symbol.iterator] =function () {
  for (let i = 1; i <= this; i++) {
      yield i;
      
  }
 }
 
 console.log(...3);
 console.log(Array.from(3));
 
})