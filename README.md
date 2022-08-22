
# MernApi
This is Full stack E-commerce API made by using MongoDb, Express, ReactJs, and Node.js. 
## Installation
Since this project will hold both the client application and the server application there will be node modules in two different places. First run `npm install` from the root. After this you will run `npm run-script install-all` from the root. From now on run this command anytime you want to install all modules again. This is a script we have defined in package.json. Alternatively your group may choose to simplify this process by using yarn workspaces as specified [here](https://yarnpkg.com/lang/en/docs/workspaces/).

Install dependencies

```bash
  npm install
```
Start the client

```bash
  npm run dev // Since i use Vite instead of CRA 
```

Start the server

```bash
  npm start // I modify start script so you can easily run server  with the help of Nodemon
```

## File structure
#### `client` - Holds the client application
- #### `src`
    - #### `components` - This folder holds all of the different components that will make up our views
    - #### `pages` - These represent a unique page on the website i.e. Home or About. These are still normal react components
    - #### `App.jsx` - This is what renders all of our browser routes and different views
- #### `package.json` - Defines npm behaviors and packages for the client
#### `server` - Holds the server application
- #### `.env` - This holds our configuration , like mongoDB uri
- #### `models` - This holds all of our data models
- #### `routes` - This holds all of our HTTP to URL path associations for each unique url
- #### `index.js` - This holds all of our server tests that we have defined
#### `package.json` - Defines npm behaviors like the scripts defined in the next section of the README
#### `.gitignore` - Tells git which files to ignore

 
## Documentation

### Request methods

The request method is the way we distinguish what kind of action our endpoint is being "asked" to perform. For example, `GET` pretty much gives itself. But we also have a few other methods that we use quite often.

| Method   | Description                              |
| -------- | ---------------------------------------- |
| `GET`    | Used to retrieve a single item or a collection of items. |
| `POST`   | Used when creating new items e.g. a new user, post, comment etc. |
| `PUT`    | Used to replace a whole item (all fields) with new data. |
| `DELETE` | Used to delete an item.                  |

### Examples

Now that we’ve learned about the anatomy of my endpoints and the different request methods that we should use, it’s time for some examples:

| Method   | URL                                      | Description                              |
| -------- | ---------------------------------------- | ---------------------------------------- |
| `GET`    | `http://localhost:5000/products/`                             | Retrieve all product.                      |
| `POST`   | `http://localhost:5000/products/addProduct`                             | Create a new product.                       |
| `GET`    | `http://localhost:5000/products/:id`                          | Retrieve a specific product with id.                       |
| `PUT`  | `http://localhost:5000/products/updateProduct/:id`                          | Update data of a specific product.                 |
| `DELETE` | `http://localhost:7000/products/deleteProduct/:id`| Delete product of specific id.                    |

#### Tips on what NOT to do

Hopefully you’re already aware of this. But not at any given time should your endpoint end with `.json`, `.xml` or `.something`. 

## HTTP Response Status Codes

One of the most important things in an API is how it returns response codes. Each response code means a different thing and consumers of your API rely heavily on these codes.

| Code  | Title                     | Description                              |
| ----- | ------------------------- | ---------------------------------------- |
| `200` | `OK`                      | When a request was successfully processed (e.g. when using `GET`, `PATCH`, `PUT` or `DELETE`). |
| `201` | `Created`                 | Every time a record has been added to the database (e.g. when creating a new user or post). |
| `304` | `Not modified`            | When returning a cached response. |
| `400` | `Bad request`             | When the request could not be understood (e.g. invalid syntax). |
| `401` | `Unauthorized`            | When authentication failed. |
| `403` | `Forbidden`               | When an authenticated user is trying to perform an action, which he/she does not have permission to. |
| `404` | `Not found`               | When URL or entity is not found. |
| `440` | `No accept header`        | When the required "Accept" header is missing from the request. |
| `422` | `Unprocessable entity`    | Whenever there is something wrong with the request (e.g. missing parameters, validation errors) even though the syntax is correct (ie. `400` is not warranted). |
| `500` | `Internal server error`   | When an internal error has happened (e.g. when trying to add/update records in the database fails). |
| `502` | `Bad Gateway`             | When a necessary third party service is down. |

The response codes often have very precise definition and are easily misunderstood when just looking at their names. For example, `Bad Request` refers to malformed requests and not, as often interpreted, when there is something semantically wrong with the reuquest. Often `Unprocessable entity` is a better choice in those cases.
Another one that is often used incorrectly is `Precondition Failed`. The precondition this status code refers to are those defined in headers like `If-Match` and `If-Modified-Since`. Again, `Unprocessable entity` is usually the more appropriate choice if the request somehow isn't valid in the current state of the server.
When in doubt, refer to [this overview](https://httpstatuses.com) and see if the description of an status code matches your situation.

### Examples

Just to round it all off, here’s a few examples of how my response will return depending on whether you’re about to return a single item, a collection 
#### A single product by Id

```
{
    "data": {
        "id": 6302154913fc7d0703e0e289,
        "name": "Adapter",
        "price": 700,
        "description": "Wireless Adapter"
    }
}
```

#### A collection of products

```
{
    "data": [
        {
           "id": 6302154913fc7d0703e0e289,
           "name": "Adapter",
           "price": 700,
           "description": "Wireless Adapter"
        },
        {
           "id": 63030b40d00527924c9702ff,
           "name": "micro",
           "price": 800,
           "description": "Best Mouse"
        },
        {
           "id": 6302154913fc7d0703e0e289,
           "name": "ferrari",
           "price": 7000,
           "description": "Best toy car"
        }
    ]
}
```


# REST API

The REST API to the MERN-APP is described below.

## Get list of Things

### Request

`GET /products/`

     'Accept: application/json' http://localhost:5000/products/

### Response

    HTTP/1.1 200 OK
    Date: Mon, 22 Aug 2022 08:09:16 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 409

    [{"_id":"6302154913fc7d0703e0e289","title":"ferrari","price":"1000","description":"best car","__v":0},
    {"_id":"63030b40d00527924c9702ff","title":"Adapter","price":"500","description":"wireless adapter","__v":0},{"_id":"63030bbdd00527924c970301","title":"wifi","price":"222","description":"wifi free","__v":0},
    {"_id":"63032e2951fdbac01c3ed064","title":"pizza","price":"1000","description":"best pizza","__v":0},{"_id":"63033a8251fdbac01c3ed06e","title":"Laptop","price":"10000","description":"Fast laptop","__v":0}]

## Create a new Product

### Request

`POST /addProduct/`

    'Accept: application/json' -d 'name=Foo&status=new' http://localhost:5000/addProduct

### Response

    HTTP/1.1 200 OK 
    Date: Mon, 22 Aug 2022 08:12:50 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Content-Length: 103

    {"title":"Laptop","price":"10000","description":"Fast laptop","_id":"63033a8251fdbac01c3ed06e","__v":0}

## Get a specific Product

### Request

`GET /products/:id`

    'Accept: application/json' http://localhost:5000/products/63033a8251fdbac01c3ed06e

### Response

    HTTP/1.1 200 OK
    Date: Mon, 22 Aug 2022 08:16:26 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 103

    {"title":"Laptop","price":"10000","description":"Fast laptop","_id":"63033a8251fdbac01c3ed06e","__v":0}

## Get a non-existent Thing

### Request

`GET /products/:id`

     'Accept: application/json' http://localhost:5000/products/12345

### Response

    HTTP/1.1 404 Not Found
    Date: Mon, 22 Aug 2022 08:18:43 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 247

    {"message":{"stringValue":"\"12345\"","valueType":"string","kind":"ObjectId","value":"12345","path":"_id","reason":{},"name":"CastError","message":"Cast to ObjectId failed for value \"12345\" (type string) at path \"_id\" for model \"products\""}}


## Update a Product data

### Request

`PUT /updateProduct/:id/`

     'Accept: application/json' -X PUT http://localhost:5000/products/63033a8251fdbac01c3ed06e

### Response

    HTTP/1.1 200 OK
    Date:  Mon, 22 Aug 2022 08:25:27 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 98

    {"_id":"63033a8251fdbac01c3ed06e","title":"Iron","price":"1000","description":"Fast Iron","__v":0}

## Get Updated Product

### Request

`GET /products/:id`

     'Accept: application/json'http://localhost:5000/products/63033a8251fdbac01c3ed06e

### Response

    HTTP/1.1 200 OK
    Date:  Mon, 22 Aug 2022 08:25:27 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 98

    {"_id":"63033a8251fdbac01c3ed06e","title":"Iron","price":"1000","description":"Fast Iron","__v":0}


## Delete a Product

### Request

`DELETE /deleteProduct/:productId`

     'Accept: application/json' -X DELETE http://localhost:5000/deleteProduct/63033a8251fdbac01c3ed06e

### Response

    HTTP/1.1 200 OK
    Date: Mon, 22 Aug 2022 08:35:18 GMT
    content-length: 98
    Content-Type: application/json
    Connection: close

    {"_id":"63033a8251fdbac01c3ed06e","title":"Iron","price":"1000","description":"Fast Iron","__v":0


## Try to delete same Product again

### Request

`DELETE /deleteProduct/:productId`

     'Accept: application/json' -X DELETE http://localhost:5000/deleteProduct/63033a8251fdbac01c3ed06e

### Response

    HTTP/1.1 200 OK
    Date: Mon, 22 Aug 2022 08:38:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length:  4

    {null}

## Get deleted Product

### Request

`GET /products/63033a8251fdbac01c3ed06e`

     'Accept: application/json' http://localhost:5000/products/63033a8251fdbac01c3ed06e

### Response

    HTTP/1.1 404 Not Found
    Date: Mon, 22 Aug 2022 08:41:55 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}


## Roadmap

- Additional browser support

- Add more integrations

