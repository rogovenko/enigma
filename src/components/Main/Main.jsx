import { useState } from 'react'
import { wordInput, wordInputReverse } from '../logic'
import style from './style.module.css'

function Main() {
  const [rotor1, setRotor1] = useState(0)
  const [rotor2, setRotor2] = useState(0)
  const [rotor3, setRotor3] = useState(0)
  const [result, setResult] = useState('')
  const [input, setInput] = useState('')

  const encryptHandler = (e) => {
    e.preventDefault()
    const rotor = [+rotor1, +rotor2, +rotor3]
    setResult(wordInput(input, rotor))
    setRotor1(rotor[0])
    setRotor2(rotor[1])
    setRotor3(rotor[2])
  }

  const decryptHandler = (e) => {
    e.preventDefault()
    const rotor = [+rotor1, +rotor2, +rotor3]
    setResult(wordInputReverse(input, rotor))
    setRotor1(rotor[0])
    setRotor2(rotor[1])
    setRotor3(rotor[2])
  }

  const resetHandler = (e) => {
    e.preventDefault()
    setRotor1(0)
    setRotor2(0)
    setRotor3(0)
    setResult('')
    setInput('')
  }

  return (
    <div className={style.container}>
      <h1>EnigmaOnline</h1>

      <div className={style.containerRotors}>
        <div className={style.intro}>Please, input rotor-code</div>
        <div className={style.hint}>Hint: not more then 26!</div>
        <form>
          <div className={style.inputContainer}>
            <input value={rotor1} onChange={(e) => setRotor1(e.target.value)} type="number" />
            <input value={rotor2} onChange={(e) => setRotor2(e.target.value)} type="number" />
            <input value={rotor3} onChange={(e) => setRotor3(e.target.value)} type="number" />
          </div>
        </form>
      </div>

      <form className={style.containerRotors}>
        <div className={style.intro}>Input your message</div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={style.inputWord}
        />
        <div className={style.btnContainer}>
          <button onClick={encryptHandler} type="button">encrypt</button>
          <button onClick={decryptHandler} type="button">decrypt</button>
        </div>
      </form>

      <div className={style.containerRotors}>
        <div className={style.intro}>Your result:</div>
        <div className={style.result}>{result}</div>
      </div>
      <button onClick={resetHandler} className={style.reset} type="button">reset</button>
    </div>

  )
}

export default Main
