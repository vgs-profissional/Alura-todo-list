import './dialog.style.css'
import { useRef } from "react";

export function Dialog() {
    // const dialog = document.querySelector("dialog");
    const dialogRef = useRef(null)
    // "Show the dialog" button opens the dialog modally
    const openDialog = () => {
        dialogRef.current.showModal();
        console.log(dialogRef.current);
    };

    // "Close" button closes the dialog
    const closeDialog = () => {
        dialogRef.current.close();
        console.log(dialogRef.current);
    };
    return (
        <>
            <dialog ref={dialogRef}>
                <button autoFocus onClick={closeDialog}>Close</button>
                <p>This modal dialog has a groovy backdrop!</p>
            </dialog>
            <button onClick={openDialog}>Show the dialog</button>
        </>
    )
}