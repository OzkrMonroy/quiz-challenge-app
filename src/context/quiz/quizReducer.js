import quizTypes from "./quizTypes";

const quizReducer = (state, action) => {
  switch (action.type) {
    case quizTypes.SET_QUIZ_TYPE:
      return {
        ...state,
        typeOfQuiz: action.payload
      }
    case quizTypes.SET_REGION:
      return {
        ...state,
        region: action.payload
      }
    case quizTypes.GET_QUIZ_QUESTIONS_INIT:
      return {
        ...state,
        allCountriesData: null,
        question: null,
        loading: true,
        error: false,
        isReady: false,
        region: action.payload
      }
    case quizTypes.GET_QUIZ_QUESTIONS_SUCCESS:
      return {
        ...state,
        allCountriesData: action.payload.countriesData,
        question: action.payload.question,
        loading: false,
        error: false,
        isReady: true
      }
    case quizTypes.GET_QUIZ_QUESTIONS_ERROR: 
      return {
        ...state,
        allCountriesData: null,
        question: null,
        loading: false,
        error: true,
        isReady: false
      }
    case quizTypes.CHECK_ANSWER_INIT:
      return {
        ...state,
        question: null,
      }
    case quizTypes.CHECK_ANSWER_SUCCESS:
      return {
        ...state,
        question: action.payload,
        score: state.score + 1,
        totalAskedQuestions: state.totalAskedQuestions + 1
      }
    case quizTypes.CHECK_ANSWER_ERROR:
      return {
        ...state,
        question: action.payload,
        score: state.score - 1,
        totalAskedQuestions: state.totalAskedQuestions + 1
      }
    case quizTypes.RESET_QUIZ_STATE:
      return {
        ...state,
        typeOfQuiz: null,
        region: null,
        allCountriesData: null,
        question: null,
        score: 0,
        totalAskedQuestions: 0
      }
    default:
      return state
  }
}

export default quizReducer;