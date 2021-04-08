import { useReducer } from "react";
import QuizContext from "./quizContext";
import quizReducer from "./quizReducer";
import quizTypes from "./quizTypes";

const QuizState = (props) => {

	const initialState = {
		typeOfQuiz: null,
    region: null,
		countriesAllData: null,
		allQuestions: null,
	};

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const setTypeOfQuiz = typeOfQuiz => {
    dispatch({
      type: quizTypes.SET_QUIZ_TYPE,
      payload: typeOfQuiz
    })
  }

	return (
    <QuizContext.Provider value={{
      typeOfQuiz: state.typeOfQuiz,
      countriesAllData: state.countriesAllData,
      allQuestions: state.allQuestions,
      setTypeOfQuiz
    }}>
      {props.children}
    </QuizContext.Provider>
  )
};

export default QuizState;
