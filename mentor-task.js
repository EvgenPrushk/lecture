   function polidrom(str) {
      let str1 = str.split('').reverse().join('');
      if (str == str1) {
         return true;
      } else {
         return false;
      }
      // узнал, что reverse работает с элементами массива, а не строки
      // let str1 = str.split('').reverse().join('');
      // console.log(str1);
      // if (str == str1) { console.log(22)} else {console.log(55)}
    }

      function StrReverse(str) {
      var strReverse = "";

      for (let i = str.length - 1; i >= 0; i--) {
         strReverse += str[i];}

      return strReverse;
      //str.split('').reverse().join('')
      //let str = "madana"; let str1 = str.split('').reverse().join(''); console.log(str1);
    }

  


function DoubleLetters(str) {
for (let i = 0; i < str.length; i++) {
  for(let j = i + 1; j < str.length; j++) {
    
     if (str[i] == str[j]) {
      
       return str[i];}
     }
   }
}
// let str = "madam"; 

// for (let i = 0; i < str.length; i++) {
//   for(let j = i+1; j < str.length; j++) {
//     if (str[i] == str[j]) {console.log(str[j])}}};
// VM34:5 m
// VM34:5 a