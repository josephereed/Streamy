import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import history from '../../history';
import StreamForm from './StreamForm';
import Modal from '../Modal';

const StreamCreate = (props) => {
  const onSubmit = (formValues) => {
    props.createStream(formValues);
  };

  const actions = (
    <>
      <button
        className="ui button primary"
        onClick={() => {
          onSubmit();
          history.goBack();
        }}
      >
        Submit
      </button>
      <button className="ui button" onClick={() => history.goBack()}>
        Cancel
      </button>
    </>
  );

  return (
    <div>
      <Modal 
        title='Create a Stream'
        content={<StreamForm onSubmit={onSubmit}
        actions={actions}
         />}
      />
    </div>
  ); 
};

export default connect(null, { createStream })(StreamCreate);
