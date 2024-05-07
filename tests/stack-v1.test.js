const stack = require('../src/stack');

test('pop on stack with one element returns that element', () => {
    stack.push(2);
    expect(stack.pop()).toBe(2);
});

test('pop on empty stack returns undefined', () => {
    expect(stack.pop()).toBe(undefined);    
});