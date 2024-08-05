"use client"
import React, { useRef } from 'react';
import './bottomsheet.css';

export default function BottomSheet() {
    const bottomSheetRef = useRef(null);
    const sheetOverlayRef = useRef(null);

    const showBottomSheet = () => {
        if (bottomSheetRef.current && sheetOverlayRef.current) {
            bottomSheetRef.current.classList.add('show');
            sheetOverlayRef.current.classList.add('show');
            document.body.classList.add('no-scroll');
        }
    };

    const hideBottomSheet = () => {
        if (bottomSheetRef.current && sheetOverlayRef.current) {
            bottomSheetRef.current.classList.remove('show');
            sheetOverlayRef.current.classList.remove('show');
            document.body.classList.remove('no-scroll');
        }
    };

    return (
        <>
            <button className="show-modal" onClick={showBottomSheet}>
                Show Bottom Sheet
            </button>
            <div className="sheet-overlay" ref={sheetOverlayRef} onClick={hideBottomSheet}></div>
            <div className="bottom-sheet" ref={bottomSheetRef}>
                <div className="content">
                    <div className="header">
                        <div className="drag-icon"></div>
                    </div>
                    <div className="body">
                        <h2>Bottom Sheet Modal</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat quae facere, quaerat deleniti, voluptates optio ipsam ipsum beatae, maxime quis ea quasi minima numquam. Minima accusamus reiciendis, impedit blanditiis nulla quia? Odio deleniti commodi id nesciunt voluptas cumque odit, vel molestias ratione sit consectetur inventore error ullam magni labore voluptate doloribus sed similique. Delectus non pariatur eligendi eos voluptatum provident eveniet consequuntur. Laboriosam, nesciunt reiciendis libero sunt adipisci numquam voluptas ullam, iure voluptates soluta mollitia quam voluptatem? Nemo, ipsum magnam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eligendi commodi tenetur est beatae cupiditate incidunt aspernatur asperiores repudiandae? Odit, nulla modi ducimus assumenda ad voluptatem explicabo laudantium est unde ea similique excepturi fugiat nisi facere ab pariatur libero eius aperiam, non accusantium, asperiores optio. Accusantium, inventore in. Quaerat exercitationem aut, alias dolorem facere atque sint quo quasi vitae sed corrupti perferendis laborum eligendi repudiandae esse autem doloribus sapiente deleniti.</p>
                    </div>
                </div>
            </div>
        </>
    );
}
