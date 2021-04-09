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
        allQuestions: null,
        loading: true,
        error: false,
        isReady: false,
        region: action.payload
      }
    case quizTypes.GET_QUIZ_QUESTIONS_SUCCESS:
      return {
        ...state,
        allCountriesData: action.payload.countriesData,
        allQuestions: action.payload.questions,
        loading: false,
        error: false,
        isReady: true
      }
    case quizTypes.GET_QUIZ_QUESTIONS_ERROR: 
      return {
        ...state,
        allCountriesData: null,
        allQuestions: null,
        loading: false,
        error: true,
        isReady: false
      }
    default:
      return state
  }
}

export default quizReducer;