
 
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route,  NavLink  } from 'react-router-dom';
// The Router (our alias for BrowserRouter) component
//The Route component is in charge of saying: "when the url matches this specified path, render this specified component".

import Login from './Login.js'
import About from './About.js'
import Home from './Home.js'
import Navbar from './Navbar.js'

 
// const Home = () => {
//   return (
//     <div>
//       <h1>Home!</h1>
//     </div>
//   );
// };


// const About = () => {
//   return (
//     <div>
//       <h1>This is my about component!</h1>
//     </div>
//   );
// };
 
// const Login = () => {
//   return (
//     <div>
//       <form>
//         <div>
//           <input type="text" name="username" placeholder="Username" />
//           <label htmlFor="username">Username</label>
//         </div>
//         <div>
//           <input type="password" name="password" placeholder="Password" />
//           <label htmlFor="password">Password</label>
//         </div>
//         <input type="submit" value="Login" />
//       </form>
//     </div>
//   );
// };


ReactDOM.render((
  <Router>
    <React.Fragment>
      {/* <Route path="/" render={Home} />
      <Route path="/about" render={About} />
      <Route exact path="/login" render={Login} /> */}
      
      <Navbar />
      <Route path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/login" component={Login} />

    </React.Fragment>
</Router>),
  document.getElementById('root')
);