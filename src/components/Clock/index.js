import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
  }
  // or state = {date:new Date()}

  componentDidMount = () => {
    console.log('componentDiMount called')
    this.timerID = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  componentWillUnmount = () => {
    console.log('ComponentWillunMount is called')
    clearInterval(this.timerID) // timer stops when hidesClocl
  }

  render() {
    const {date} = this.state
    console.log('Render called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
