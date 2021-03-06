# Rising Academies API

## Getting Started

You can download this repo or clone using below command.

```
git clone https://gitlab.com/hobbe5/risingacad-api.git
cd risingacad-api

```

### Project Setup

Once you clone project,

```
> copy .env.local file to .env file
```

### Installing

```
> npm install or yarn install  (this will install all dependent libraries)
```

### Database Config Setup

Create new database (let's say i'm going to use mysql and my database name is **risingacademy**).
so in my **.env** file will set below parameters.

```
DB_HOST=localhost               # database connection host
DB_USER=root                    # database username
DB_PASS=secret@123              # database password
DB_NAME=risingacademy           # database name
DB_DIALECT=mysql                # database dialect
DB_PORT=3306                    # database port
```

some other inportant parameters/keys in **.env** file

```
APP_HOST=localhost      # application host name
APP_PORT=3000           # application port
SECRET=secret           # secret key for encrypt/decrypt JWT token
```

### Migration and Seeders run

After creating database and updating .env file run below commands

```
> node_modules/.bin/sequelize db:migrate
> node_modules/.bin/sequelize db:seed:all
```

Migration will create table Users and seed some default users

- **Users** - this is normal user table with some required fields like (username, password)
  Seeders will create one new client entry in application and 1 users entry one admin and one normal user.

`npm start` to run your project

Everythig is setup and you are good to go now. Happy Coding :)

# Other Information about setup/commands

## Useful terminal commands

```
> node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string
> node_modules/.bin/sequelize db:migrate
> node_modules/.bin/sequelize db:migrate:undo
> node_modules/.bin/sequelize db:migrate:undo:all --to XXXXXXXXXXXXXX-create-posts.js
> node_modules/.bin/sequelize seed:generate --name demo-user
```

### Success Response

```
{
    "success": true,
    "code": 200,
    "data": "object or array"
}
```

### Error Response

```
{
    "success": false,
    "code": 500,
    "errorMessage": "Incorrect username/password",
    "error": {},
    "data": null
}
```
=======
# sis-api
