import React from 'react';
import { FieldProps, WidgetProps } from '@rjsf/utils';
import { MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const CustomDropdown: React.FC<WidgetProps> = ({
  schema,
  id,
  options,
  value,
  required,
  disabled,
  readonly,
  label,
  onChange,
}) => {
  const handleChange = (event: any) => {
    onChange(event.target.value);
  };

  const dropdownOptions = [
    { label: 'Integer', value: 'integer' },
    { label: 'Number', value: 'number' },
    { label: 'Boolean', value: 'boolean' },
    { label: 'String', value: 'string' },
    { label: 'Array', value: 'array' },
  ];

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor={id}>{label || schema.title}</InputLabel>
      <Select
        id={id}
        value={value || ''}
        onChange={handleChange}
        label={label || schema.title}
        disabled={disabled || readonly}
        required={required}
      >
        {dropdownOptions.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CustomDropdown;
