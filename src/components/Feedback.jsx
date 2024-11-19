const Feedback = ({ feedback, totalFeedback }) => {

  const positive = calculatePositivePercentage(feedback.good, totalFeedback)

  return (
    <div>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positive}</p>
    </div>
  )
}

function calculatePositivePercentage(good, total) {
  return Math.round((good / total) * 100) + "%"
}

export default Feedback
