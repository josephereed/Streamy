import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StreamList from './components/streams/StreamList';
import StreamShow from './components/streams/StreamShow';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import Header from './components/Header';

const App = () => {
  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Route exact path='/' component={StreamList} />
        <Route path='/streams/show/:id' component={StreamShow} />
        <Route path='/streams/new' component={StreamCreate} />
        <Route path='/streams/edit/:id' component={StreamEdit} />
        <Route path='/streams/delete/:id' component={StreamDelete} />
      </Router>
    </div>
  )
}

export default App
