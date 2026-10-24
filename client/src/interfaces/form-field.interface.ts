export interface IFormField {
    name: string;
    type: string;
    placeholder: string;
    label: string;
    defaultValue?: string;
    defaultChecked?: boolean;
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
