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
      "status": true,
      "message": "Link Success!",
      "data": {
          "originUrl": "https://www.facebook.com/5",
          "shortUrl": "http://localhost:3300/srJ3UhW",
          "totalView": 0
      }
    }
  ```
 - Show All Link: /v1/short/all
  - reponse
  ```json
    {
      "status": true,
      "message": "Get Data Success",
      "data": [
          {
              "_id": "62486f008065f209f1d923a6",
              "originUrl": "https://www.facebook.com/5",
              "shortUrl": "4bnrlHp",
              "__v": 0,
              "deletedAt": null,
              "updatedAt": null,
              "createdAt": 1648914176811,
              "totalView": 0,
              "passwords": ""
          },
          {
              "_id": "6248703a2a2dfe0c0af6d590",
              "originUrl": "https://www.facebook.com/1",
              "shortUrl": "iDKkaLP",
              "__v": 0,
              "deletedAt": null,
              "updatedAt": null,
              "createdAt": 1648914490891,
              "totalView": 0,
              "passwords": ""
          }
      ]
    }
  ```

 - Delete Short Link: /v1/short/delete/:short
 - reponse
    - success
    ```json
    {
        "status": true,
        "message": "Delete Success"
    }
    ```
    - error
    ```json
    {
      "status": false,
      "message": "Short Link Not Found."
    }
    ```