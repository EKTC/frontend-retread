const Section = (props) => {
  let t =
    props.content[0].exercises +
    props.content[1].exercises +
    props.content[2].exercises;
  return (
    <div>
      <h1>{props.course_name}</h1>
      {props.content.map((part, index) => (
        <Part key={index} part={part.name} num_ex={part.exercises}></Part>
      ))}
      <p>Number of exercises {t}</p>
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
      <Section course_name={course} content={parts}></Section>
    </div>
  );
};

export default App;
