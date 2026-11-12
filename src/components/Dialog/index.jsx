import { IconClose } from '../icons';
import './dialog.style.css'
import { useEffect, useRef } from "react";

export function Dialog({ isOpen, onClose, children }) {
    const dialogRef = useRef(null)
    useEffect(() => {
        if (isOpen) {
            openDialog()
        } else {
            closeDialog()
        }
    }, [isOpen])
    
    useEffect(() => {
        const dialog = dialogRef.current
        dialog?.addEventListener('close', onClose)
        return () => {
            dialog?.removeEventListener('close', onClose)
        }
    }, [onClose])

    const openDialog = () => {
        dialogRef.current.showModal();
    };
    const closeDialog = () => {
        dialogRef.current.close();
    };
    return (
        <>
            <dialog ref={dialogRef}>
                <div className='btn-close-wrapper'>
                    <button
                        autoFocus
                        onClick={onClose}
                        className='btn-close'>
                        <IconClose />
                    </button>
                </div>
                <div>
                    {children}
                </div>
            </dialog >

        </>
    )
}