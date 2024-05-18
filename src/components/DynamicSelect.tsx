import React, { useState, useMemo } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import debounce from 'lodash/debounce';

const DynamicAutoComplete: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const options = [
    { title: 'Option 1', value: 'Option 1' },
    { title: 'Option 2', value: 'Option 2' },
    { title: 'Option 3', value: 'Option 3' },
    // Add more options as needed
  ];

  const handleInputChange = (event: React.ChangeEvent<{}>, newInputValue: string) => {
    setInputValue(newInputValue);
  };

  // Use useMemo to ensure the debounce function is not recreated on every render
  const debouncedHandleInputChange = useMemo(
    () => debounce(handleInputChange, 200),
    []
  );

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.title}
      inputValue={inputValue}
      onInputChange={debouncedHandleInputChange}
      renderInput={(params) => (
        <TextField {...params} label="Dynamic AutoComplete" variant="outlined" />
      )}
      freeSolo
    />
  );
};

export default DynamicAutoComplete;
