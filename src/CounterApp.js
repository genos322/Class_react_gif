import React, {useState} from 'react';


const CounterApp = ({value})=>{
    
    const [counter,setCounter] = useState(0);//es un hook que hace de una función.... y en este caso usestate cambia el valor de algo
    //  const [counter,setCounterMenos] = useState();
     const handleAdd = ()=>{
         setCounter(counter +1);
    }
    const handleDis = ()=>{
        setCounter(counter -1);
   }
   const handleRest = ()=>{
    setCounter(0);
}
    return(
        <>
        <h1 id="aea"> c P P</h1>
       
        <h2>{counter}</h2>
        <button onClick={ handleAdd}>+1</button>
        <button onClick={ handleDis}>-1</button>
        <button onClick={ handleRest}>deval</button>
        </>
    )
}

// CounterApp.prototype={
//     value: PropTypes.number.isRequired,
// }
// CounterApp.defaultProps ={
//     value: 0
// }

export default CounterApp;