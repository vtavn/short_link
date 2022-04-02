# Short Link V1
## using
 - update...

## API URL
 - Create New Link: /v1/short/create
  - request
  ```json
    {
      "link": "https://www.facebook.com/5",
      "password": ""
    }
  ```
  - reponse
  ```json
    {
      "_id": "6247f20a117c8d752eb1d537",
      "originUrl": "https://www.facebook.com/5",
      "shortUrl": "srJ3UhW",
      "__v": 0,
      "deletedAt": null,
      "updatedAt": null,
      "createdAt": 1648882186679,
      "totalView": 0,
      "passwords": ""
    }
  ```