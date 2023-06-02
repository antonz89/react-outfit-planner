import { useReducer } from 'react';
import './App.css';
import clothingReducer from './reducers/clothingReducer';



function App() {


const clothingType = ['Casual', 'Sport', 'Formal']

const [x, dispatch] = useReducer(clothingReducer, {})


  return (
    <div className="App App-header">

      <div>Top</div>
      <div><img src={x.a} /></div>
      <div>Botton</div>
      <div><img src={x.c} /></div>
      <div>Shoes</div>
      <div><img src={x.b} /></div>
      
      {
        clothingType.map((element)=>{
          return(
            <button
              onClick={()=>dispatch({
                type: element
              })}>{element}</button>
          )
        })
      }

      
    </div>
  );
}

export default App;
