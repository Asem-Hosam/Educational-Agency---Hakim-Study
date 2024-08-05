'use client'
import React, { useRef, useState, useEffect } from 'react';
import './dialog.css';

export default function DialogSheet({ children, dialogTrigger }) {
    const [direction, setDirection] = useState("rtl");

    useEffect(() => {
        const dir = document.documentElement.getAttribute('dir') || 'ltr';
        setDirection(dir);
    }, []);

    const dialogRef = useRef(null);

    const showDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.showModal();
            dialogRef.current.classList.add('show');
            document.body.classList.add('no-scroll');
        }
    };

    const hideDialog = () => {
        if (dialogRef.current) {
            dialogRef.current.classList.remove('show');
            document.body.classList.remove('no-scroll');
            setTimeout(() => {
                dialogRef.current.close();
            }, 100); // match with the transition duration
        }
    };

    const onOverlayClick = (e) => {
        if (e.target === dialogRef.current) {
            hideDialog();
        }
    };

    return (
        <>
            <div className="" onClick={showDialog}>
                {dialogTrigger}
            </div>
            <dialog className="dialog-sheet" ref={dialogRef} onClick={onOverlayClick}>
                {children}
            </dialog>
        </>
    );
}
