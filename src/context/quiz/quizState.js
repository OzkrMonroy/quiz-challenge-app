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
    isReady: false,
    score: 0,
    totalQuestions: 5,
    totalAskedQuestions: 1,
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

      const question = createOneQuestion(fullData);
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

  const checkAnswer = isCorrect => {
    dispatch({
      type: quizTypes.CHECK_ANSWER_INIT
    })
    const fullData = state.allCountriesData;
    const question = createOneQuestion(fullData);
    if(isCorrect){
      setTimeout(() => {
        dispatch({
          type: quizTypes.CHECK_ANSWER_SUCCESS,
          payload: question
        })
        console.log(question);
      }, 200);
    }else {
      setTimeout(() => {
        dispatch({
          type: quizTypes.CHECK_ANSWER_ERROR,
          payload: question
        })
      }, 200);
    }
  }

  const endGame = () => {
    dispatch({
      type: quizTypes.RESET_QUIZ_STATE
    })
  }


  const createOneQuestion = fullData => {
    const answerAndQuestion = fullData[Math.floor(Math.random() * fullData.length)];
      const { name, capital } = answerAndQuestion;
      const posibleAnswers = [];
      let question = {};

      for (let i = 0; i < 3; i++) {
        const answer = fullData[Math.floor(Math.random() * fullData.length)];
        const randomCapital = answer.capital;
        posibleAnswers.push(randomCapital)
      }
      posibleAnswers.push(capital)
      const disorderPosibleAnswers = disorderArray(posibleAnswers);
      question = { name, capital, posibleAnswers: disorderPosibleAnswers}

      console.log(question);

      return question
  }

	return (
    <QuizContext.Provider value={{
      typeOfQuiz: state.typeOfQuiz,
      countriesAllData: state.countriesAllData,
      question: state.question,
      isReady: state.isReady,
      score: state.score,
      totalAskedQuestions: state.totalAskedQuestions,
      totalQuestions: state.totalQuestions,
      setTypeOfQuiz,
      createAllQuestionsQuiz,
      checkAnswer,
      endGame
    }}>
      {props.children}
    </QuizContext.Provider>
  )
};

export default QuizState;
