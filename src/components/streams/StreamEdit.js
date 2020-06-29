import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';
import Modal from '../Modal';

const StreamEdit = ({ match, stream, getStream, editStream }) => {
  const onSubmit = (formValues) => {
    editStream(match.params.id, formValues);
  };

  useEffect(() => {
    getStream(match.params.id);
    //eslint-disable-next-line
  }, [match.params.id]);

  if (!stream) {
    return <div>Loading...</div>;
  } else {
    const { title, description } = stream;
    return (
      <div>
        <Modal title="Edit Stream">
          <StreamForm
            onSubmit={onSubmit}
            initialValues={{ title, description }}
          />
        </Modal>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit);
