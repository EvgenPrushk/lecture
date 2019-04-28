// // инлайновая модель
// function sayHelloOnce(e) {
//    alert('hello');
//     event.target.removeAttribute('onclick')} 


// //  традиционная модель на один элемент один обработчик
// var superDiv = document.querySelector('#superID');
// superDiv.onclick = function (e) {
//     alert('click');
//     superDiv.onclick = null;
// };


// WC3

// Element.addEventListener(eventName, eventHandler, useCapture);
// assert(typeof eventName === 'string');
// assert(typeof eventHandler === 'function');
// assert(typeof useCapture === 'boolean');

// var megaDiv = document.querySelector('#megaID');
// function alertClickOnce() {
//     alert('click');
//     megaDiv.removeEventListener('click', alertClickOnce);
// }
// megaDiv.addEventListener('click', alertClick);

// event Object

// var div = document.querySelector('#prettyID');
// div.addEventListener('click', function (e) {
//     // e is EventObject
//     assert(typeof e === 'object');
//     assert(e instanceof Event);
// });

// // event Target

// var div = document.querySelector('#prettyID');
// div.addEventListener('click', function (e) {
//     // e is EventObject
//     assert( e.target === div);
    
// });

// //  EVENT preventDefault -подменяет дефолтное поведение 
// var linkToGoogle = document.querySelector('#linkToGoogle');
// linkToGoogle.addEventListener('click', function (e) {
//     e.preventDefault();
//     window.location.href = 'http://yandex.ru'; // найдеться все
// });

// // EVENT stopPropagation - прерывается всплытие или погружение эвента

// // обработчик на li 
let counter = 0;
const button = document.querySelector('button');
const span = document.querySelector('span');
button.addEventListener('click', e => {
    counter++;
    span.innerHTML = counter;
});
