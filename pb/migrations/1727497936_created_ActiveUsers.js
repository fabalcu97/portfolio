/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "4x0fymvick8n226",
    "created": "2024-09-28 04:32:16.566Z",
    "updated": "2024-09-28 04:32:16.566Z",
    "name": "ActiveUsers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "uaxeuzdc",
        "name": "count",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("4x0fymvick8n226");

  return dao.deleteCollection(collection);
})
