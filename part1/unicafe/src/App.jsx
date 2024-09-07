import { useState } from 'react'

const StatisticLine = (props) => {
  if (props.text == "good") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.good}</td>
      </tr>
    )
  }

  if (props.text == "neutral") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.neutral}</td>
      </tr>
    )
  }

  if (props.text == "bad") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.bad}</td>
      </tr>
    )
  }

  if (props.text == "all") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.good + props.neutral + props.bad}</td>
      </tr>
    )
  }

  if (props.text == "average") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{(props.good*1+props.neutral*0+props.bad*(-1))/(props.good+props.neutral+props.bad)}</td>
      </tr>
    )
  }

  if (props.text == "positive") {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{(props.good/(props.good+props.neutral+props.bad)) * 100} %</td>
      </tr>
    )
  }
}

const Statistics = ({good, neutral, bad}) => {
  if (good != 0 || neutral != 0 || bad != 0)
    return (
      <table>
        <tbody>
          <StatisticLine text="good" good={good} />
          <StatisticLine text="neutral" neutral={neutral} />
          <StatisticLine text="bad" bad={bad} />
          <StatisticLine text="all" good={good} neutral={neutral} bad={bad} />
          <StatisticLine text="average" good={good} neutral={neutral} bad={bad} />
          <StatisticLine text="positive" good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
    )
  return <p>No feedback given</p>
}

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
      
    </div>
  )
}

export default App