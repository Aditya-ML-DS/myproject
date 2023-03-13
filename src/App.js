
import './App.css';
import Product from './Component/ArrayOfObjectwithMap';
import ElementsVariable from './Component/ElementVarable';
import FormComponent from './Component/FormComponent';
import FunctionalComponent from './Component/FunctionalCompoenet';
import MapFunctionComponent from './Component/MapFunctionComponent';
import TurnaryConditionalCompoenet from './Component/TurnaryConditionalCompnent';


function App() {
  return (
    <div className="App">
    <FunctionalComponent/>
    <ElementsVariable/>
    <TurnaryConditionalCompoenet/>
    {/* <MapFunctionComponent/> */}
    <Product/>
    <FormComponent/>
    </div>
  );
}

export default App;
