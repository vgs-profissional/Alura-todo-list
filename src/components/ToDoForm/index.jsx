import { TextInput } from "../TextInput"
import { Button } from "../Button"
import './ToDoForm.estilo.css'
export function Form({ onSubmit, defaultValue }) {
    return (
        <form className="formulario" action={onSubmit} >
            <TextInput
                type="text"
                className='text-input'
                placeholder='Digite o item que deseja adicionar'
                name='description'
                defaultValue={defaultValue}
                required />
            <Button className='btn-salvar'>
                Salvar item
            </Button>
        </form>
    )
}