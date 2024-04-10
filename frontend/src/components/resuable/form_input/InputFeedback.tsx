import { Input } from "@mui/joy";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import React from "react";
import { useFormContext } from "react-hook-form";
import { InputFeedbackContainer } from "../InputFeedbackContainer";
import { SxProps } from "@mui/joy/styles/types";

interface InputFeedBackProps {
    children: React.ReactNode;
    getInputFeedback(value: string): string;
    value: string;
}

export default function InputFeedBack(props: InputFeedBackProps) {
    const { children, getInputFeedback, value } = props;
    return (
        <Stack spacing={0.5}>
            {children}
            <Typography level="body-xs" sx={{ alignSelf: "flex-end" }}>
                <b>{getInputFeedback(value)}</b>
            </Typography>
        </Stack>
    );
}

interface FormInputProps {
    id: string;
    placeholder: string;
    type: string;
    styles?: SxProps;
}

export function FormInput(props: FormInputProps) {
    const { id, placeholder, type, styles } = props;
    const {
        register,
        formState: { errors },
    } = useFormContext();
    const error = errors[id]?.message ?? "";

    return (
        <InputFeedbackContainer styles={styles} message={error}>
            <Input size="lg" id={id} type={type} placeholder={placeholder} {...register(id)} />
        </InputFeedbackContainer>
    );
}
