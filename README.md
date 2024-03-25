<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Challange developed with [Nest](https://github.com/nestjs/nest) .

## Project details
### Features


- [x] Register user
- [x] Login user (the token has 7d to expire)
- [x] LogOut
- [x] Authorization feature (we don't access to the enpoints if the user is not logged in)
- [x] Create products
- [x] Get Products (without pagination)
- [x] Create Order
- [x] Update Order
- [x] Get total sold price. per month of any year(not only the last month)
- [x] Get higher amount order (without filters)
- [x] Swagger to document endpoint localhost:3000/docs

      
### Regist a first user

The application has the next endpoints to login:
```bash
POST /v1/auth/register
```

And into the body we need to send:
```bash
{
    "username": "pcardoso3",
    "password": "1234512345",
    "email": "pablogcardoso3@gmail.com"
}
```

### Login
The application has the next endpoints to login:
POST /v1/auth/login
And into the body we need to send:
```bash
{
  email:"some_email@gmail.com",
  password:"some_password"
}
```
and This rerturn:
```bash
{
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYWJsb2djYXJkb3NvM0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6InBjYXJkb3NvMyIsImlhdCI6MTcxMTM4NTQ0NywiZXhwIjoxNzExOTkwMjQ3fQ.gTtUBy-IsORa2nRIrBw7ODctPezO48DbbtDVNEqV9eQ"
}
```
### LogOut
The application has the next endpoints to login:
POST /v1/auth/logout
And into the body we need to send:
```bash
{
    "email": "pablogcardoso3@gmail.com"
}
```
and This rerturn:
```bash
{
    "statusCode": 200,
    "message": "SUCCESSFUL",
    "data": {
        "acknowledged": true,
        "deletedCount": 1
    }
}
```
Use the token to get access to the endpoints, example running this locally:
```bash
curl --location 'localhost:3000/v1/orders/total-sold-price?date=2024-02-15T00%3A00%3A00.000Z' \
--header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJwYWJsb2djYXJkb3NvM0BnbWFpbC5jb20iLCJ1c2VybmFtZSI6InBjYXJkb3NvMyIsImlhdCI6MTcxMTM4NTQ0NywiZXhwIjoxNzExOTkwMjQ3fQ.gTtUBy-IsORa2nRIrBw7ODctPezO48DbbtDVNEqV9eQ'
```


### Create Product
The product persist the path to the image, to not permist the image into the BD, the image can be uploaded to a folder o use an external services. For this challange only the image path is saved.
```bash
POST /v1/product
```
body:
```bash
{
    "name":"camera nikon",
    "sku":"15",
    "picture":"picture_00015.png",
    "price":19500
}
```
And return:
```bash
{
    "statusCode": 201,
    "message": "SUCCESSFULL",
    "data": {
        "name": "camera nikon",
        "sku": "15",
        "picture": "picture_00015.png",
        "price": "19500",
        "_id": "660166418ff0e2949060ba44",
        "__v": 0
    }
}
```
### Create Order
Note: We can't create orders with the same number of order.
```bash
POST /v1/orders
```
body:
```bash
{
    "idOrder":"A3134",
    "clientName":"Pedro choz",
    "total":13050,
    "date":"2023-02-03T00:00:00.000Z",
    "products":[
        {
          "name":"camera kodak z42",
          "sku":"12",
          "picture":"picture_0001.png",
          "price":5000
        },
        {
          "name": "camera sony",
          "sku": "12",
          "picture": "picture_0002.png",
          "price": "8000"            
        }]
}
```
And return:
```bash
{
    "data": {
        "idOrder": "A3134",
        "clientName": "Pedro choz",
          .......
    },
    "message": "created",
    "statusCode": 201
}
```

### Update Order
You can update all fields: 
```bash
PATCH /v1/orders
```
body:
```bash
{
    "total":13050,
}
```
And return:
```bash
{
    "data": {
        "acknowledged": true,
        "modifiedCount": 1,
        "upsertedId": null,
        "upsertedCount": 0,
        "matchedCount": 1
    },
    "message": "updated",
    "statusCode": 200
}
```

### Get total sold price
This endpoint get the total sold price in a specifi month, receibe a full date, that permit check a month of any year, not only the last month
```bash
GET /v1/orders/total-sold-price?date=2024-02-15T00:00:00.000Z
```

And return:
```bash
{
    "data": {
        "total": 0
    },
    "message": "OK",
    "status": 200
}
```
### Get the higher amount order 
```bash
GET /v1/orders/higher-amount-order
```
And return:
```bash
{
    "data": {
        "amount":  13000
    },
    "message": "OK",
    "status": 200
}
```

## Pre-requisites

We need install MongoDb, and Nodejs 18+

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```



## Stay in touch

- Author - Pablo Gaston Cardoso

## License

Nest is [MIT licensed](LICENSE).
