// Write your code here
import {Component} from 'react'

import './index.css'

const reviewsList = [
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/adrian-williams-img.png',
    username: 'Adrian Williams',
    companyName: 'WheelO',
    description:
      'Coming to Startup School is the best thing that has happened to me. I wish every startup in the country should get this opportunity.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/sherry-jhonson-img.png',
    username: 'Sherry Johnson',
    companyName: 'MedX',
    description:
      'I am glad to have such experienced mentors guiding us in every step through out the 4 weeks. I have improved personally and developed many interpersonal skills.',
  },
  {
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/ronald-jones-img.png',
    username: 'Ronald Jones',
    companyName: 'Infinos Tech',
    description:
      'I am really loving the way how mentors are taking care of us, the way they are explaining big theories with lots of case studies and innovative methods.',
  },
]

class ReviewsCarousel extends Component {
  state = {activeImg: 0}

  changeLeft = () => {
    const {activeImg} = this.state

    if (activeImg > 0) {
      this.setState(prevState => ({activeImg: prevState.activeImg - 1}))
    }
  }

  changeRight = () => {
    const l = reviewsList.length - 1
    const {activeImg} = this.state
    console.log(activeImg)

    if (activeImg < l) {
      this.setState(prevState => ({activeImg: prevState.activeImg + 1}))
    }
  }

  render() {
    const {activeImg} = this.state
    const activeImage = reviewsList[activeImg]
    console.log(activeImage)

    return (
      <div className="container">
        <div className="inner-container">
          <h1>Reviews</h1>
          <img src={activeImage.imgUrl} alt="img" className="img" />
          <div className="list-container">
            <button type="button" onClick={this.changeLeft} className="btn">
              <img
                className="list"
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left-arrow"
              />
            </button>
            <h1 className="list-img">{activeImage.username}</h1>
            <button type="button" onClick={this.changeRight} className="btn">
              <img
                className="list"
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right-arrow"
              />
            </button>
          </div>
          <h4>{activeImage.companyName}</h4>
          <p className="para">{activeImage.description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
