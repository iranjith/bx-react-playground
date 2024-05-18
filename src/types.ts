// src/types.ts
export interface KrakenType {
    anyOf?: (Rule | number | boolean | string | KrakenType[] | null)[];
  }
  
  export interface Rule {
    anyOf?: Template[];
  }
  
  export interface Template {
    "Template - CollateralQuality"?: CollateralQuality;
    "Template - Concentration"?: Concentration;
  }
  
  export interface CollateralQuality {
    data: string;
    description: string;
    field: string;
    filter?: KrakenType | null;
    group_by: string;
    id?: string;
    threshold: number;
    threshold_direction: string;
    weight: string;
    weighted_average?: KrakenType | null;
    template: string;
  }
  
  export interface Concentration {
    data: string;
    denominator?: KrakenType | null;
    denominator_filter?: KrakenType | null;
    description: string;
    exclude: boolean;
    group_by: string;
    id?: string;
    numerator?: KrakenType | null;
    numerator_filter?: KrakenType | null;
    threshold: number;
    threshold_direction: string;
    template: string;
  }
  