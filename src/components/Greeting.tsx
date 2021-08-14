interface GreetingProps {
  name: string;
  age?: number;
}

const Greeting: React.FC<GreetingProps> = (props) => {
  return (
    <div className="container">
      <h2><strong>Hello { props.name }</strong> and my age is { props.age } </h2>
      <p>Start with Ionic <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/components">UI Components</a></p>
    </div>
  );
};

export default Greeting;