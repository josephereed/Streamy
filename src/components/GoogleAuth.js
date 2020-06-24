import React, { useEffect, useState } from 'react';

const GoogleAuth = () => {
  const [state, setState] = useState({ isSignedIn: null });
  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '106215676493-h04bp2ougbv9qj3im4qdqae2o6b2bjke.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          setState({ isSignedIn: auth.isSignedIn.get() });
          auth.isSignedIn.listen((isSignedIn) => {
            setState({ isSignedIn: isSignedIn})
          });
        });
    });
  }, []);

  const RenderAuthButton = () => {
    if (state.isSignedIn === null) {
      return null;
    } else if (state.isSignedIn) {
      return (
        <button
          className="ui red google button"
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
          className="ui blue google button"
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
    <div>
      <RenderAuthButton />
    </div>
  );
};

export default GoogleAuth;
