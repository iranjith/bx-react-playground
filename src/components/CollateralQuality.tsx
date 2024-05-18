// src/components/CollateralQualityForm.tsx
import React from 'react';
import Form from '@rjsf/mui';
import ISubmitEvent from '@rjsf/core';
import { collateralQualitySchema } from '../schema/collateralSchema';
import validator from '@rjsf/validator-ajv8';

interface Props {
    data: any;
    onSubmit: (data: any) => void;
}

const CollateralQualityForm: React.FC<Props> = ({ data, onSubmit }) => {
  return (
    <Form
      schema={collateralQualitySchema}
      formData={data}
      validator={validator}
      onSubmit={(event: ISubmitEvent<any>) => onSubmit(event.formData)}
    />
  );
};

export default CollateralQualityForm;
