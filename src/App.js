import {BrowserRouter as Router, Link, Switch, Route, NavLink} from 'react-router-dom'
import './App.css';

function App() {
  return (
      <Router>
          <div className="App">
            <header>
                <nav>
                    <Link to="/">Start</Link>
                    <NavLink to="/battle">Battle</NavLink>
                    <NavLink to="/gallery">Gallery</NavLink>
                    <NavLink to="/statistics">Statistics</NavLink>
                    <NavLink to="/history">History</NavLink>
                    
                </nav>
            </header>
            <main>
                <Switch>
                    <Route path="/battle"> Tävla</Route>
                    <Route path="/gallery"> Galleri</Route>
                    <Route path="/statistics"> Stats</Route>
                    <Route path="/history"> historik</Route>
                    <Route path="/"> Välkommen</Route>
                </Switch>
            </main>
          </div>
      </Router>
  );
}

export default App;
