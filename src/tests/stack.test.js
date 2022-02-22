// npm install --save-dev jest
// npm install --save-dev @types/jest
// jest --watchAll --verbose --coverage
class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  push(item) {
    this.top += 1;
    this.items[this.top] = item;
  }

  get item() {
    return this.items[this.top];
  }

  pop() {
    const item = this.items[this.top];
    delete this.items[this.top];
    this.top -= 1;
    return item;
  }
}

describe('My Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  test('can be created', () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });
  test('can push to the top', () => {
    stack.push(4);
    expect(stack.top).toBe(0);
    expect(stack.item).toBe(4);
  });
  test('can pop off', () => {
    stack.push(4);
    stack.push(5);
    expect(stack.top).toBe(1);
    expect(stack.item).toBe(5);
    const five = stack.pop();
    expect(five).toBe(5);
    expect(stack.items).toEqual({ 0: 4 });
    expect(stack.top).toBe(0);
  });
});

function clone(array) {
  return [...array];
}

describe('Cloning array', () => {
  test('new place in memory', () => {
    const array = [1, 2, 3, 4];
    const clonedArray = clone(array);
    expect(array).not.toBe(clonedArray);
    expect(array).toEqual(clonedArray);
  });
});

function sumar(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Both arguments should be valid numbers');
  }
  return a + b;
}

describe('simple sum', () => {
  test('sum', () => {
    expect(sumar(1, 3)).toBe(4);
    expect(sumar(0, 0)).toBe(0);
    expect(sumar(0, -5)).toBe(-5);
  });

  test('passing null', () => {
    expect(() => sumar(null, 5)).toThrow(TypeError);
  });
});
