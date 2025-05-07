# Activity Booking System

A backend application for managing activities and bookings, built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Signup/Login/Logout)
- Activity Listing
- Booking Management
- Protected Routes
- Input Validation

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for Password Hashing
- Joi for Input Validation
- CORS for Cross-Origin Resource Sharing
- Cookie Parser for Cookie Management

## Project Structure

```
backend/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── middlewares/   # Authentication middleware
│   ├── validators/    # Input validation schemas
│   ├── lib/          # Database connection
│   └── index.js      # Application entry point
├── package.json
└── seed.js           # Database seeding script
```

## Prerequisites

- Node.js
- MongoDB
- npm

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
cd backend
npm install
```

3. Create a `.env` file in the backend directory:

```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

4. Start the development server:

```bash
npm run dev
```

The server will start running on http://localhost:5001

## API Endpoints

### Authentication

- POST `/api/auth/signup` - Register a new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user

### Activities

- GET `/api/activities` - Get all activities

### Bookings

- POST `/api/bookings/create-booking` - Create new booking (Protected)
- GET `/api/bookings/my-bookings` - Get user's bookings (Protected)

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Input validation using Joi
- Protected routes using middleware
- CORS protection
- Cookie-based authentication

## Development

The project uses nodemon for development, which automatically restarts the server when changes are detected.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
