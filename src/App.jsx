import { useState } from 'react'
import Age from './component/Age.jsx'
import CapitalCity from './component/CapitalCity.jsx'


function App() {
  const [age, setAge] = useState(0)

  const increaseAge = () => {
    setAge (age + 1)
  }

  const decreaseAge = () => {
    setAge (age - 1)
  }

  const resetAge = () => {
    setAge (0)
  }


  const [capitalCity, SetCapitalCity] = useState("")

  const germanySelected = () => {
    SetCapitalCity ("Berlin")
  }

  const franceSelected = () => {
    SetCapitalCity ("Paris")
  }

  const englandSelected = () => {
    SetCapitalCity ("London")
  }

  const spainSelected = () => {
    SetCapitalCity ("Madrid")
  }
  

  return (
    <>
      <div className="grid justify-center	py-4 border-2 border-black">
        <p className="font-bold">This is an App Component</p>

        <p className='py-4 text-4xl	'>Age is: {age}</p>
        <Age increaseAge={increaseAge} decreaseAge={decreaseAge} resetAge={resetAge}/>

      </div>


      <div className='grid justify-center	py-4 border-2 border-black'>
        <p className="badge badge-primary badge-outline">Capital City: {capitalCity}</p>


        <CapitalCity germanySelected={germanySelected} franceSelected={franceSelected} englandSelected={englandSelected} spainSelected={spainSelected}/>

        
      </div>
    </>
  )
}

export default App
