import useTodoUpdate from "../../hooks/mutations/todo/useTodoUpdate"
import type { IFormField } from "../../interfaces/form-field.interface"
import type { ITodo } from "../../interfaces/todo.interface"
import CreateForm from "../forms/CreateForm"

const UpdateTodo = ({ todo }: { todo: ITodo }) => {
    const { mutate, isPending, error, isSuccess } = useTodoUpdate(todo.id)

    const fields: IFormField[] = [
        { name: 'title', type: 'text', placeholder: 'Todo title', label: 'Title' },
        { name: 'description', type: 'text', placeholder: 'Todo description', label: 'Description' },
        { name: 'isCompleted', type: 'checkbox', placeholder: '', label: 'Completed' }
    ]

    const onSubmit = (formData: Record<string, string>) => {
        mutate({ title: formData.title, description: formData.description, isCompleted: formData.isCompleted === 'true' })
    }

    return (
        <div>
            <CreateForm
                fields={fields}
                initialValues={{ title: todo.title, description: todo.description, isCompleted: String(todo.isCompleted) }}
                resetOnSubmit={false}
                action={onSubmit}
                formBtn={<button type="submit" disabled={isPending} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">{isPending ? 'Updating...' : 'Update Todo'}</button>}
            />
            {error && <h3>{error.message}</h3>}
            {isSuccess && <h3>Todo updated</h3>}
        </div>
    )
}

export default UpdateTodo
