// Write your React code here.
import {Component} from 'react'
import './index.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class Feedback extends Component {
  state = {isSubmitted: false}

  onFeedback = () => {
    this.setState({isSubmitted: true})
  }

  render() {
    const {isSubmitted} = this.state

    const {emojis, loveEmojiUrl} = resources
    console.log(resources.emojis)
    console.log(resources.loveEmojiUrl)
    const normalCard = (
      <div className="card">
        <h2 className="title">
          How satisfied are you with our customer support performance?
        </h2>
        <ul>
          <button type="button" onClick={this.onFeedback} className="btn">
            <li className="listItem">
              <img
                src={emojis[0].imageUrl}
                alt={emojis[0].name}
                className="emojiClass"
              />
              <p className="emojiDes">{emojis[0].name}</p>
            </li>
          </button>

          <button type="button" onClick={this.onFeedback} className="btn">
            <li className="listItem">
              <img
                src={emojis[1].imageUrl}
                alt={emojis[1].name}
                className="emojiClass"
              />
              <p className="emojiDes">{emojis[1].name}</p>
            </li>
          </button>

          <button type="button" onClick={this.onFeedback} className="btn">
            <li className="listItem">
              <img
                src={emojis[2].imageUrl}
                alt={emojis[2].name}
                className="emojiClass"
              />
              <p className="emojiDes">{emojis[2].name}</p>
            </li>
          </button>
        </ul>
      </div>
    )
    const submitted = (
      <div className="card">
        <img src={loveEmojiUrl} alt="love emoji" className="emojiClassT" />
        <h1 className="title">Thank You!</h1>
        <h3 className="emojiDes">
          How satisfied are you with our customer support performance{' '}
        </h3>
      </div>
    )
    const relatedBtn = isSubmitted ? submitted : normalCard
    return <div className="bgContainer">{relatedBtn}</div>
  }
}

export default Feedback
