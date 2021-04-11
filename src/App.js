import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { AppContainer } from './styledComponents/app-container';
import Home from './components/pages/home/home.component';
import QuizState from './context/quiz/quizState';
import SelectRegion from './components/pages/select-region/select-region.component';
import QuestionPage from './components/pages/question/question.component';
import ResultsPage from './components/pages/results/results.component';

function App() {

  return (
    <QuizState>
      <Router>
        <AppContainer>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/select-region" component={SelectRegion}/>
            <Route exact path="/question" component={QuestionPage}/>
            <Route exact path="/results" component={ResultsPage}/>
          </Switch>
        </AppContainer>
      </Router>
    </QuizState>
  );
}

export default App;
