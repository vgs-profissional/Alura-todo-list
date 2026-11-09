import { use, useState } from "react"
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
  const { todos, addTodo } = use(TodoContext)

  const [showDialog, setShowDialog] = useState(false)

  const toggleDialog = () => {
    setShowDialog(!showDialog)
  }

  const handleFormSubmit = (FormData) => {
    addTodo(FormData)
    toggleDialog()
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
            <Dialog isOpen={showDialog} onClose={toggleDialog} >
              <Form onSubmit={handleFormSubmit} />
            </Dialog>
            <FabButton onClick={toggleDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main >
  )
}

export default App
