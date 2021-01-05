{
  "id": String,
  "type": "tree",
  "rootNode": {
    "id": String,
    "value": Any,
    "childNodes": [
      {
        "id": String,
        "value": Any,
        "childRole": String,
        "edgeToParent": {
          "startNode": {
            "id": String,
            "value": Any,
          },
          "endNode": { ... }
        },
        "childNodes": Array
      }
    ]
  }
}
