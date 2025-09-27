# token_auth

A simple Node.js authentication API using JWT tokens and MongoDB.

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```

2. **Start MongoDB locally** (default URI: `mongodb://127.0.0.1:27017/tokenAuthApp`).

3. **Run the server:**
   ```
   node app.js
   ```
   The server runs at `http://localhost:3000`.

## API Endpoints

### 1. Register a User

- **URL:** `POST http://localhost:3000/api/auth/register`
- **Body (JSON):**
  ```json
  {
    "username": "yourUsername",
    "email": "yourEmail@example.com",
    "password": "yourPassword"
  }
  ```
- **Response:**  
  `{ "message": "User registered successfully!" }`

### 2. Login

- **URL:** `POST http://localhost:3000/api/auth/login`
- **Body (JSON):**
  ```json
  {
    "email": "yourEmail@example.com",
    "password": "yourPassword"
  }
  ```
- **Response:**  
  `{ "token": "<JWT_TOKEN>" }`

### 3. Get Profile (Protected)

- **URL:** `GET http://localhost:3000/api/auth/profile`
- **Headers:**
  ```
  Authorization: Bearer <JWT_TOKEN>
  ```
- **Response:**  
  User profile data (without password).

## Testing with POSTMAN

1. **Register:**  
   - Create a new POST request to `/api/auth/register`.
   - Set Body to `raw` and `JSON`.
   - Fill in username, email, and password.

2. **Login:**  
   - Create a POST request to `/api/auth/login`.
   - Use your registered email and password.
   - Copy the returned `token`.

3. **Profile:**  
   - Create a GET request to `/api/auth/profile`.
   - In the Headers tab, add:
     ```
     Key: Authorization
     Value: Bearer <paste your token here>
     ```
   - Send the request to view your profile.

---

**Note:**  
- Make sure MongoDB is running.
- Change the JWT secret in `routes/auth.js` for production use.