import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Menu from './Menu';

// Goal 000: Create GitHub repo
// Goal 001: Create Header component that will display logo, site navigation, and header image
// Goal 002: Integrate react-router

const primary = '#FF5733';

const initialMenu = [
  {
    id: 0,
    name: 'Egg Sandwiches - $5.75 | w/meat $7.75',
    desc: 'Your Choice of Bread & Cheese',
    open: true,
  },
  {
    id: 1,
    name: 'Spinach Omelet - $10',
    desc: 'w/ Cheddar Cheese, Toasted English Muffin',
    open: false,
  },
  {
    id: 2,
    name: 'Ham & Cheddar Omelet - $10',
    desc: 'Toasted English Muffin',
    open: true,
  },
  {
    id: 3,
    name: 'Chorizo Burrito - $9.50',
    desc: 'Scrambled Eggs, Salsa, Caramelized Onions, Avocado, Smoked Pepperjack Cheese',
    open: false,
  }
]

const App = () => {
  return (
  <>
      <Header/>
      <Router>
        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route path="/menu" component={Menu}/>
        </Switch>
     </Router>
  </>
  );


}
/*
const Menu = ({menu}) => 
  menu.map(item => {
    return(
    <>
    <ItemStylized 
    key={item.id} 
    item={item}
    />
    <br/>
    <br/>
    </>
  )});

const Item = ({className, item}) => (
    <>
    <span className={className}>{item.name}</span>
    <br/>
    <span>{item.desc}</span>
    </>
  );

const Box = styled.div`
  border: 2px solid black;
  margin: 1em;

  padding: 1em;
  background: white;
`;

const ItemStylized = styled(Item)`
  color:${primary};
  font-size:1.5em;
  font-weight: 500;
`;

const Info = ({className}) => {
  const checkIfOpen = () => {
    let thisDate = new Date();
    if (thisDate.getHours() >= 9 && thisDate.getHours() <= 19)
    return 'OPEN';
    else return 'CLOSED';
  };

  const [status, setStatus] = React.useState(checkIfOpen());

  return (
  <>
  <Box>
  
    <Status status={status}/>
  <span>Hours: Monday - Sunday, 9AM - 8PM</span>
  <br/>
  <span>Call <strong>860-429-4900</strong> to place an order.</span>
  <br/>
  </Box>
  <Box>
  <span>We will take payment via credit card over the phone and do curb side pickup. Call when you arrive. Tell us the make, model and color of your car and we will bring your order out to you..</span>
  </Box>
  </>
  );
};

const GetStatus = ({className, status}) => {
  return (
    <>
    <span className={className}>{status}</span>
    <br/>
    </>
  );
};

const Status = styled(GetStatus)`
color:${props => (props.status === 'OPEN' ? '#27AE60' : primary)};
font-size: 1.5em;
font-weight: 500;
`;

*/

export default App;
