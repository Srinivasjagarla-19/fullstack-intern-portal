# 🚀 Full Stack Intern Portal

This project is a full-stack intern dashboard built for a fundraising portal as part of the Full Stack Developer Internship (Round 1 Task). It demonstrates frontend design, backend API integration, and MongoDB-based data handling.

## 🛠️ Tech Stack

| Layer     | Technology                |
|-----------|--------------------------|
| Frontend  | HTML, CSS, JavaScript    |
| Backend   | Flask (Python)           |
| Database  | MongoDB Atlas (Cloud NoSQL) |

## 📁 Project Structure

```
/frontend        → Contains static HTML/CSS/JS files
/backend         → Contains Flask server files
│
├── app.py       → Main Flask app
├── db_config.py → MongoDB connection settings
├── templates/   → HTML templates if using Jinja
├── static/      → Static assets (optional)
├── requirements.txt
```

## ⚙️ Setup Instructions

### 🔹 Frontend

Navigate to the `frontend` directory:

```bash
cd frontend
```

Open `index.html` in your browser directly:

Open `index.html` in any modern browser.

### 🔹 Backend

Navigate to the `backend` directory:

```bash
cd backend
```

Install Python dependencies:

```bash
pip install -r requirements.txt
```

Configure MongoDB Atlas:

- Open `db_config.py`
- Replace the URI string with your MongoDB Atlas connection string

Run the Flask server:

```bash
python app.py
```

Visit the app in your browser:

[http://127.0.0.1:5000/](http://127.0.0.1:5000/)

## ✅ Features

- Dummy login/signup screen (UI only)
- Dashboard with:
  - Intern name
  - Dummy referral code (e.g., srinivas2025)
  - Total donations raised (from MongoDB Atlas)
  - Static rewards/unlockables section
- Flask backend with API endpoints
- MongoDB Atlas used for storing dummy data
