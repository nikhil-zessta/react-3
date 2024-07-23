import { useRef} from "react";
export default function Answer({ answer, selectedAnswer, answersState, onSelect }) {
  const shuffledAnswer = useRef();
  if (!shuffledAnswer.current) {
    shuffledAnswer.current = [...answer];
    shuffledAnswer.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffledAnswer.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClasses = "";

        if (answer === isSelected && isSelected) {
          cssClasses = "selected";
        }

        if (
          (answersState === "correct" || answersState === "wrong") &&
          isSelected
        ) {
          cssClasses = answersState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClasses}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
