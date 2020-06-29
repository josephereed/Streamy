import React from 'react';
import Modal from '../Modal';
import { connect } from 'react-redux';
import history from '../../history';
import { deleteStream } from '../../actions/';

const StreamDelete = ({ deleteStream, match }) => {
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

  return (
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete the stream"
        actions={actions}
      />
  );
};

export default connect(null, { deleteStream })(StreamDelete);
