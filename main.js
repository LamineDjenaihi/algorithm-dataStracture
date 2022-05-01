 const Stack  = require('./algo_collection/stack');
 const mySet = require('./algo_collection/sets');
 const { Queue, PriorityQueue }  = require('./algo_collection/queue&&PRQ');
 const BST = require('./algo_collection/binarySearchTree');
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
/* let newQueue = new Queue();
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
 */

const bst = new BST();
  
  bst.add(9);
  bst.add(4);
  bst.add(17);
  bst.add(3);
  bst.add(6);
  bst.add(22);
  bst.add(5);
  bst.add(7);
  bst.add(20);
  
  console.log(bst.findMinHeight());
  console.log(bst.findMaxHeight());
  console.log(bst.isBalanced());
  bst.add(10);
  console.log(bst.findMinHeight());
  console.log(bst.findMaxHeight());
  console.log(bst.isBalanced());
  console.log('inOrder: ' + bst.inOrder());
  console.log('preOrder: ' + bst.preOrder());
  console.log('postOrder: ' + bst.postOrder());
  
  console.log('levelOrder: ' + bst.levelOrder());  