# task-manager-api-24IT059

# Express.js CRUD Practical

## Aim

To implement CRUD (Create, Read, Update, Delete) operations using **Express.js** and test the REST APIs using **Postman**.

## Requirements

* Node.js
* npm
* Express.js
* Postman

## Project Setup

```bash
mkdir express-crud
cd express-crud
npm init -y
npm install express
node server.js
```

## Middleware

```javascript
app.use(express.json());
```

This middleware parses incoming JSON request bodies and makes the data available in `req.body`.

## API Endpoints

| Method | Endpoint        | Description                |
| ------ | --------------- | -------------------------- |
| GET    | `/students`     | Get all students           |
| GET    | `/students/:id` | Get a student by ID        |
| POST   | `/students`     | Create a new student       |
| PUT    | `/students/:id` | Update an existing student |
| DELETE | `/students/:id` | Delete a student           |



## Testing with Postman

1. Start the server:

   ```bash
   node server.js
   ```
2. Open **Postman**.
3. Send requests to:

   ```
   http://localhost:3000
   ```
4. Use **Body → raw → JSON** for **POST** and **PUT** requests.
5. Verify the JSON response for each API.

## Expected Results

* **GET** returns all student records or a specific student by ID.
* **POST** creates a new student record.
* **PUT** updates an existing student's details.
* **DELETE** removes the selected student.
* All responses are returned in **JSON** format with appropriate HTTP status codes.

## Conclusion

This practical demonstrates how to build a basic RESTful CRUD API using **Express.js**. The application handles Create, Read, Update, and Delete operations on student data, while **Postman** is used to test each endpoint and verify the JSON responses successfully.
