function workWithArray(params) {
    let array = [];
    //let array = new Array();
    // let array = new Array(3);
    //let array = new Array[1, 2, 4, 5];
    console.log(array);

    function addItem() {
        array.push('abc');
        array.pop('foo');
        array.push('bar');

        array.unshift('first');
        array.unshift('second');
        array.unshift('third');
        console.log(array);

    }

    function getItem() {
        console.log('[get 0]', array[8]);
        console.log('[get 4', array[4]);

        array[1] = 'new value';
        console.log(array);

    }

    function removeItem() {
        console.log('[pop]:', array.pop());
        console.log('[shift]:', array.shift());

        console.log(array);
    }

    addItem();
    getItem();
    removeItem();
}

function workWithLinkedList() {
    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }
    class LinkedList {
        constructor() {
            this.head = null;
            this.length = 0;
        }

        add(value) {
            if (this.length ===) {
                this.head = new Node(value);
            } else {
                let current = this.head;
               
                while(current.next) {
                    current = current.next;
                }

                current.next = new Node(value);
            }
            this.length++;
        }

        insert(position, value) {}
    }
}