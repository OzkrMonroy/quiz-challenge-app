import { useReducer } from "react";
import axios from 'axios';
import QuizContext from "./quizContext";
import quizReducer from "./quizReducer";
import quizTypes from "./quizTypes";
import disorderArray from "../../utils/disorderArray";

const QuizState = (props) => {

	const initialState = {
		typeOfQuiz: null,
    region: null,
		allCountriesData: null,
		question: null,
    loading: false,
    error: false,
    score: 0,
    totalQuestions: 5,
    totalAskedQuestions: 1,
    selectedAnswer: null,
    isChecking: false
	};

  const [state, dispatch] = useReducer(quizReducer, initialState);

  const setTypeOfQuiz = typeOfQuiz => {
    dispatch({
      type: quizTypes.SET_QUIZ_TYPE,
      payload: typeOfQuiz
    })
  }

  const createAllQuestionsQuiz = async (region, history) => {
    dispatch({
      type: quizTypes.GET_QUIZ_QUESTIONS_INIT,
      payload: region
    })
    try {
      const response = await axios(`https://restcountries.eu/rest/v2/region/${region}`);
      const fullData = await response.data;

      const question = crateOneQuestionByType(fullData);
      dispatch({
        type: quizTypes.GET_QUIZ_QUESTIONS_SUCCESS,
        payload: {
          countriesData: fullData, question
        }
      })
      history.push('/question');
    } catch (error) {
      console.log(error);
      dispatch({
        type: quizTypes.GET_QUIZ_QUESTIONS_ERROR
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
    const fullData = state.allCountriesData;
    const question = crateOneQuestionByType(fullData);
    dispatch({
      type: quizTypes.CHECK_ANSWER_INIT
    })
    setTimeout(() => {
      dispatch({
        type: quizTypes.CREATE_NEW_QUESTION
      })
      if(isCorrect){
        setTimeout(() => {
          dispatch({
            type: quizTypes.CHECK_ANSWER_SUCCESS,
            payload: question
          })
        }, 2000);
      }else {
        setTimeout(() => {
          dispatch({
            type: quizTypes.CHECK_ANSWER_ERROR,
            payload: question
          })
        }, 2000);
      }
    }, 1000);
  }

  const endGame = () => {
    dispatch({
      type: quizTypes.RESET_QUIZ_STATE
    })
  }

  const crateOneQuestionByType = fullData => {
    const quizType = state.typeOfQuiz.toLowerCase();
    const countryOrFlag = quizType === 'capital' ? 'name' : 'flag';
    const nameOrCapital = quizType === 'capital' ? 'capital' : 'name';

    const answerAndQuestion = fullData[Math.floor(Math.random() * fullData.length)];
      const name = answerAndQuestion[`${countryOrFlag}`];
      const capital = answerAndQuestion[`${nameOrCapital}`];
      const posibleAnswers = [];
      let question = {};

      for (let i = 0; i < 3; i++) {
        const answer = fullData[Math.floor(Math.random() * fullData.length)];
        const randomCapital = answer[`${nameOrCapital}`];
        posibleAnswers.push(randomCapital)
      }
      posibleAnswers.push(capital)
      const disorderPosibleAnswers = disorderArray(posibleAnswers);
      question = { name, capital, posibleAnswers: disorderPosibleAnswers}

      return question
  }

	return (
    <QuizContext.Provider value={{
      typeOfQuiz: state.typeOfQuiz,
      countriesAllData: state.countriesAllData,
      question: state.question,
      score: state.score,
      totalAskedQuestions: state.totalAskedQuestions,
      totalQuestions: state.totalQuestions,
      selectedAnswer: state.selectedAnswer,
      isChecking: state.isChecking,
      setTypeOfQuiz,
      createAllQuestionsQuiz,
      selectAnswerToCheck,
      checkAnswer,
      endGame
    }}>
      {props.children}
    </QuizContext.Provider>
  )
};

export default QuizState;
