import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

const Modal = ({ title, content, actions, children }) => {
  return ReactDOM.createPortal(
    <div className='ui dimmer modals visible active' onClick={() => history.goBack()}>
      <div className="ui tiny modal visible active" onClick={(e) => e.stopPropagation()}>
        <div className="header">{title}</div>
        <div className="content">
          {content && <p>{content}</p>}
          {children && children}
        </div>
        {actions && <div className="actions">
          {actions}
        </div>}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;