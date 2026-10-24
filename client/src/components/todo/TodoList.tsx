import type { ITodo } from "../../interfaces/todo.interface"
import TodoItem from "./TodoItem"

interface TodoListProps {
    todos: ITodo[] | undefined
}

const TodoList = ({ todos }: TodoListProps) => {
    return (
        <div className="p-1.25 flex flex-col gap-2">
            {todos?.map(({ id, title, isCompleted, description }) => (
                <TodoItem key={id} id={id} title={title} completed={isCompleted} description={description} />
            ))}
        </div>
    )
}

export default TodoList