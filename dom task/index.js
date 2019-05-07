const red = window.getComputedStyle(document.querySelector('.red')).color;
const blue = window.getComputedStyle(document.querySelector('.blue')).color;
const keyDown = {};
let currentColor = window.getComputedStyle(document.querySelector('.currentColor')).color;
let prevColor = window.getComputedStyle(document.querySelector('.prev-color')).color;
let dragSourceElement;
let currentAction;

window.onload = loadCanvasStoreState();

//Panel

document.querySelector('.prev-option').addEventListener(click, () => {
    document.querySelector('.currentColor').style.color = prevColor;
    currentColor = prevColor;
});
document.querySelector('.red-option').addEventListener('click', () => {
    if (currentColor != red) {
        prevColor = currentColor;
        document.querySelector('.prev-color').style.color = prevColor;
        document.querySelector('.currentColor').style.color = red;
        currentColor = red;
    }
});

document.querySelector('.blue-option').addEventListener('click', () =>{
 if(currentColor != blue) {
     prevColor = currentColor;
     document.querySelector('.prev-color').style.color = prevColor;
     document.querySelector('.currentColor').style.color = blue;
     currentColor = blue;
 }
});

// Allow to choose any desired color via input type color
document.getElementById('color').addEventListener('input', () => {
    const theColor = document.getElementById('color').value;
    document.querySelector('.currentColor').style.color = theColor;
    currentColor = theColor;
}, false);

// bucket function

document.querySelector('.bucket').addEventListener('click', () =>{
    clearToolsActiveState();
    document.querySelector('.bucket').classList.toggle('active');
    currentAction = 'bucket';
    document.getElementsByTagName('body')[0].style.cursor = "url('img/bucket.png'), auto";
});

document.querySelector('.eye-dropper').addEventListener('click', ()=>{
    clearToolsActiveState();
    document.querySelector('.eye-dropper').classList.toggle('active');
    currentColor = 'eye-dropper';
    document.getElementsByTagName('body')[0].style.cursor = "url('img/eye-dropper.png'), auto";
});

//move
document.querySelector('.move').addEventListener('click', ()=>{
    clearToolsActiveState();
    document.querySelector('.move').classList.toggle('active');
    currentAction = 'move';
    document.getElementsByTagName('body')[0].style.cursor = "url('img/move.png'), auto";
});

// transform
document.querySelector('.transform').addEventListener('click', () =>{
    clearToolsActiveState();
    document.querySelector('.transform').classList.toggle('active');
    currentAction = 'transform';
    document.getElementsByTagName('body')[0].style.cursor = "url('img/transform.png'), auto";
});

//clearToolsActiveState
function clearToolsActiveState() {
    document.querySelector('.bucket').classList.remove('active');
    document.querySelector('.eye-dropper').classList.remove('active');
    document.querySelector('.move').classList.remove('active');
    document.querySelector('.transform').classList.remove('active');
}

//SaveState()

function SaveState() {
    const arr = [];
    const alems = document.querySelectorAll('.element');
    for (const elem of elems) {
        const color = window.getComputedStyle(elem).backgroundColor;
        const classData = elem.classList.value;
        const position = window.getComputedStyle(elem).order;
        arr.push({color, classData, position});
    }
    arr.forEach((e, i) => {
        localStorage.setItem(`element${i + 1}`, JSON.stringify(e));
    });
  }

//loadCanvasStoreState

function loadCanvasStoreState() {
    if (localStorage.length !== 0) {
        const elems = document.querySelector('.element');
        for (const elem of elems){
            elem.style.backgroundColor = JSON.parse(localStorage.getItem(elem.id)).color;
            elem.style.order =JSON.parse(localStorage.getItem(elem.id)).position;
            elem.classList = '';
            const classDataSplit = JSON.parse(localStorage.getItem(elem.id)).classData.split(' ');
            for (let i = 0; i < classDataSplit.length; i++) {
                elem.classList.add(classDataSplit[i]);
            }
        }
    }
}

//applyAction

function applyAction() {
    if (currentAction === 'bucket') {
        this.style.backgroundColor = currentColor;
    } else  if (currentColor === 'transform'){
        this.classList.toggle('round');
        SaveState(this);
    } else if(currentColor === 'eye-dropper'){
        currentColor = this.style.backgroundColor;
        document.querySelector('.currentColor').style.color = currentColor;
    }
}

// add event listener

document.querySelectorAll('.element').forEach(e => e.addEventListener('click', applyAction));

// drag and drop
function dragStart(event) {
    if (currentAction === 'move') {
        this.style.opacity = '0.2';
        this.className += ' hold';
        dragSourceElement = this;
        event.dataTransfer.setData('text/plain', window.getComputedStyle(this).order);
    }
}

function dragEnd() {
    if (currentAction === 'move') {
        this.classList.remove('hold');
        dragSourceElement.style.opacity = '1.0';
    }
    SaveState(this);
}

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    if (currentAction === 'move') {
        e.preventDefault();
        this.className += ' hovered';
    }
}

function dragLeave() {
    this.classList.remove('hovered');
}

function dragDrop(e) {
    if (currentAction === 'move') {
        e.preventDefault();
        this.classList.remove('hovered');
        if (dragSourceElement !== this) {
            dragSourceElement.style.opacity = '1.0';
            dragSourceElement.style.oder = window.getComputedStyle(this).order;
            this.style.order = e.dataTransfer.getData('text/plain');
        }
    }
}

//figure
const elements = document.querySelectorAll('.element');

for (const element of elements) {
    element.addEventListener('dragstart', dragStart, false);
    element.addEventListener('dragover', dragOver, false);
    element.addEventListener('dragenter', dragEnter, false);
    element.addEventListener('dragend', dragEnd, false);
    element.addEventListener('dragleave', dragLeave, false);
    element.addEventListener('drop', dragDrop, false);
}

// adds event listener to windows to track the P, C, M and T keys being pressed to
// activate relevant tools via keybord. Insert the event keyCode to keysDown object
// as a key with boolean 'true' value. calls clearToolsActiveState() function before
// the activation of relevant tool

window.addEventListener('keydown', (event) => {
    keysDown[event.keyCode] = true;
    for (const key in keyDown){
        if(Object.prototype.hasOwnProperty.call(keyDown, key)){
            const value = Number(key);
            if (value === 80) {
                clearToolsActiveState();
                document.querySelector('.bucket').classList.toggle('active');
                currentAction = 'bucket';
                document.getElementsByTagName('body')[0].style.cursor = "url('img/bucket.png'), auto";
            } else if (value === 67) {
                clearToolsActiveState();
                document.querySelector('.eye-dropper').classList.toggle('active');
                currentAction = 'eye-dropper';
                document.getElementsByTagName('body')[0].style.cursor =  "url('img/eye-dropper.png'), auto";
            } else if(value === 77) {
                clearToolsActiveState();
                document.querySelector('.move').classList.toggle('active');
                currentAction = 'move';
                document.getElementsByTagName('body')[0].style.cursor =  "url('img/move.png'), auto";
            } else if(value === 84) {
                clearToolsActiveState();
                document.querySelector('.transform').classList.toggle('active');
                currentAction = 'transform';
                document.getElementsByTagName('body')[0].style.cursor = "url('img/transform.png'), auto";
            }
        }
    }
});

window.addEventListener('keyup', (event) =>{
    delete keyDown[event.keyCode];
});