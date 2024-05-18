// src/components/FormBuilder.tsx
import React, { useState } from 'react';
import { CollateralQuality } from '../types';
import CollateralQualityForm from './CollateralQuality';

const initialData: CollateralQuality = {
  data: '',
  description: 'description not provided',
  field: '',
  filter: null,
  group_by: '',
  id: '',
  threshold: 0,
  threshold_direction: '>=',
  weight: '',
  weighted_average: null,
  template: 'CollateralQuality'
};

const FormBuilder: React.FC = () => {
  const [data, setData] = useState<CollateralQuality>(initialData);

  const handleFormSubmit = (formData: CollateralQuality) => {
    setData(formData);
    console.log("Form Submitted:", formData);
  };

  return (
    <div>
      <h1>Form Builder</h1>
      <CollateralQualityForm data={data} onSubmit={handleFormSubmit} />
      {/* Render other form templates similarly */}
    </div>
  );
};

export default FormBuilder;
