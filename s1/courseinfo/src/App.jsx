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
  const part1 = {
    name: "Fundamentals of React",
    exercises: 10,
  };
  const part2 = {
    name: "Using props to pass data",
    exercises: 7,
  };
  const part3 = {
    name: "State of a component",
    exercises: 14,
  };

  return (
    <div>
      <Header course_name={course}></Header>
      <Content content={[part1, part2, part3]}></Content>

      <Total
        total={part1.exercises + part2.exercises + part3.exercises}
      ></Total>
    </div>
  );
};

export default App;
