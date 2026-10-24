import { useNavigate } from "react-router-dom"
import useDeleteTodo from "../../hooks/mutations/todo/useDeleteTodo"

interface TodoItemProps {
    id: number
    title: string
    description: string
    completed: boolean
}

const TodoItem = ({ id, title, description, completed }: TodoItemProps) => {
    const navigate = useNavigate()
    const { mutate } = useDeleteTodo()

    const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, id: number) => {
        e.stopPropagation()
        mutate(id)
    }

    return (
        <div onClick={() => navigate(`/todos/${id}`)} key={id} className="border-gray-400 border cursor-pointer p-2.5 rounded-2xl flex justify-between items-center">
            <div>
                <h3>{title}</h3>
                <h3 className="text-red-500">{completed ? 'done' : 'pending'}</h3>
                <p className="text-gray-600">{description}</p>
            </div>

            <button
                onClick={(e) => handleDelete(e, id)}
                className="bg-red-500 text-white p-[10px_15px] rounded-lg cursor-pointer">X
            </button>
        </div>
    )
}

export default TodoItem