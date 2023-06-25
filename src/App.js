import {Switch, Route} from 'react-router-dom'

import './App.css'

import MeetUp from './components/Meetup'
import Register from './components/Register'
import NotFound from './components/NotFound'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={MeetUp} />
    <Route exact path="/register" component={Register} />
    <Route component={NotFound} />
  </Switch>
)
export default App
