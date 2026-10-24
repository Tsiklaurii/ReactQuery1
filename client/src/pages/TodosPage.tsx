import { Fragment } from "react/jsx-runtime"
import TodoList from "../components/todo/TodoList"
import useFetchTodos from "../hooks/queries/todo/useFetchTodos"
import CreateTodo from "../components/todo/CreateTodo"

const TodosPage = () => {
    const { data: todos, error, isLoading } = useFetchTodos()

    if (error) return <h3>{error.message}</h3>
    if (isLoading) return <h3>Loading...</h3>

    return (
        <Fragment>
            <TodoList todos={todos} />
            <CreateTodo />
        </Fragment>
    )
}

export default TodosPage