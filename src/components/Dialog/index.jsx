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
                <div className='div-fechar'>
                    <button
                        autoFocus
                        onClick={closeDialog}
                        className='fechar'>X
                    </button>
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Digite o item que deseja adicionar' />
                    <button
                        className='btn-salvar'>
                        Salvar item
                    </button>
                </div>
            </dialog>
            <button onClick={openDialog}>Show the dialog</button>
        </>
    )
}