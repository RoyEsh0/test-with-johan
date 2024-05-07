const stack = require('../src/stack');

test('pop on stack with one element returns that element', () => {
    stack.push(2);
    expect(stack.pop()).toBe(2);
});

test('pop on empty stack returns undefined', () => {
    expect(stack.pop()).toBe(undefined);    
});

test('push increases the stack size', () => {
    expect(stack.peek()).toBe(undefined);
    stack.push(40);
    expect(stack.peek()).toBe(40);

})