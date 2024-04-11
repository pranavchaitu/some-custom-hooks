
// ---------------------------------------------------------------------------------------

import React, { useState } from 'react'
import './App.css'
import { useTodos } from './hooks/useTodos';
import { useIsOnline } from './hooks/useIsOnline';
import { useMousePointer } from './hooks/useMousePointer';
import { useInterval } from './hooks/useInterval';
import { useDebounce } from './hooks/useDebounce';

function App(){
  //if this input n is dynamic we clear intervals and good to go
  const [todos,loading] = useTodos(5);
  const status = useIsOnline()
  const {x,y} = useMousePointer();
  const [count,setCount] = useState(0);
  const [value,setValue] = useState("")
  const debouncedValue = useDebounce(value,500);

  useInterval(() => {
    setCount(count+1)
  },1000)

  if(!status){
    return <>
      YOU'RE OFFLINE
    </>
  }

  if(loading){
    return <>
      Loading..
    </>
  }

  return <div style={{
    backgroundColor : `rgb(1,${x},${y})`
  }}>
    <Demo />
    {debouncedValue}<br></br>
    <input type="text" onChange={(e) => setValue(e.target.value)}/>
    <br /><br />
    <div>
      {x} {y}
    </div>
    <br />
    <div>
      Timer : {count}
    </div>
    {todos.map((t,i) => <Todo key={i} title={t.title} description={t.description}/>)}
  </div>
}

function Todo({title,description}) {
  return <>
    <h1>{title}</h1>
    <h2>{description}</h2>
  </>
}

function Demo() {
    return <>
        <h1>Try there out</h1>
        <ul>
            <li>try going offline i used a hook for it</li>
            <li>type in input box which is a debounced version</li>
            <li>move the mouse so that the coordinates will be tracked</li>
            <li>a custom hook like setInterval named as "timer"</li>
            <li>Todos which resets upon a timer and the delay can be adjusted</li>
        </ul>
    </>
}

export default App;

//---------------------------------------------------------------------------------------

//demonstration for component mount and unmount logic

// import { useEffect, useState } from "react"

// export default function App() {
//   const [render,setRender] = useState(true)
//   useEffect(() => {
//     setTimeout(() => setRender(false),3000)
//   },[])
//   return <>
//     {render ? <MyComponent /> : <>empty</>}
//   </>
// }

// function MyComponent() {
//     useEffect(() => {
//         console.log("rendered"); 
//         return () => {
//             console.log("unmounted");   
//         }
//     })
//     return <>
//         my Component
//     </>
// }

//---------------------------------------------------------------------------------------------

// //the class based comp's vs functional comp's comparision

// import React, { useState } from "react";

// export default function App () {
//   return <>
//     <MyComponent />
//   </>
// }

// class MyComponent extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {count : 0}
//   }
//   incrementCount  = () => {
//     this.setState({count : this.state.count + 1})
//   }
//   render () {
//     return <>
//       <button onClick={this.incrementCount}>{this.state.count}</button>
//     </>
//   }
// }

// function MyComponent() {
//   const [count,setCount] = useState(0)
//   return <>
//     <button onClick={() => setCount(count+1)}>{count}</button>
//   </>
// }