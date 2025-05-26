import { useEffect, useState } from 'react'
import Description from "./components/description/description.jsx";
import Feedback from "./components/feedback/feedback.jsx";
import Options from "./components/options/options.jsx";

function App() {
  const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0
  });

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  useEffect(() => {
      const savedFeedback = localStorage.getItem('feedback');

      if (savedFeedback) {
          try {
              setFeedback(JSON.parse(savedFeedback));
          } catch (error) {
              console.error('Invalid localStorage data:', error);
          }
      }
  }, []);

  useEffect(() => {
      localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);


  const updateFeedback = feedbackType => {
      setFeedback(prev =>(
          {
              ...prev,
              [feedbackType]: prev[feedbackType] + 1
          }
      ));
  }

  function resetFeedback() {
      const initialFeedback = {
          good: 0,
          neutral: 0,
          bad: 0
      };
      setFeedback(initialFeedback);
  }

  return (
    <>
        <Description></Description>

        <Options
            updateFeedback={updateFeedback}
            hasFeedback={!!totalFeedback}
            resetFeedback={resetFeedback}>
        </Options>

        <Feedback
            feedback={feedback}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}>
        </Feedback>
    </>
  )
}

export default App
