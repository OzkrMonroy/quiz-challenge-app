import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/card/card.component';
import { AppContainer } from './styledComponents/app-container';

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
    <AppContainer>
      <Card/>
    </AppContainer>
  );
}

export default App;
