import { Route, Switch } from "react-router"

import About from "./pages/About"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Gallery from "./pages/Gallery"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Services from "./pages/Services"

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/gallery' component={Gallery} />
        <Route exact path='/collection/:slug' component={Collection} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </div>
  )
}

export default Routes
