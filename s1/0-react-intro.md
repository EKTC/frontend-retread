### Intro to React

### Components

- The course uses vite running it like this

```
npm create vite@latest introdemo -- --template react

# Ensure all the dependencies are installed
cd introdemo
npm install

# To run the environment
npm run dev
```

- First creation of the root node that acts as the baseline of the DOM

```
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
```

- It seems like React components are returning HTML markup but instead its JSX
- Although JSX looks like HTML, we are dealing with a way to write JavaScript
- Under the hood, JSX returned by React components is compiled into JavaScript
- JSX is very similar to HTML but you can embed dynamic content

The difference before and after compiling:

```js
const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  console.log(now, a + b);

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return React.createElement(
    "div",
    null,
    React.createElement("p", null, "Hello world, it is ", now.toString()),
    React.createElement("p", null, a, " plus ", b, " is ", a + b)
  );
};
```

### Props

- props allows the user to pass in data to a component directly
- Note that props is an object which holds key value pairs of this data

```js
const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  );
};

// Pass it in with the what the data variable will be called
const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="George" />
      <Hello name="Daisy" />
    </div>
  );
};
```

### Extra Notes

- When creating components we need to make sure it starts with an uppercase
- We need to do this as it will try and use the built in HTML element of the name
- Note that we cannot render objects and need to extract the data out

### Notes from the exercises

- Exercises completed were 1.1, 1.2
- Know that props has to be text or an expression and cannot be an array
