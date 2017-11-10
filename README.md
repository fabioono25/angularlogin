# Example of Angular 4 Login Page, JWT Expiration Control and REST for list of Products

### Technologies:

- Angular 4;
- REST;
- Toaster Notifications.

### Running this solution:

First download or clone the project in a local directory:

Run the command to install node modules:

```javascript
npm install
```
Then, run the command to start server:

```javascript
ng serve
```
The application will start with page:

http://localhost:4200/

**Important**: the application is configured to work with REST API from the JWT WebAPI REST: https://github.com/fabioono25/webapicore2jwt

It's important verify in the files **auth.service.ts** and **product.service.ts** if the URL is working correctly:

```javascript
private url: string = "http://localhost:60757/api/Auth";
```

```javascript
private url: string = "http://localhost:60757/api/Products";
```

When application starts, go to http://localhost:4200/signin

Validation when trying login with invalid user/password:

![Alt text](https://github.com/fabioono25/angularlogin/blob/master/images/1-loginFailed.PNG "Login Failed")

When login is ok, it'll be generated an JWT authentication token. You can logout any time:

![Alt text](https://github.com/fabioono25/angularlogin/blob/master/images/2-loginok.PNG "Login Ok with Token")

Link for Products will be enabled:

![Alt text](https://github.com/fabioono25/angularlogin/blob/master/images/3-productList.PNG "Product List")

You can see de detail of each product:

![Alt text](https://github.com/fabioono25/angularlogin/blob/master/images/4-productdetail.PNG "Product Detail")

The token have an expiration time. If you prefer, force the invalidation setting the localStorage with an invalid value:

```mongodb
localStorage["token"]="invalid token value"
```

When you search again, this message appears, and you'll be redirected to login page again:

![Alt text](https://github.com/fabioono25/angularlogin/blob/master/images/5-forcetokenexpiration.PNG "Token invalid or expired")
