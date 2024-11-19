const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      { Boolean(totalFeedback) && <button onClick={handleReset}>Reset</button> }
    </div>
  )
}

export default Options
