import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

interface Option {
    label: string;
    value: string;
}

interface AutoCompleteProps {
    options: Option[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ options }) => {
    const [value, setValue] = useState<Option | null>(null);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: Option | null) => {
        setValue(newValue);
    };

    return (
        <Autocomplete
            value={value}
            onChange={handleChange}
            options={options}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => <TextField {...params} label="Autocomplete" />}
            freeSolo // Add the freesolo prop here
        />
    );
};

export default AutoComplete;