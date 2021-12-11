const createOneQuestionByType = (data, typeOfQuiz) => {
  const quizType = typeOfQuiz.toLowerCase();
  let countries = [...data];
  const countryOrFlag = quizType === 'capital' ? 'name' : 'flags';
  const nameOrCapital = quizType === 'capital' ? 'capital' : 'name';

  const randomIndex = Math.floor(Math.random() * countries.length)
  const answerAndQuestion = countries[randomIndex];
  countries.splice(randomIndex, 1)

  const name = answerAndQuestion[`${countryOrFlag}`].common;
  const capital = answerAndQuestion[`${nameOrCapital}`][0];
  console.log('Capital selected', capital, name);
  const inputName = capital.replace(' ', '');
  let question = {};
  const disorderPosibleAnswers = createPosibleAnswers(countries, capital, nameOrCapital);
  question = { content: name, answer: capital, inputName , posibleAnswers: disorderPosibleAnswers}

  return question
}

const createPosibleAnswers = (countriesData, capitalRequired, objProperty) => {
  const posibleAnswers = [];

  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * countriesData.length);
    const answer = countriesData[randomIndex];
    countriesData.splice(randomIndex, 1)
    const randomCapital = answer[`${objProperty}`];
    posibleAnswers.push(randomCapital[0])
  }
  posibleAnswers.push(capitalRequired);
  const disorderPosibleAnswers = disorderArray(posibleAnswers);

  return disorderPosibleAnswers;
}

const disorderArray = array => {
  const disorderArray = array.sort((a, b) => Math.random()-0.5)

  return [...disorderArray]
}

export default createOneQuestionByType;