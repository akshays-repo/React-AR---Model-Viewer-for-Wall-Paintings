// OverlayLoading.js

import React, { CSSProperties, FC } from 'react';

const overlayStyle: CSSProperties  = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex:1000,
  color:'#fff'
};



const OverlayLoading:FC<{isLoading:boolean}> = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div style={overlayStyle}>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
};

export default OverlayLoading;
