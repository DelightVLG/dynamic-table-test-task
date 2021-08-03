import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { NavBar } from './components/NavBar/NavBar';
import { DynamicTable } from './components/DynamicTable/DynamicTable';
import { VideoFrame } from './components/VideoFrame/VideoFrame';
import './App.sass';

function App() {

  return (
    <div className="App">
        <Header />
        <NavBar />
        <Switch>
            <Route component={DynamicTable} exact path={'/table'} />
            <Route component={VideoFrame} path={'/video'} />
        </Switch>

    </div>
  );
}

export default App;
