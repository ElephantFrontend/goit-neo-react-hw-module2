function Options ({ updateFeedback, hasFeedback, resetFeedback }) {
    return (
        <>
           <button onClick={() => updateFeedback('good')}>Good</button>
           <button onClick={() => updateFeedback('neutral')}>Neutral</button>
           <button onClick={() => updateFeedback('bad')}>Bad</button>
            {hasFeedback ? <button onClick={() => resetFeedback()}>Reset</button> : <> </>}
        </>
    )
}

export default Options
