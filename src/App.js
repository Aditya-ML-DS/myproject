
import './App.css';
import Product from './Component/ArrayOfObjectwithMap';
import ElementsVariable from './Component/ElementVarable';
import FormComponent from './Component/FormComponent';
import FunctionalComponent from './Component/FunctionalCompoenet';
import InlineComponent from './Component/InlineComponent';
import MapFunctionComponent from './Component/MapFunctionComponent';
import StyleModuleComponent from './Component/StyleModuleComponent';
import StyleSheetComponent from './Component/StyleSheetCompoenet';
import Todo from './Component/TodoApp';
import TurnaryConditionalCompoenet from './Component/TurnaryConditionalCompnent';


function App() {
  return (
    <div className="App">
    <FunctionalComponent/>
    <ElementsVariable/>
    <TurnaryConditionalCompoenet/>
    {/* <MapFunctionComponent/> */}
    <Todo/>
    <Product/>
    <FormComponent/>
    <InlineComponent/>
    <StyleSheetComponent/>
    <StyleModuleComponent/>
    </div>
  );
}

export default App;
