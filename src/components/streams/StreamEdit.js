import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStream, editStream } from '../../actions/index';
import StreamForm from './StreamForm';

const StreamEdit = ({ match, stream, getStream, editStream }) => {

  const onSubmit = (formValues) => {
    editStream(match.params.id, formValues);
  }

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
        <h3>Edit Stream</h3>
        <StreamForm 
          onSubmit={onSubmit} 
          initialValues={{ title, description }}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit);
