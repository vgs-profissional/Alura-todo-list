import { use } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import { Dialog } from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { Form } from "./components/ToDoForm"
import { TodoGroup } from "./components/TodoGroup"
import TodoContext from "./components/TodoProvider/TodoContext"


function App() {
  const { todos, addTodo, showDialog, openFormTodoDialog, closeFormTodoDialog, selectedTodo } = use(TodoContext)

  const handleFormSubmit = (FormData) => {
    addTodo(FormData)
    openFormTodoDialog()
  }

  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup
            heading={'Incompletos'}
            item={todos.filter(t => !t.completed)}
          />
          <TodoGroup
            heading={'Completos'}
            item={todos.filter(t => t.completed)}
          />
          <Footer>
            <Dialog isOpen={showDialog} onClose={closeFormTodoDialog} >
              <Form
                onSubmit={handleFormSubmit} 
                defaultValue={selectedTodo?.description}
              />
            </Dialog>
            <FabButton onClick={openFormTodoDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main >
  )
}

export default App
