export const collateralQualitySchema = {
    "$defs": {
      "KrakenType": {
        "anyOf": [
          {
            "$ref": "#/$defs/Rule"
          },
          {
            "type": "integer"
          },
          {
            "type": "number"
          },
          {
            "type": "boolean"
          },
          {
            "type": "string"
          },
          {
            "items": {
              "anyOf": [
                {
                  "$ref": "#/$defs/KrakenType"
                },
                {
                  "type": "null"
                }
              ]
            },
            "type": "array"
          }
        ],
        "default": "",
        "title": "KrakenType"
      },
      "Rule": {
        "anyOf": [
          {
            "$ref": "#/$defs/Template"
          }
        ],
        "title": "Rule"
      },
      "Template": {
        "anyOf": [
          {
            "$ref": "#/$defs/Template - CollateralQuality"
          }
        ],
        "title": "Template"
      },
      "Template - CollateralQuality": {
        "properties": {
          "data": {
            "default": "",
            "description": "The iterable",
            "title": "Data",
            "type": "string"
          },
          "description": {
            "default": "description not provided",
            "description": "Description of the rule. Should be a copy of the IMA",
            "title": "Description",
            "type": "string"
          },
          "field": {
            "default": "",
            "description": "The data field name in each item of data to be used to calculated the weighted average",
            "title": "Field",
            "type": "string"
          },
          "filter": {
            "anyOf": [
              {
                "$ref": "#/$defs/KrakenType"
              },
              {
                "type": "null"
              }
            ],
            "default": "",
            "description": "The filter on the iterables, which will decide the scope of weighted average",
            "title": "Filter"
          },
          "group_by": {
            "default": "",
            "description": "The grouping by field",
            "title": "Group By",
            "type": "string"
          },
          "id": {
            "default": null,
            "title": "Id",
            "type": "string"
          },
          "threshold": {
            "default": 0,
            "description": "The threshold value in percent, e.g put 10 for 10%",
            "title": "Threshold",
            "type": "number"
          },
          "threshold_direction": {
            "default": ">=",
            "description": "The threshold direction e.g greater than or equal to '>='",
            "title": "Threshold Direction",
            "type": "string"
          },
          "weight": {
            "default": "",
            "description": "The data field name in each item of data to be used a weight",
            "title": "Weight",
            "type": "string"
          },
          "weighted_average": {
            "anyOf": [
              {
                "$ref": "#/$defs/KrakenType"
              },
              {
                "type": "null"
              }
            ],
            "default": null,
            "description": "Expecting weighted average",
            "title": "Weighted Average"
          },
          "template": {
            "const": "CollateralQuality",
            "default": "CollateralQuality",
            "title": "Template",
            "type": "string"
          }
        },
        "title": "Collateral Quality",
        "type": "object",
        "description": "assuming an input of a list of assets, will calculate the weighted average by provided parameters"
      }
    },
    "allOf": [
      {
        "$ref": "#/$defs/Rule"
      }
    ]
  };
  