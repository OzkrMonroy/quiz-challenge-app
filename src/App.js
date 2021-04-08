import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import axios from 'axios';
import { AppContainer } from './styledComponents/app-container';
import Home from './components/pages/home/home.component';
import QuizState from './context/quiz/quizState';
import SelectRegion from './components/pages/select-region/select-region.component';

function App() {
  const [allCountries, setAllCountries] = useState(null);

  useEffect(() => {
    const getAllCountriesData = async () => {
      try {
        const response = await axios('https://restcountries.eu/rest/v2/region/europe');
        const data = await response.data;
        setAllCountries(data)

        const allQuestions = []

        for (let i = 0; i < 20; i++) {
          const answer = data[Math.floor(Math.random() * data.length)];
          const { name, capital } = answer;
          const posibleAnswers = [];
          const question = [];

          for (let i = 0; i < 3; i++) {
            const answer = data[Math.floor(Math.random() * data.length)];
            const { capital } = answer;
            posibleAnswers.push(capital)
          }
          posibleAnswers.push(capital)
          const questionData = {answer : { name, capital}, posibleAnswers}
          question.push(questionData)
          allQuestions.push(question)
        }
        console.log(allQuestions);
      } catch (error) {
        console.log(error);
      }
    }
    getAllCountriesData()
  }, [])

  return (
    <QuizState>
      <Router>
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/select-region" component={SelectRegion}/>
          </Switch>
        </AppContainer>
      </Router>
    </QuizState>
  );
}

export default App;
