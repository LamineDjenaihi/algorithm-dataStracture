

/*Stack*/

class Stack {
    constructor() {
        this.count = 0;
        this.storage = {};
    }
        // add a value to the stack  
        push(value) {
            this.storage[this.count] = value;
            this.count++;
        };

        // print the value of the stack
        pop() {
            if (this.count == 0) {
                return undefined;
            }

            this.count--;
            let result = this.storage[this.count];
            delete this.storage[this.count];
            return result;


        };

        // print the length of stack
        size() {
            return this.count;
        };

        //print the last value of stack
        peek() {
            return this.storage[this.count - 1];
        };
    
}
module.exports = Stack;