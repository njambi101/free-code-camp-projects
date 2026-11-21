import Button from 'react-bootstrap/Button'
import { Footer } from './footer'
import { Greeting } from './footer'
import { Son } from './props'
import { User } from './props'
import './App.css'


function App() {
  const users = {
    name: "njambi",
    age: 30,
    gender: "female"
  }
  return (
    <>
    <button variant="primary">click me</button>
    <Footer/>
    <Greeting name="njambi" age={95}/>
    <Greeting name="jesica" age={70}/>
    <Son>
      <p>this is my first child brian</p>
      <p>brian is a very good shuld</p>
    </Son>

    <User  {...users}/>
    
    </>
  )

}






export default App
