import {BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom'
import './App.css';
import Start from './components/start/Start'
import Battle from './components/battle/Battle'
import Gallery from './components/gallery/Gallery'
import Statistics from './components/statistics/Statistics'
import History from './components/history/History'
import ErrorBoundry from './components/error/ErrorBoundry'

function App() {

  return (
      <Router>
          <div className="App">
            <header>
                <nav>
                    <NavLink to="/start">Hamster Wars</NavLink>
                    <NavLink to="/battle">Battle</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/history">History</NavLink>
                </nav>
            </header>
            <main>
                <Switch>
                        <Route path="/battle">
                            <ErrorBoundry> 
                                <Battle/>
                            </ErrorBoundry>
                        </Route>
                        <Route path="/gallery">
                            <ErrorBoundry> 
                                <Gallery/>
                            </ErrorBoundry>
                        </Route>
                        <Route path="/statistics"> 
                            <ErrorBoundry>
                                <Statistics />
                            </ErrorBoundry>
                        </Route>
                        <Route path="/history"> 
                            <ErrorBoundry>
                                <History />
                            </ErrorBoundry>
                        </Route>
                        <Route path="/"> 
                            <ErrorBoundry>
                                <Start />
                            </ErrorBoundry>
                        </Route>
                </Switch>
            </main>
          </div>
      </Router>
  );
}

export default App;
