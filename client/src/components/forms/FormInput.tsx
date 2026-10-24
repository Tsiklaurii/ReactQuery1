import type { IFormField } from "../../interfaces/form-field.interface"

const FormInput = ({ name, label, type, placeholder, handleChange, defaultValue, defaultChecked }: IFormField) => {
    return (
        <div key={name} className={type === 'checkbox' ? 'flex items-center gap-2' : undefined}>
            <label htmlFor={name}>{label}</label>{type !== 'checkbox' && <br />}
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                id={name}
                onChange={handleChange}
                defaultValue={defaultValue}
                defaultChecked={defaultChecked}
                className={type === 'checkbox' ? 'cursor-pointer' : 'border-gray-400 border rounded-lg px-2 py-1.5 w-full focus:outline-none'}
            />
        </div>
    )
}

export default FormInput
