import { FormEvent, KeyboardEvent, useState } from "react"
import { PaperPlaneTilt } from 'phosphor-react'
import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"
import './Status.css'


export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswer] = useState(
    [
      'Concordo...',
      'Olha faz sentido.',
      'Parabéns pelo progresso!'
    ]
  )

  function createNewAnswer(event: FormEvent){
    event.preventDefault()

    setAnswer([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.ctrlKey ) {
      setAnswer([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet"/>   

      <Tweet content="Lorem Ipsun for fun" /> 

      <Separator/>    

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/TiagoCoder2022.png" alt="Tiago" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>
        <button type="submit">
          <PaperPlaneTilt/>
          <span>Answer</span>
        </button>
      </form>      

      {answers.map((answer) => {
        return <Tweet key={answer} content={answer} />
      })}        
    </main>
  )
}