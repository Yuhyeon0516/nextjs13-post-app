migrate((db) => {
  const collection = new Collection({
    "id": "u0wqkxpl5rnb41z",
    "created": "2023-06-27 01:04:39.367Z",
    "updated": "2023-06-27 01:04:39.367Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zrgwaivu",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("u0wqkxpl5rnb41z");

  return dao.deleteCollection(collection);
})
