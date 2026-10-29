import { TextInput } from "../TextInput"
import { Button } from "../Button"
import './ToDoForm.estilo.css'
export function Form({ onSubmit }) {
    return (
        <form className="formulario" action={onSubmit} >
            <TextInput required />
            <Button className='btn-salvar'>
                Salvar item
            </Button>
        </form>
    )
}