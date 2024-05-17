import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const DynamicAutoComplete = () => {
const [inputValue, setInputValue] = useState('');
const [options, setOptions] = useState<{ title: string; value: string; }[]>([]);

const handleInputChange = (event: any, newInputValue: React.SetStateAction<string>) => {
    setInputValue(newInputValue);

    // Simulate fetching options from an API based on the input value
    setTimeout(() => {
        setOptions([
            { title: 'Option 1', value: 'Option 1' },
            { title: 'Option 2', value: 'Option 2' },
            { title: 'Option 3', value: 'Option 3' },
        ]);
    }, 500);
};

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.title}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      renderInput={(params) => (
        <TextField {...params} label="Dynamic AutoComplete" variant="outlined" />
      )}
    />
  );
};

export default DynamicAutoComplete;
