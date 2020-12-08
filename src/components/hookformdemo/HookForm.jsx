import { Button, Input, Select, TextField } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

export default function HookForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <TextField name="example" defaultValue="test" inputRef={register} />
            <TextField name="exampleRequired" inputRef={register({ required: true })}
                error={!!errors.exampleRequired} helperText={errors.exampleRequired && "Requerido"}
                label={errors.exampleRequired && "Error"}
            />
            <Select name="gender" ref={register}>
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
            </Select>
            <TextField name="edad" type="number" inputRef={register({ min: 18, max: 99 })}
                helperText={errors.edad?.type === "min" ? "el mínimo es 18" : (
                    errors.edad?.type === "max" && "El máximo son 99"
                )}
                error={!!errors.edad}
            />
            {/* { errors.edad && <span>{errors.edad.message}</span>} */}

            <Input color="primary" type="submit" />
        </form >
    );
}
