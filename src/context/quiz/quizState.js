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
		allQuestions: null,
    loading: false,
    error: false,
    isReady: false
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
      type: quizTypes.GET_QUIZ_QUESTIONS,
      payload: region
    })
    try {
      const response = await axios(`https://restcountries.eu/rest/v2/region/${region}`);
      const fullData = await response.data;

      const allQuestions = []

      for (let i = 0; i < 20; i++) {
        const answerAndQuestion = fullData[Math.floor(Math.random() * fullData.length)];
        const { name, capital } = answerAndQuestion;
        const posibleAnswers = [];
        const question = [];

        for (let i = 0; i < 3; i++) {
          const answer = fullData[Math.floor(Math.random() * fullData.length)];
          const randomCapital = answer.capital;
          posibleAnswers.push(randomCapital)
        }
        posibleAnswers.push(capital)
        const disorderPosibleAnswers = disorderArray(posibleAnswers);
        const questionData = {answerData : { name, capital}, posibleAnswers: disorderPosibleAnswers}
        question.push(questionData)
        allQuestions.push(questionData)
      }
      console.log(fullData);
      console.log(allQuestions);
      dispatch({
        type: quizTypes.GET_QUIZ_QUESTIONS_SUCCESS,
        payload: {
          countriesData: fullData, questions: allQuestions
        }
      })
      history.push('/question/1')
    } catch (error) {
      console.log(error);
      dispatch({
        type: quizTypes.GET_QUIZ_QUESTIONS_ERROR
      })
    }
  }

	return (
    <QuizContext.Provider value={{
      typeOfQuiz: state.typeOfQuiz,
      countriesAllData: state.countriesAllData,
      allQuestions: state.allQuestions,
      isReady: state.isReady,
      setTypeOfQuiz,
      createAllQuestionsQuiz
    }}>
      {props.children}
    </QuizContext.Provider>
  )
};

export default QuizState;
