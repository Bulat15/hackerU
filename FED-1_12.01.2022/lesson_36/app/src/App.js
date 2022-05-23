// import React from 'react'

// export default function App() {
//   return (
//     <div>App</div>
//   )
// }

import './app.css'
import Form from './componets/Form'
import GridList from './componets/GridList'
import Nav from './componets/Nav'

function App(){
  return(
    <>
    <Nav></Nav>
    <GridList/>
    <Form/>
    </>
    
  )
}

export default App