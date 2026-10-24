import { useParams } from "react-router-dom"
import type { ITodo } from "../interfaces/todo.interface"
import TodoItem from "../components/todo/TodoItem"
import useFetchTodo from "../hooks/queries/todo/useFetchTodo"
import UpdateTodo from "../components/todo/UpdateTodo"

const TodoPage = () => {
    const { id } = useParams()
    const { data, error, isLoading } = useFetchTodo(id!)
    const { id: todoId, title, isCompleted, description } = data || ({} as ITodo)

    if (error) return <h3>{error.message}</h3>
    if (isLoading) return <h3>Loading...</h3>

    return (
        <div className="p-2.5">
            <TodoItem id={todoId} title={title} completed={isCompleted} description={description} />
            {data && <UpdateTodo key={data.id} todo={data} />}
        </div>
    )
}

export default TodoPage
