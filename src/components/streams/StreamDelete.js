import React, { useEffect } from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import history from '../../history';
import { deleteStream } from '../../actions/';
import { getStream } from '../../actions/';

const StreamDelete = ({ deleteStream, match, stream, getStream }) => {
  useEffect(() => {
    getStream();
    //eslint-disable-next-line
  }, []);

  const actions = (
    <>
      <button
        className="ui button negative"
        onClick={() => {
          deleteStream(match.params.id);
          history.goBack();
        }}
      >
        Delete
      </button>
      <button className="ui button" onClick={() => history.goBack()}>
        Cancel
      </button>
    </>
  );

  const content = (
    <>
      Are you sure you want to delete the stream{' '}
      <strong>
        <em>"{stream && stream.title}"</em>
      </strong>{' '}
      ?
    </>
  );

  return <Modal title="Delete Stream" content={content} actions={actions} />;
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, deleteStream })(
  StreamDelete
);
