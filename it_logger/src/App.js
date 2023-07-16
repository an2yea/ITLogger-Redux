import React, {Fragment, useEffect} from 'react'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import SearchBar from './Components/layout/SearchBar';
const App = () => {
  // Initialise all materialise UI components in a single command instead of separate
  useEffect(() => {
    M.AutoInit();
  })

  return (
    <Fragment>
    <SearchBar /> 
    </Fragment>
  )
}

export default App;
