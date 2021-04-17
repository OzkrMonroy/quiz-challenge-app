import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContainer, CreatedBy } from './App.styles';
import Home from './pages/home/home.component';
import QuizState from './context/quiz/quizState';
import SelectRegion from './pages/select-region/select-region.component';
import QuestionPage from './pages/question/question.component';
import ResultsPage from './pages/results/results.component';
import { homeRoute, questionRoute, resultsRoute, selectRegionRoute } from './utils/routes';

function App() {

  return (
    <QuizState>
      <Router>
        <AppContainer>
          <Switch>
            <Route exact path={`${homeRoute}`} component={Home}/>
            <Route exact path={`${selectRegionRoute}`} component={SelectRegion}/>
            <Route exact path={`${questionRoute}`} component={QuestionPage}/>
            <Route exact path={`${resultsRoute}`} component={ResultsPage}/>
          </Switch>
          <CreatedBy>Created by <span>Oscar Monroy</span> - devChallenges.io</CreatedBy>
        </AppContainer>
      </Router>
    </QuizState>
  );
}

export default App;
