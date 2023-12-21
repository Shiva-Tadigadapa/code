import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Sidebar';
import Form from './Form';
import OtherComponent from './OtherComponent'; // Import other components as needed

function App() {
  const gradient = `background: rgb(87,25,43);
   background: linear-gradient(0deg, rgba(87,25,43,1) 0%, rgba(15,21,73,0.9332107843137255) 100%, rgba(75,38,72,1) 100%);`;

  return (
    <Router>
      <div
        className=" px-4   gap-16   h-[100vh] flex items-center"
        style={{
          background: `linear-gradient(0deg, rgba(87,25,43,1) 0%, rgba(15,21,73,0.9332107843137255) 100%, rgba(75,38,72,1) 100%)`,
        }}
      >
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Form} />
          <Route path="/other" component={OtherComponent} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;