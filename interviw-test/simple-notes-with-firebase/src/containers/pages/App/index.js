import './App.css';
import { BrowserRouter as Router , Route } from "react-router-dom"
import Dhasboard from '../Dhasboard';
import Login from '../Login';
import Register from '../Register';
import { Provider } from "react-redux"
import {store} from "../../../config/redux"



// store untuk membuat state menjadi global 


function App() {
  return (
    <Provider store={store}>
      <Router>  
        <Route path ="/" exact component={Dhasboard} /> 
        <Route path ="/login" component={Login} />
        <Route path ="/register" component={Register} />
      </Router>
    </Provider>
    

  );
}

export default App;
