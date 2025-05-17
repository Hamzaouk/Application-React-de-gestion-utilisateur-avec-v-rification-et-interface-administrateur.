<div align="center">

# MERN AUTH 🔐
A complete Authentication system that includes Email Verification and Password Reset Feature using a secure 6 digit OTP sent directly to user's email address.

</div><br /><hr /><br />

<div align="center">

## LIVE - DEMO 🌐
  
**UI** 👉 [LINK](https://mern-auth-client-seven.vercel.app/)
</div>

<br/><hr/><br/>

## Project Overview
This project is a **complete Authentication System** that includes the following features:
- **Email Verification**: Securely verify user email addresses.
- **Password Reset**: Allow users to reset their passwords using a secure 6-digit OTP sent directly to their email.

The system is built using the **MERN Stack (MongoDB, Express, React, Node.js)** and incorporates **JWT (JsonWebToken)** for secure authentication. 

## Features
1. **Backend Server**:
   - APIs to handle user authentication requests.
   - **Email Verification** using OTP.
   - **Password Reset** functionality with OTP.
   - Secure user authentication and authorization using **JWT**.

2. **Frontend Application**:
   - **React** and **Tailwind CSS** for a responsive and user-friendly interface.
   - Forms for:
     - Login
     - Registration
     - Password Reset with OTP input.
   - Integration with backend APIs for full-stack functionality.

---

## Tech Stack
- **Backend**:
  - **Node.js**: Server-side runtime.
  - **Express.js**: Framework for building APIs.
  - **MongoDB**: NoSQL database for storing user data.
  - **JWT**: Token-based authentication.
  
- **Frontend**:
  - **React**: JavaScript library for building user interfaces.
  - **Tailwind CSS**: Utility-first CSS framework for styling.

---

## Installation and Setup

### Prerequisites
- Node.js installed
- MongoDB database setup
- A valid email address for testing email verification (e.g., Gmail SMTP or other services)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```bash
   cd server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure environment variables:
   Create a `.env` file in the backend directory and add:
   ```env
   PORT=4000
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   SMTP_EMAIL=<your-email>
   SMTP_PASSWORD=<your-email-password>
   ```
5. Start the backend server:
   ```bash
   npm run server
   ```
   The backend server will run on `http://localhost:4000`.

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm run dev
   ```
   The frontend app will run on `http://localhost:5173`.

---

## Project Structure

### Backend
```
backend/
├── models/             # Mongoose models
├── routes/             # Express routes
├── controllers/        # Logic for handling requests
├── utils/              # Utility functions (e.g., email sender)
├── middleware/         # Middleware for authentication
├── config/             # Configuration files
└── server.js           # Entry point
```

### Frontend
```
frontend/
├── src/
│   ├── assets/         # Static assets (e.g., images, templates)
│   │   ├── arrow_icon.svg
│   │   ├── bg_img.png
│   │   ├── emailTemplates.js
│   │   ├── favicon.svg
│   │   ├── hand_wave.png
│   │   ├── header_img.png
│   │   ├── lock_icon.svg
│   │   ├── logo.svg
│   │   ├── mail_icon.svg
│   │   ├── person_icon.svg
│   │   └── react.svg
│   ├── components/     # Reusable UI components
│   │   ├── Header.jsx
│   │   └── Navbar.jsx
│   ├── context/        # App context and state management
│   │   └── AppContext.jsx
│   ├── pages/          # Page components
│   │   ├── EmailVerify.jsx
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── ResetPassword.jsx
│   ├── App.jsx         # Main App component
│   ├── index.css       # Global styles
│   └── main.jsx        # Application entry point
```

---

## Usage
- **Register**: Create a new account by filling out the registration form. A 6-digit OTP will be sent to the provided email for verification.
- **Login**: Authenticate using your email and password.
- **Password Reset**: Request a password reset by entering your email. Verify your identity using the OTP sent to your email.

---

## Future Enhancements
- Add multi-factor authentication (MFA).
- Enhance security with rate limiting and captcha.
- Add support for social login (e.g., Google, Facebook).

---

## License
This project is licensed under the [MIT License](https://github.com/elyse502/mern-auth/blob/main/LICENSE).

---

## Contact
For any questions or support, please contact:
- [**NIYIBIZI Elysée**](https://linktr.ee/niyibizi_elysee)👨🏿‍💻 | [Github](https://github.com/elyse502) | [Linkedin](https://www.linkedin.com/in/niyibizi-elys%C3%A9e/) | [Twitter](https://twitter.com/Niyibizi_Elyse).
- **Email**: <elyseniyibizi502@gmail.com>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/niyibizi-elys%C3%A9e/) [![@phenrysay](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/Niyibizi_Elyse) [![pH-7](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/elyse502)

<br /><hr /><br />





