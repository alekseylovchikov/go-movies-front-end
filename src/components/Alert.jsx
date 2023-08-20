import { useEffect, useState } from 'react';

const Alert = (props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(Boolean(props.alert));
  }, [props.alert]);

  if (!show) return null;

  return (
    <div
      className="flex flex-direction-column"
      style={{
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'rgba(0,0,0,0.2)',
        color: props.className === 'danger' ? 'tomato' : '#23b564',
        border: '1px solid tomato',
        padding: '1.5rem',
        borderRadius: '3px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => setShow(false)}
    >
      <div className="flex flex-direction-column" style={{ background: 'white', padding: '5rem 10rem' }}>
        <h1>{props.alert?.message}</h1>
      </div>
    </div>
  );
};

export default Alert;
