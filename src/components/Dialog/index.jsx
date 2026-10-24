import { IconClose } from '../icons';
import './dialog.style.css'
import { useEffect, useRef } from "react";

export function Dialog({ isOpen, onClose, children }) {
    // const dialog = document.querySelector("dialog");
    const dialogRef = useRef(null)
    useEffect(() => {
        if (isOpen) {
            console.log('Deve abrir o modal?', isOpen);
            openDialog()
        } else {
            closeDialog()
            console.log('Deve abrir o modal?', isOpen);
        }
    }, [isOpen])

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
                    <input
                        type='text'
                        placeholder='Digite o item que deseja adicionar' />
                    {children}
                </div>
            </dialog >

        </>
    )
}