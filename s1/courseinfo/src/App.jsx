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
        <Part key={index} part={part.name} num_ex={part.num}></Part>
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
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const content = [
    {
      name: part1,
      num: exercises1,
    },
    {
      name: part2,
      num: exercises2,
    },
    {
      name: part3,
      num: exercises3,
    },
  ];
  return (
    <div>
      <Header course_name={course}></Header>
      <Content content={content}></Content>

      <Total total={exercises1 + exercises2 + exercises3}></Total>
    </div>
  );
};

export default App;
