// src/components/CollateralQualityForm.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { CollateralQuality } from '../types';

interface Props {
  data: CollateralQuality;
  onSubmit: (data: CollateralQuality) => void;
}

const CollateralQualityForm: React.FC<Props> = ({ data, onSubmit }) => {
  const { control, handleSubmit } = useForm<CollateralQuality>({
    defaultValues: data
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Data</label>
        <Controller
          name="data"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Field</label>
        <Controller
          name="field"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Group By</label>
        <Controller
          name="group_by"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Threshold</label>
        <Controller
          name="threshold"
          control={control}
          render={({ field }) => <input type="number" {...field} />}
        />
      </div>
      <div>
        <label>Threshold Direction</label>
        <Controller
          name="threshold_direction"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <div>
        <label>Weight</label>
        <Controller
          name="weight"
          control={control}
          render={({ field }) => <input {...field} />}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CollateralQualityForm;
