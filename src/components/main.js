import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Editpage from '../pages/Editpage';
import NewItemForm from '../pages/NewItemForm';
import ShowItem from '../pages/ShowItem';
import Homescreen from '../pages/Homescreen'
import Cart from '../pages/Cart'

let baseUrl = 'https://bromeliad-boutique-backend.herokuapp.com'

const Main = () => { 
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      {/* <Route exact path='/' component={Homepage}></Route> */}
      <Route exact path='/new' component={() => <NewItemForm baseUrl={baseUrl} addItems={Editpage.addItems}/>}></Route>
      <Route exact path='/show/:id' component={ShowItem}></Route>
      <Route exact path='/' component={Homescreen}></Route>
      <Route exact path='/cart' component={Cart}></Route>
      <Route exact path='/edit' component={Editpage}></Route>
    </Switch>
  );
}


export default Main;