
// export const concentrationTemplate = {
//   "$defs": {
//     "KrakenType": {
//       "anyOf": [
//         {
//           "$ref": "#/$defs/Rule"
//         },
//         {
//           "type": "integer"
//         },
//         {
//           "type": "number"
//         },
//         {
//           "type": "boolean"
//         },
//         {
//           "type": "string"
//         },
//         {
//           "items": {
//             "anyOf": [
//               {
//                 "$ref": "#/$defs/KrakenType"
//               },
//               {
//                 "type": "null"
//               }
//             ]
//           },
//           "type": "array"
//         }
//       ],
//       "default": "",
//       "title": "KrakenType"
//     },
//     "Rule": {
//       "anyOf": [
//         {
//           "$ref": "#/$defs/Template"
//         }
//       ],
//       "title": "Rule"
//     },
//     "Template": {
//       "anyOf": [
//         {
//           "$ref": "#/$defs/Template - Concentration"
//         }
//       ],
//       "title": "Template"
//     },
//     "Template - Concentration": {
//       "properties": {
//         "data": {
//           "default": "assets",
//           "description": "The json path to iterable. Defaults to the input data",
//           "title": "Data",
//           "type": "string"
//         },
//         "denominator": {
//           "anyOf": [
//             {
//               "$ref": "#/$defs/KrakenType"
//             },
//             {
//               "type": "null"
//             }
//           ],
//           "default": "",
//           "description": "The data field in the iterable will be used to calculate the denominator",
//           "title": "Denominator"
//         },
//         "denominator_filter": {
//           "anyOf": [
//             {
//               "$ref": "#/$defs/KrakenType"
//             },
//             {
//               "type": "null"
//             }
//           ],
//           "default": "",
//           "description": "Expecting a filter template for denominator",
//           "title": "Denominator Filter"
//         },
//         "description": {
//           "default": "description not provided",
//           "description": "Description of the rule. Should be a copy of the IMA",
//           "title": "Description",
//           "type": "string"
//         },
//         "exclude": {
//           "default": false,
//           "description": "Default to false, will keep the items where filter conditions evaluated to TRUE. Otherwise filter the items where filter conditions evaluated to FALSE",
//           "title": "Exclude",
//           "type": "boolean"
//         },
//         "group_by": {
//           "default": "",
//           "description": "The group by field",
//           "title": "Group By",
//           "type": "string"
//         },
//         "id": {
//           "default": null,
//           "title": "Id",
//           "type": "string"
//         },
//         "numerator": {
//           "anyOf": [
//             {
//               "$ref": "#/$defs/KrakenType"
//             },
//             {
//               "type": "null"
//             }
//           ],
//           "default": "",
//           "description": "The data field in the iterable will be used to calculate the numerator",
//         }
//     }
// }