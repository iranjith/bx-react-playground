export const collateralQualitySchema = {
    title: "Collateral Quality",
    type: "object",
    properties: {
      data: {
        type: "string",
        title: "Data",
        default: ""
      },
      description: {
        type: "string",
        title: "Description",
        default: "description not provided"
      },
      field: {
        type: "string",
        title: "Field",
        default: ""
      },
      filter: {
        anyOf: [
          { $ref: "#/definitions/KrakenType" },
          { type: "null" }
        ],
        title: "Filter",
        default: ""
      },
      group_by: {
        type: "string",
        title: "Group By",
        default: ""
      },
      id: {
        type: "string",
        title: "Id",
        default: null
      },
      threshold: {
        type: "number",
        title: "Threshold",
        default: 0
      },
      threshold_direction: {
        type: "string",
        title: "Threshold Direction",
        default: ">="
      },
      weight: {
        type: "string",
        title: "Weight",
        default: ""
      },
      weighted_average: {
        anyOf: [
          { $ref: "#/definitions/KrakenType" },
          { type: "null" }
        ],
        title: "Weighted Average",
        default: null
      },
      template: {
        type: "string",
        title: "Template",
        default: "CollateralQuality"
      }
    },
    definitions: {
      KrakenType: {
        anyOf: [
          { type: "integer" },
          { type: "number" },
          { type: "boolean" },
          { type: "string" },
          { type: "array", items: { anyOf: [{ $ref: "#/definitions/KrakenType" }, { type: "null" }] } }
        ],
        title: "KrakenType",
        default: ""
      }
    }
  };
  