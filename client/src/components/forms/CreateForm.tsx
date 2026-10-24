import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react"
import type { IFormField } from "../../interfaces/form-field.interface"
import FormInput from "./FormInput"

interface CreateFormProps {
    fields: IFormField[],
    action: (formData: Record<string, string>) => void,
    formBtn: ReactNode
}

const CreateForm = ({ fields, action, formBtn }: CreateFormProps) => {
    const [formData, setFormData] = useState<Record<string, string>>({})

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        action(formData)
        e.currentTarget.reset()
    }

    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-2.5 p-2.5 border-gray-400 border rounded-2xl">
            {fields.map(({ name, label, type, placeholder }) => (
                <FormInput key={name} name={name} label={label} type={type} placeholder={placeholder} handleChange={handleChange} />
            ))}
            {formBtn}
        </form>
    )
}

export default CreateForm
