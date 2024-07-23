import QuestionTimer from "./QuestionTimer";
import Answer from "./Answer";
export default function Question({
  questionText,
  answers,
  onSelectAnswer,
  selectedAnswer,
  answersState,
  onSkipAnswer,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answer
        answer={answers}
        selectedAnswer={selectedAnswer}
        answersState={answersState}
        onSelect={onSelectAnswer}
      />
    </div>
  );
}
