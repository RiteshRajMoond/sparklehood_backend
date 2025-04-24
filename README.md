# AI Safety Incident Log API

This is a simple RESTful API built with **Node.js** and **Express.js** using **MongoDB** for data persistence. The API is designed to log and manage hypothetical AI safety incidents.

---

## 🚀 Tech Stack
- **Language:** JavaScript (Node.js)
- **Framework:** Express.js
- **Database:** MongoDB (via Mongoose ORM)

---

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/RiteshRajMoond/sparklehood_backend
cd sparklehood_backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Variables
Create a `.env` file in the root directory with the following:
```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### 4. Run the Server
```bash
npm start
```
The server will start on `http://localhost:3000`

---

## 🛢️ Database Setup
MongoDB will automatically create the required schema based on the Mongoose model in `models/incident.js`.

To pre-populate the database with sample data:
```bash
node scripts/seed.js
```
This will insert a few example incidents into your database.

---

## 📡 API Endpoints
All endpoints return and accept JSON.

### 1. Get All Incidents
**GET** `/incidents`
```bash
curl http://localhost:3000/incidents
```

### 2. Get Incident by ID
**GET** `/incidents/:id`
```bash
curl http://localhost:3000/incidents/incident_id_here
```

### 3. Create a New Incident
**POST** `/incidents`
```bash
curl -X POST http://localhost:3000/incidents \
  -H "Content-Type: application/json" \
  -d '{"title":"Test","description":"Test incident","severity":"Low"}'
```

### 4. Delete Incident by ID
**DELETE** `/incidents/:id`
```bash
curl -X DELETE http://localhost:3000/incidents/incident_id_here
```

---

## 📌 Notes
- The `reported_at` field is automatically set when a new incident is created.
- The API validates the `severity` field to be one of: `Low`, `Medium`, or `High`.
- Appropriate HTTP status codes are used: `200 OK`, `201 Created`, `400 Bad Request`, `404 Not Found`, `500 Internal Server Error`.

---

## 💡 Design Decisions & Challenges
- Chose MongoDB for flexibility, utilizing Mongoose for schema validation.
- Added pagination in the `GET /incidents` endpoint to efficiently handle large datasets.
- Implemented error handling and validation to ensure robust API responses and proper status codes.

