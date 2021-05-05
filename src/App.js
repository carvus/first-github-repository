import './App.css';
import Counter from './components/Counter'

function App() {
  function afterAddingN(number){
    console.log(`avelacrinq ${number} հե հե`);
  }
  return (
    <div className="App">
      <Counter armeniAttribute={afterAddingN}/>
    </div>
  );
}

export default App;
