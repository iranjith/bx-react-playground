// src/components/CollateralQualityForm.tsx
import React from "react";
import Form from "@rjsf/mui";
import ISubmitEvent from "@rjsf/core";
// import { collateralQualitySchema } from '../schema/collateralSchema';
import validator from "@rjsf/validator-ajv8";
import { collateralQualitySchema } from "../schema/collateralSchema2";
import CustomDropdown from "./CustomDropdown";

interface Props {
  data: any;
  onSubmit: (data: any) => void;
}

const uiSchema = {
  filter: {
    "ui:field": "customDropdown",
  },
  weighted_average: {
    "ui:field": "customDropdown",
  },
};

const fields = {
  customDropdown: CustomDropdown,
};

const CollateralQualityForm: React.FC<Props> = ({ data, onSubmit }) => {
  return (
    <Form
      schema={collateralQualitySchema}
      formData={data}
      uiSchema={uiSchema}
      fields={fields}
      validator={validator}
      onSubmit={(event: ISubmitEvent<any>) => onSubmit(event.formData)}
    />
  );
};

export default CollateralQualityForm;

// Define function to extract KrakenType values
// const extractKrakenTypes = (schema: any): string[] => {
//     const krakenTypes: string[] = [];
//     const traverse = (obj: any) => {
//       if (obj !== null && typeof obj === 'object') {
//         if (Array.isArray(obj)) {
//           obj.forEach((item) => traverse(item));
//         } else {
//           Object.keys(obj).forEach((key) => {
//             if (key === 'KrakenType') {
//               krakenTypes.push(obj[key]);
//             } else {
//               traverse(obj[key]);
//             }
//           });
//         }
//       }
//     };
//     traverse(schema);
//     return krakenTypes;
//   };

//   // Extract KrakenType values from the schema
//   const krakenTypes = extractKrakenTypes(schema);

//   // Use krakenTypes to populate dropdown options
//   <select
//     value={formData.filter}  // Assuming formData is your form state
//     onChange={(e) => setFormData({ ...formData, filter: e.target.value })}
//   >
//     {krakenTypes.map((type) => (
//       <option key={type} value={type}>
//         {type}
//       </option>
//     ))}
//   </select>
