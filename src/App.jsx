import { useEffect, useState } from "react"

import Options from "./components/Optios"
import Feedback from "./components/Feedback"
import Description from "./components/Description"
import Notification from "./components/Notification"

const FEEDBACK_KEY = 'feedback'
const feedbackInitState = { good: 0, neutral: 0, bad: 0 }

const App = () => {
  const [feedback, setFeedBack] = useState(() => {
    const feedbackJSON = localStorage.getItem(FEEDBACK_KEY)
    if (!feedbackJSON) return feedbackInitState

    return JSON.parse(feedbackJSON)
  })

  const totalFeedback = feedback.bad + feedback.good + feedback.neutral
  const positivePercentage = calculatePositivePercentage(feedback.good, totalFeedback)

  const updateFeedback = (feedbackType) => {
    setFeedBack((prev) => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }))
  }

  const handleReset = () => {
    setFeedBack(feedbackInitState)
  }

  useEffect(() => {
    localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback))
  }, [feedback])

  return (
    <>
      <Description />
      <Options updateFeedback={updateFeedback} handleReset={handleReset} totalFeedback={totalFeedback} />
      
      { totalFeedback > 0
        ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
        : <Notification/>
      }
    </>
  )
}

function calculatePositivePercentage(good, total) {
  return Math.round((good / total) * 100) + "%"
}

export default App
