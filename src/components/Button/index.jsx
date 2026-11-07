import './Button.estilo.css'

export function Button({ children, ...rest }) {
    return <button {...rest}>{children}</button>
}