import { useReducer } from "react";
import axios from 'axios';
import QuizContext from "./quizContext";
import quizReducer from "./quizReducer";
import quizTypes from "./quizTypes";
import { questionRoute } from "../../utils/routes";
import initialState from "../../utils/initialState";
import createOneQuestionByType from "../../utils/createOneQuestionByType";

const QuizState = (props) => {

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const setTypeOfQuiz = typeOfQuiz => {
    dispatch({
      type: quizTypes.SET_TYPE_OF_QUIZ,
      payload: typeOfQuiz
    })
  }

  const createFirstQuestion = async (region, history) => {
    dispatch({
      type: quizTypes.CREATE_FIRST_QUESTION_INIT,
      payload: region
    })
    try {
      const response = await axios(`https://restcountries.eu/rest/v2/region/${region}`);
      const coutriesData = await response.data;
      const typeOfQuiz = state.typeOfQuiz

      const question = createOneQuestionByType(coutriesData, typeOfQuiz);
      dispatch({
        type: quizTypes.CREATE_FIRST_QUESTION_SUCCESS,
        payload: {
          countriesData: coutriesData, question
        }
      })
      history.push(`${questionRoute}`);
    } catch (error) {
      console.log(error);
      dispatch({
        type: quizTypes.CREATE_FIRST_QUESTION_ERROR
      })
    }
  }

  const selectAnswerToCheck = answer => {
    dispatch({
      type: quizTypes.SELECT_ANSWER,
      payload: answer
    })
  }

  const checkAnswer = isCorrect => {
    const coutnriesData = state.allCountriesData;
    const typeOfQuiz = state.typeOfQuiz
    const question = createOneQuestionByType(coutnriesData, typeOfQuiz);
    dispatch({
      type: quizTypes.SET_IS_CHECKING_ANSWER
    })
    if(isCorrect) {
      dispatch({
        type: quizTypes.INCREMENT_SCORE
      })
    }
    setTimeout(() => {
      dispatch({
        type: quizTypes.CREATE_NEW_QUESTION_INIT
      })
        setTimeout(() => {
          dispatch({
            type: quizTypes.CREATE_NEW_QUESTION_SUCCESS,
            payload: question
          })
        }, 2000);
    }, 1000);
  }

  const endGame = () => {
    dispatch({
      type: quizTypes.RESET_QUIZ_STATE
    })
  }

	return (
    <QuizContext.Provider value={{
      typeOfQuiz: state.typeOfQuiz,
      countriesAllData: state.countriesAllData,
      question: state.question,
      score: state.score,
      totalQuestionsAsked: state.totalQuestionsAsked,
      totalQuestions: state.totalQuestions,
      selectedAnswer: state.selectedAnswer,
      isChecking: state.isChecking,
      setTypeOfQuiz,
      createFirstQuestion,
      selectAnswerToCheck,
      checkAnswer,
      endGame
    }}>
      {props.children}
    </QuizContext.Provider>
  )
};

export default QuizState;
