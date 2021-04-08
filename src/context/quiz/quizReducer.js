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
    default:
      return state
  }
}

export default quizReducer;