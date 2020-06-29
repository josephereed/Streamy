import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({ signIn, signOut, isSignedIn }) => {
  const onAuthChange = isSignedIn => {
    if (isSignedIn) {
      signIn(window.gapi.auth2.getAuthInstance().currentUser.get().getId());
      
    } else {
      signOut();
    }
  };

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '106215676493-h04bp2ougbv9qj3im4qdqae2o6b2bjke.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        let auth = window.gapi.auth2.getAuthInstance();
        onAuthChange(auth.isSignedIn.get());
        auth.isSignedIn.listen(onAuthChange);
      })
    });
    //eslint-disable-next-line
  }, []);

  const RenderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button
          className="ui blue tiny google button"
          onClick={() => {
            window.gapi.auth2.getAuthInstance().signOut();
          }}
        >
          <i className="google icon" />
          Log Out
        </button>
      );
    } else {
      return (
        <button
          className="ui blue tiny google button"
          onClick={() => {
            window.gapi.auth2.getAuthInstance().signIn();
          }}
        >
          <i className="google icon" />
          Log In
        </button>
      );
    }
  };

  return (
      <RenderAuthButton />
  );
};

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
