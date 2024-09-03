import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [FirstInput, setFirstInput] = useState('')
  const [SecondInput, setSecondInput] = useState('')
  const [Disable, setDisable] = useState(true)
  const [Show, setShow] = useState(false)
  const [line, setline] = useState(false)

  useEffect(() => {
    if (FirstInput != '' && SecondInput != '') {
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [FirstInput, SecondInput])

  let check = () => {
    if (FirstInput != '' && SecondInput != '') {
      setShow(Math.floor(Math.random() * 100))
      setline(true)
    }

  }

  
  return (
    <>

      <div className='hadding'>
        <h1>Love <i class="fa fa-heart" aria-hidden="true"></i> Calculator</h1>
        <h2>Enter your name and your lover's name and hit ' Calculate ' .</h2>
      </div>

      <div className="box">
        <input type='text' placeholder='your First name' onChange={(e) => setFirstInput(e.target.value)}></input>
        <button onClick={check} disabled={Disable}>Calculator</button>
        <input type='text' placeholder='your Second name' onChange={(e) => setSecondInput(e.target.value)}></input>
      </div>

      <div className='pre'>
        
        {line &&
          <div className='pre1'>
            <h1>Compatibility: {Show}%</h1>
            <p>There is some serious chemistory!</p>
          </div>
        }
        
      </div>

      

    </>
  )
}

export default App
