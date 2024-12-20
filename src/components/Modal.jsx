import React from 'react';
import ReactDOM from 'react-dom';

function Modal( {children, onClose} ){
    
    const overlay = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const modal = {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "400px",
    };

    return ReactDOM.createPortal(
        <div style={overlay}>
            <div style={modal}>
                {children}
                <button className='btn btn-primary' onClick={onClose}>Cerrar</button>
            </div>
        </div>,
        document.getElementById('modal-root')
    )
}

export default Modal;
