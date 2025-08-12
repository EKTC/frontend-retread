const Header = (props) => {
  return (
    <div>
      <h1>{props.course_name}</h1>
    </div>
  );
};

const Content = (props) => {
  console.log(props);
  return (
    <div>
      {props.content.map((part, index) => (
        <Part key={index} part={part.name} num_ex={part.exercises}></Part>
      ))}
    </div>
  );
};

const Part = (props) => {
  console.log(props);
  return (
    <p>
      {props.part} {props.num_ex}
    </p>
  );
};
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  );
};
const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <div>
      <Header course_name={course}></Header>
      <Content content={parts}></Content>

      <Total
        total={parts[0].exercises + parts[1].exercises + parts[2].exercises}
      ></Total>
    </div>
  );
};

export default App;
