import './empty-state-style.css'
export function EmptyState() {
    return (
        <>
            <div className="empty-state">
                <p>Ainda não tem tarefas cadastradas, adicione para começar!</p>
                <img src="../public/transparente.svg" alt="Imagem de folha em branco" />
            </div>
        </>
    )
}