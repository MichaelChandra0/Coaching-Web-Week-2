import Counter from "./component/Counter";
import Identitas from "./component/Identitas";
import Form from "./component/Form";
import ChangeBackgroundColor from "./component/ChangeBackgroundColor";

const App = () => {
  return (
    <div>
      <Counter />
      <Identitas
        nama={"Michael Peter Chandra"}
        npm={"2428250041"}
        github={"https://github.com/michaelchandra0"}
      />
      <Form />
      <ChangeBackgroundColor />
    </div>
  );
};

export default App;
