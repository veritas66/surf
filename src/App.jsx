import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable'; // The default

import irma from './irma.gif';
import play from './play.png';
import poem from './1.png';

import './App.css';

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSecondModal, setShowSecondModal] = useState(false);

  const modalRef = useRef(null);
  const secondModalRef = useRef(null);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleP1Click = () => {
    setShowSecondModal(true);
  };

  const handleP2Click = () => {
    window.location.href = 'https://github.com/veritas66/victoria/tree/main';
  }


  return (
    <div
      style={{
        backgroundImage: `url(${irma})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        top: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '98vw',
        height: '97vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        borderRadius: '4px'
      }}
    >
      <a
        style={{
          textDecoration: 'none',
          color: 'white',
          fontSize: '24px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          cursor: 'pointer',
        }}
        onClick={handlePlayClick}
      >
        Play
      </a>
      {showModal && (
        <div
          ref={modalRef}
          style={{
            position: 'fixed',
            height: '70vh',
            width: '70vh',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            backgroundImage: `url(${play})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '4px'
          }}
        >
          <div
            id="p1"
            style={{
              width: '38px',
              height: '56px',
              position: 'fixed',
              left: '56%',
              top: '42%',
            }}
            onClick={handleP1Click}
          ></div>
          <div
            id="p2"
            style={{
              width: '43px',
              height: '76px',
              position: 'fixed',
              left: '79%',
              top: '47%',
            }}
            onClick={handleP2Click}
          ></div>
        </div>
      )}
      {showSecondModal && (
        <img
          src={poem}
          ref={secondModalRef}
          style={{
            position: 'fixed',
            height: '40vh',
            width: 'auto',
            top: '50%',
            left: '26%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            borderRadius: '4px',
          }}
        >
        </img>
      )}
    </div >
  );
};

export default App;