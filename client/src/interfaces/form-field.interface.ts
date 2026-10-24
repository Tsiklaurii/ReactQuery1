export interface IFormField {
    name: string;
    type: string;
    placeholder: string;
    label: string;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
