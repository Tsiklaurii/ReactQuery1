import type { IFormField } from "../../interfaces/form-field.interface"

const FormInput = ({ name, label, type, placeholder, handleChange }: IFormField) => {
    return (
        <div key={name}>
            <label>{label}</label><br />
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                onChange={handleChange}
                className="border-gray-400 border rounded-lg px-2 py-1.5 w-full focus:outline-none"
            />
        </div>
    )
}

export default FormInput