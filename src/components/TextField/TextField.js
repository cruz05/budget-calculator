import { TextInput, Label } from "./TextField.styles";


export default function TextField({label,name, placeholder}) {
    return (
        <>
            <Label>{label}</Label>
            <TextInput type='text' name={name} placeholder={placeholder} required/>
        </>
    )
}
