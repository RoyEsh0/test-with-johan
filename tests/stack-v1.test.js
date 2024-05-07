const stack = require('../src/stack');

test('pop on stack with one element returns that element', () => {
    stack.push("");
    expect(stack.pop()).toBe("");
});

test('pop on empty stack returns undefined', () => {
    expect(stack.pop()).toBe(defined);    
});