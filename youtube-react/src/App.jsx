import Button from 'react-bootstrap/Button'
import { Footer } from './footer'
import { Greeting } from './footer'
import { A } from './footer'
import { News } from './footer'
import { Son } from './props'
import { User } from './props'
import { City } from './lists'
import { List } from './lists'

import './App.css'


function App() {
  const users = {
    name: "njambi",
    age: 30,
    gender: "female"
  }
  
 let age = 28

  return (
    <>
    <City/>
    <List/>
    <h1>{age === 28 ? "you are over 20" : "you are below the age"}</h1>
    <button variant="primary">click me</button>
   
    <Greeting name="njambi" age={95}/>
    <Greeting name="jesica" age={70}/>
    <Son>
      <p>this is my first child brian</p>
      <p>brian is a very good shuld</p>
    </Son>

    <User  {...users}/>

    <card>
      <p>my name is peninah</p>
      <h1>i love to cooke and play</h1>
    </card>

    <open>
      <h1>why are you here?</h1>
    </open>
    <A isLoggedIn={true}/> 

    <News message="good work"/>  
    
     <Footer/>
    </>
  )

}






export default App
