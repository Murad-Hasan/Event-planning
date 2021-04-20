import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import LogIn from './Components/LogIn/LogIn';
import NoMatch from './Components/NoMatch/NoMatch';
import Home from './Components/Home/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard/DashBoard';
import GetService from './Components/DashBoard/GetService/GetService';
import BookingList from './Components/DashBoard/BookingList/BookingList';
import Review from './Components/DashBoard/Review/Review';
import OrderList from './Components/DashBoard/OrderList/OrderList';
import AddService from './Components/DashBoard/AddService/AddService';
import MakeAdmin from './Components/DashBoard/MakeAdmin/MakeAdmin';
import ManageService from './Components/DashBoard/ManageService/ManageService';
import PrivateRouter from './Components/PrivateRouter/PrivateRouter'
import AboutUsPage from './Components/AboutUsPage/AboutUsPage';
import ContactPage from './Components/ContactPage/ContactPage'

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <LogIn/>
          </Route>
          <Route path="/aboutUs">
            <AboutUsPage/>
          </Route>
          <Route path="/contact">
            <ContactPage/>
          </Route>
          <PrivateRouter path="/dashBoard">
            <DashBoard/>
          </PrivateRouter>
          <PrivateRouter path="/getService/:id">
            <GetService/>
          </PrivateRouter>
          <PrivateRouter path="/getService">
            <GetService/>
          </PrivateRouter>
          <PrivateRouter path="/booking">
            <BookingList/>
          </PrivateRouter>
          <PrivateRouter path="/review">
            <Review/>
          </PrivateRouter>
          <PrivateRouter path="/admin/orderList">
            <OrderList/>
          </PrivateRouter>
          <PrivateRouter path="/admin/addService">
            <AddService/>
          </PrivateRouter>
          <PrivateRouter path="/admin/makeAdmin">
            <MakeAdmin/>
          </PrivateRouter>
          <PrivateRouter path="/admin/manageService">
            <ManageService/>
          </PrivateRouter>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
    </Router>
  </UserContext.Provider> 
  );
}

export default App;
