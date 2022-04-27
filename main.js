const Stack  = require('./algo_collection/stack');
const mySet = require('./algo_collection/sets');

/*let newStack = new Stack();
newStack.push(1);
newStack.push(2);
console.log(newStack.peek());*/

let setA = new mySet();
let setB = new mySet();
setA.add("a");
setB.add("a");
setB.add("b");
setB.add("c");

console.log(setA.subset(setB));

