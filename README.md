# Activity Booking System

A full-stack web application for managing and booking activities, built with Node.js, Express, and MongoDB.

## Features

- User Authentication (Signup/Login)
- Activity Management
- Booking System
- Email Notifications
- Secure Password Handling
- Input Validation
- CORS Enabled
- Cookie-based Authentication

## Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt for Password Hashing
- Nodemailer for Email Notifications
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
│   ├── middlewares/   # Custom middlewares
│   ├── validators/    # Input validation schemas
│   ├── lib/          # Utility functions
│   └── index.js      # Application entry point
├── package.json
└── seed.js           # Database seeding script
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

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

3. Create a `.env` file in the backend directory with the following variables:

```
PORT=5001
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
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
- POST `/api/activities` - Create new activity
- GET `/api/activities/:id` - Get activity by ID
- PUT `/api/activities/:id` - Update activity
- DELETE `/api/activities/:id` - Delete activity

### Bookings

- GET `/api/bookings` - Get all bookings
- POST `/api/bookings` - Create new booking
- GET `/api/bookings/:id` - Get booking by ID
- PUT `/api/bookings/:id` - Update booking
- DELETE `/api/bookings/:id` - Delete booking

## Security Features

- Password hashing using bcrypt
- JWT-based authentication
- Input validation using Joi
- CORS protection
- Secure cookie handling

## Development

The project uses nodemon for development, which automatically restarts the server when changes are detected.

## License

This project is licensed under the ISC License - see the LICENSE file for details.
