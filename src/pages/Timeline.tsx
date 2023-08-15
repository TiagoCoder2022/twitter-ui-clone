import { FormEvent, KeyboardEvent, useState } from "react"
import Header from "../components/Header"
import Separator from "../components/Separator"
import Tweet from "../components/Tweet"
import './Timeline.css'

export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState(
    [
      'Meu primeiro tweet',
      'Teste',
      'Deu certo tweetar!'
    ]
  )

  function createNewTweet(ev: FormEvent){
    ev.preventDefault()

    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.ctrlKey ) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className="timeline">
      <Header title="Home"/>         

      <form onSubmit={createNewTweet}  className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/TiagoCoder2022.png" alt="Tiago" />
          <textarea 
            id="tweet" 
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(ev) => {
              setNewTweet(ev.target.value)
            }}
          />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator/>

      {tweets.map((item) => {
        return <Tweet key={item} content={item} />
      })}
          
    </main>
  )
}