 const Stack  = require('./algo_collection/stack');
 const mySet = require('./algo_collection/sets');
 const { Queue, PriorityQueue }  = require('./algo_collection/queue&&PRQ');
/* let newStack = new Stack();
newStack.push(1);
newStack.push(2);
console.log(newStack.peek()); */
/* 
let setA = new mySet();
let setB = new mySet();
setA.add("a");
 setB.add("a");
 setB.add("b");
setB.add("c");
console.log(setA.subset(setB)); */
let newQueue = new Queue();
newQueue.enqueue(3);
newQueue.enqueue(2);
newQueue.enqueue(1);
newQueue.print();
newQueue.dequeue();
console.log(newQueue.front());

let newPrioQueue = new PriorityQueue();

newPrioQueue.enqueue(['Beau Carnes', 2]); 
newPrioQueue.enqueue(['Quincy Larson', 3]);
newPrioQueue.enqueue(['Ewa Mitulska-Wójcik', 1])
newPrioQueue.enqueue(['Briana Swift', 2])
newPrioQueue.printCollection();
newPrioQueue.dequeue();
console.log(newPrioQueue.front());
newPrioQueue.printCollection();


  