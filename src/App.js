import React from 'react';
import { Router, Route, Redirect } from 'react-router-dom';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';
import './App.css';
import history from './history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header />
        <Route exact path="/">
          {<Redirect to="/streams" />}
        </Route>
        <Route path="/streams" component={StreamList} />
        <Route exact path="/stream/:id" component={StreamShow} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
        <Route path="/streams/delete/:id" component={StreamDelete} />
      </Router>
    </div>
  );
};

export default App;
