import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import SelectCore from "@material-ui/core/Select";
import { Controller } from "react-hook-form";

const Select = ({
    name,
    label,
    control,
    defaultValue,
    children,
    ...props
}) => {
    const labelId = `${name}-label`;
    return (
        <FormControl {...props}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Controller
                as={
                    <SelectCore InputLabelProps={{ shrink: true }} labelId={labelId} label={label}>
                        {children}
                    </SelectCore>
                }
                name={name}
                control={control}
                defaultValue={defaultValue}
            />
        </FormControl>
    );
};
export default Select;