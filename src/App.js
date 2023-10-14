import "./App.css"
import Home from "./Components/pages/Home"
import About from "./Components/About/About"
import Gallery from "./Components/gallery/Gallery"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Contact from "./Components/Contact/Contact"
import Login from "./Components/login/Login"
import Register from "./Components/login/Register"
import Dashb from "./Components/Dashboard/Dashboard"
import Book from "./Components/Dashboard/Book"
import Rent from "./Components/Dashboard/Rent"
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/gallery' exact component={Gallery} />
          <Route path='/contact' component={Contact} />
          <Route path='/sign-in' component={Login} />
          <Route path='/Register' component={Register} />
          <Route path='/Dashboard' component={Dashb} />
          <Route path='/Book' component={Book} />
          <Route path='/Rent' component={Rent} />
        </Switch>
      </Router>
    </>
  )
}

export default App
