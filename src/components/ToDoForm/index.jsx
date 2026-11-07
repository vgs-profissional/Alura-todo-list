import { TextInput } from "../TextInput"
import { Button } from "../Button"
import './ToDoForm.estilo.css'
export function Form({ onSubmit }) {
    return (
        <form className="formulario" action={onSubmit} >
            <TextInput
                type="text"
                className='text-input'
                placeholder='Digite o item que deseja adicionar'
                name='description'
                required />
            <Button className='btn-salvar'>
                Salvar item
            </Button>
        </form>
    )
}