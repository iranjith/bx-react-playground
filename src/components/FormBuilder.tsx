// src/components/FormBuilder.tsx
import React, { useState } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Container, Typography } from '@mui/material';
import CollateralQualityForm from './CollateralQuality';

const initialData = {
  data: '',
  description: 'description not provided',
  field: '',
  filter: null,
  group_by: '',
  id: null,
  threshold: 0,
  threshold_direction: '>=',
  weight: '',
  weighted_average: null,
  template: 'CollateralQuality'
};

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const FormBuilder: React.FC = () => {
  const [data, setData] = useState(initialData);

  const handleFormSubmit = (formData: any) => {
    setData(formData);
    console.log("Form Submitted:", formData);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
          Form Builder
        </Typography>
        <CollateralQualityForm data={data} onSubmit={handleFormSubmit} />
      </Container>
    </ThemeProvider>
  );
};

export default FormBuilder;
