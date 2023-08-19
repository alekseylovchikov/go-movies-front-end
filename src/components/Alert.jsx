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
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        color: 'tomato',
        border: '3px solid tomato',
        padding: '2rem',
        borderRadius: '3px',
      }}
    >
      {props.alert?.message}
      <button
        className="link link-btn"
        type="button"
        onClick={() => {
          setShow(false);
        }}
      >
        close
      </button>
    </div>
  );
};

export default Alert;
