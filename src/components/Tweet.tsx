import './Tweet.css'
import { Link } from 'react-router-dom'
import { ChatCircle, ArrowsClockwise, Heart} from 'phosphor-react'

interface TweetProps {
  content: string
}

const Tweet = (props: TweetProps) => {
  return (
    <Link to="/status" className="tweet">
      <img src="https://github.com/TiagoCoder2022.png" alt="Tiago" />

      <div className='tweet-content'>
        <div className="tweet-content-header">
          <strong>Tiago Alves</strong>
          <span>@_tiago_a</span>
        </div>

        <p>
          {props.content}
        </p>

        <div className="tweet-content-footer">
          <button type='button'>
            <ChatCircle/>
            30
          </button>

          <button type='button'>
            <ArrowsClockwise/>
            30
          </button>

          <button type='button'>
            <Heart/>
            30
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Tweet
