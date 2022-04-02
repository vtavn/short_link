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