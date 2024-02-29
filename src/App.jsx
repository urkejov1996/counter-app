  import './App.css'
import Counter from './components/counter/counter';



  function App() {
    return (
      <div className='App'>
        <Counter by={1}></Counter>
        <Counter by={2}></Counter>
        <Counter by={5}></Counter>
      </div>
    );
  }


  // function PlayingWithProps({property1,property2}){

  //   console.log(property1)
  //   console.log(property2)

  //   return(
  //     <div>Props</div>
  //   )
  // }
  
  export default App
