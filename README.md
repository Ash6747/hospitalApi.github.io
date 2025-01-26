# 🌟 Hospital API

**A RESTful API for managing doctors, patients, and medical reports efficiently.**

🚀 **[Hosted API](https://hospital-api-25pg.onrender.com)** | 💻 **Local Setup Guide Below**

---

## 🛠️ Installation and Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/Ash6747/hospitalApi.github.io.git
   cd hospitalApi.github.io
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Server:**
   ```bash
   nodemon index.js
   ```

   ⚠️ *Ensure `nodemon` is installed globally or use `npx nodemon index.js`.*

---

## 📖 API Endpoints

### Base URL: `http://localhost:8000/api/v1`

#### 🩺 Doctor Management
- **Doctor Registration**
  - **Endpoint:** `/doctor/register`
  - **Method:** `POST`
  - **Payload:** `{ "name": "string", "email": "string", "password": "string" }`
  - **Description:** Register a new doctor.

- **Doctor Login**
  - **Endpoint:** `/doctor/login`
  - **Method:** `POST`
  - **Payload:** `{ "email": "string", "password": "string" }`
  - **Description:** Authenticate a doctor and receive a token.

#### 👥 Patient Management
- **Patient Registration**
  - **Endpoint:** `/patients/register`
  - **Method:** `POST`
  - **Payload:** `{ "name": "string", "phoneNumber": "string" }`
  - **Description:** Register a new patient.

- **Create Patient Report**
  - **Endpoint:** `/patients/:id/create_report`
  - **Method:** `POST`
  - **Payload:** `{ "status": "string", "details": "string" }`
  - **Description:** Create a medical report for a patient identified by `id`.

- **Get All Patient Reports**
  - **Endpoint:** `/patients/:id/all_reports`
  - **Method:** `GET`
  - **Description:** Retrieve all medical reports for a specific patient.

#### 📋 Report Management
- **Fetch Reports by Status**
  - **Endpoint:** `/reports/:status`
  - **Method:** `GET`
  - **Description:** Retrieve all reports filtered by their status.

---

## ⚙️ Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT)

---

## 🎯 Features

- 🔒 Secure authentication for doctors.
- 📁 Manage patient registrations and medical reports.
- 📊 Filter reports based on their status.
- ⚡ High performance and scalability.

---

## ✅ Testing

Run unit and integration tests:
```bash
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

---

## 📜 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

👤 **Author:** [Ash6747](https://github.com/Ash6747)

Have questions? Feel free to open an issue or contact me!

