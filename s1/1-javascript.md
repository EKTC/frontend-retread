### Javascript

- Browsers do not yet support all of JavaScript's newest features
- Due to this fact, a lot of code run in browsers has been transpiled from a newer version of JavaScript to an older, more compatible version
- Today, the most popular way to do transpiling is by using Babel. Transpilation is automatically configured in React applications created with Vite.
- Node.js is a javascript runtine environment
- You can open a nodejs console by typing `node`

### Variables

```js
const x = 1;
let y = 5;

console.log(x, y); // 1 5 are printed
y += 10;
console.log(x, y); // 1 15 are printed
y = "sometext";
console.log(x, y); // 1 sometext are printed
x = 4; // causes an error
```

- const means it becomes immutable and we cannot change the value for that variable
- let allows us to change it whenever as it is mutable
- Javascript is loosely typed so we do not need to define the variable type but rather just initialise it
  - Hence why we can switch the `y` variable which is an `int` to a `string` without errors
- `var` is also a keyword used instead of `let & const` before but is now only used for older browsers

### Arrays

```js
const t = [1, -1, 3];

t.push(5);

console.log(t.length); // 4 is printed
console.log(t[1]); // -1 is printed

t.forEach((value) => {
  console.log(value); // numbers 1, -1, 3, 5 are printed, each on its own line
});
// --------------------------- //
t = [1, 2, 3];
new_arr = [...t];
```

- We can iterate through an arry with `forEach`, in which we can define a function
- This function will occur on each item
- We also have the spread syntax which is `...`
- This will include the any objects or array as part of a new one or to apply to these args one by one

```js
const t = [1, -1, 3];

const t2 = t.concat(5); // creates new array

console.log(t); // [1, -1, 3] is printed
console.log(t2); // [1, -1, 3, 5] is printed
```

- There is also another way to insert elements which is through `concat`
- Rather than mutating the current array, `concat` will return a new array with the elements inserted
- This is just like the `...` spread syntax as explored above

```js
const t = [1, 2, 3];

const m1 = t.map((value) => value * 2);
console.log(m1); // [2, 4, 6] is printed
```

- JS has alot of methods assosciated with arrays
- One being `map` which creates a new array based on the items given

```js
const t = [1, 2, 3, 4, 5];

const [first, second, ...rest] = t;

console.log(first, second); // 1 2 is printed
console.log(rest); // [3, 4, 5] is printed
```

- This code example is the idea of destructuring, where the `first` variable is assigned `1`
- `second` assigned `2`
- And finally `rest` getting the rest of the items by condensing it all with the `...` spread

### Objects

- Using object literals where you define it with braces
- The values of the properties can be any type

```js
const object1 = {
  name: "Arto Hellas",
  age: 35,
  education: "PhD",
};

const object2 = {
  name: "Full Stack web application development",
  level: "intermediate studies",
  size: 5,
};

const object3 = {
  name: {
    first: "Dan",
    last: "Abramov",
  },
  grades: [2, 3, 5, 3],
  department: "Stanford University",
};
```

- We can reference the properties of objects using dot notation or by using brackets
- We can also modify the properties

```js
console.log(object1.name); // Arto Hellas is printed
const fieldName = "age";
console.log(object1[fieldName]); // 35 is printed

object1.address = "Helsinki";
object1["secret number"] = 12341;
```

- The latter of the additions has to be done by using brackets because when using dot notation, secret number is not a valid property name because of the space character

### Functions

- Below is how to define an arrow function

```js
const sum = (p1, p2) => {
  console.log(p1);
  console.log(p2);
  return p1 + p2;
};

// We can call it as such:
const result = sum(1, 5);
console.log(result);

// If we have a single parameter we can just remove the parentheses
const square = (p) => {
  console.log(p);
  return p * p;
};
```

- If the function contains a single expression we can omit the braces
- This can be very useful with `map` and manipulating arrays

```js
const square = (p) => p * p;

// --------- Map tech --------- //
const t = [1, 2, 3];
const tSquared = t.map((p) => p * p);
// tSquared is now [1, 4, 9]
```

- Arrow functions were added in 2015, whilst before we had to define it with keyword `function`
- We can also make a function expression with no need for a name

```js
function product(a, b) {
  return a * b;
}

const result = product(2, 6);
// result is now 12

// --------- Function Expr -------------- //
const average = function (a, b) {
  return (a + b) / 2;
};

const result = average(2, 5);
// result is now 3.5
```
