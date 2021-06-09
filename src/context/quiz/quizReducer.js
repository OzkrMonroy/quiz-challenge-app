import initialState from "../../utils/initialState";
import quizTypes from "./quizTypes";

const quizReducer = (state, action) => {
  switch (action.type) {
    case quizTypes.SET_TYPE_OF_QUIZ:
      return {
        ...state,
        typeOfQuiz: action.payload
      }
    case quizTypes.CREATE_FIRST_QUESTION_INIT:
      return {
        ...state,
        allCountriesData: null,
        question: null,
        error: false,
        region: action.payload,
        score: 0,
        totalQuestionsAsked: 1,
      }
    case quizTypes.CREATE_FIRST_QUESTION_SUCCESS:
      return {
        ...state,
        allCountriesData: action.payload.countriesData,
        question: action.payload.question,
        error: false,
      }
    case quizTypes.CREATE_FIRST_QUESTION_ERROR: 
      return {
        ...state,
        allCountriesData: null,
        question: null,
        error: true,
      }
    case quizTypes.SELECT_ANSWER:
      return {
        ...state,
        selectedAnswer: action.payload
      }
    case quizTypes.SET_IS_CHECKING_ANSWER:
      return {
        ...state,
        isChecking: true
      }
    case quizTypes.INCREMENT_SCORE: 
      return {
        ...state,
        score: state.score + 1,
      }
    case quizTypes.CREATE_NEW_QUESTION_INIT:
      return {
        ...state,
        question: null,
        isChecking: false
      }
    case quizTypes.CREATE_NEW_QUESTION_SUCCESS:
      return {
        ...state,
        question: action.payload,
        totalQuestionsAsked: state.totalQuestionsAsked + 1
      }
    case quizTypes.RESET_QUIZ_STATE:
      return initialState
    default:
      return state
  }
}

export default quizReducer;