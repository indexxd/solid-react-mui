import { TextField } from "@suid/material";

/* eslint-disable react/prop-types */
export function Input({ value, onChange }) {
  return (
    <TextField
      value={value()}
      onChange={(event) => {
        onChange(event.target.value);
      }}
    />
  );
}
