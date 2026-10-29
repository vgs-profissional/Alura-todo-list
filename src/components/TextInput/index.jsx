import './TextInput.estilo.css'

export function TextInput({ ...props }) {
    return <input
        {...props}
        type="text"
        className='text-input'
        placeholder='Digite o item que deseja adicionar' />
}