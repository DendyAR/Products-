import {
  BrowserRouter as Router, //router atau jalan ke arah mana
  Switch, // cabang antar halaman
  Route,
} from "react-router-dom";
import {Login, Register, ForgotPassword, SplashScreen, NoPageFound} from './pages/Public'
import {Chatlist, CallHistory}  from './pages/Private'
import React from 'react'
import { PrivateRoute, PublicRoute} from "./components";
import { Provider } from 'react-redux'
import configureStore from './Redux/store'
import { PersistGate } from "redux-persist/integration/react";

const {store, persistor} = configureStore()


const AppRouter = () =>{
  return(
    <Router>
      <Switch>
        <PrivateRoute path="/" exact={true} component={()=><Chatlist />} />
        <PrivateRoute path="/call-history" exact={true} component={()=><CallHistory />} />
        <PublicRoute path="/login" restricted ={true} exact={true} component={()=><Login />} />
        <PublicRoute path="/register" restricted ={true} exact={true} component={()=><Register />} />
        <PublicRoute path="/forgot-password" restricted ={true} exact={true} component={()=><ForgotPassword />} />
        <Route path="*" component={NoPageFound} />
      </Switch>
    </Router>
  )
}

export default function App() {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  )
}