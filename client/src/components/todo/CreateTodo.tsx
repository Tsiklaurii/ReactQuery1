import useCreateTodo from "../../hooks/mutations/todo/useCreateTodo"
import type { IFormField } from "../../interfaces/form-field.interface"
import CreateForm from "../forms/CreateForm"

const CreateTodo = () => {
    const { mutate } = useCreateTodo()

    const fields: IFormField[] = [
        { name: "title", type: "text", placeholder: "Todo title", label: "Title" },
        { name: "description", type: "text", placeholder: "Todo description", label: "Description" }
    ]

    const createBtn = <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Create Todo</button>

    const onSubmit = (formData: Record<string, string>) => {
        mutate(formData)
    }

    return (
        <CreateForm fields={fields} formBtn={createBtn} action={onSubmit} />
    )
}

export default CreateTodo
