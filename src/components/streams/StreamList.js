import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getStreams } from '../../actions';

const StreamList = ({ getStreams, streams, currentUserId, isSignedIn }) => {
  const renderCreate = () => {
    return (
      isSignedIn && (
        <Link to="/streams/new">
          <button className="ui button primary">CREATE</button>
        </Link>
      )
    );
  };

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
        <Link to={`/streams/edit/${stream.id}`}>
          <button className="ui button">EDIT</button>
        </Link>
        <Link to={`/streams/delete/${stream.id}`}>
          <button className="ui button negative">DELETE</button>
        </Link>
        </div>
      );
    }
  };

  const renderList = () => {
    return streams.map((stream) => {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera"></i>
          <div className="content">
            <strong>{stream.title}</strong>
            <div className="description">{stream.description}</div>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    getStreams();
    //eslint-disable-next-line
  }, []);

  return (
    <div>
      <h2>Streams</h2>
      <div className="ui celled list">{renderList()}</div>
      {/* eslint-disable-next-line */}
      <div className="ui menu" style={{WebkitBoxShadow: 'none', border: 'none'}}>
        <div className="floated right item" style={{ textAlign: 'right' }}>
          {renderCreate()}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { getStreams })(StreamList);
