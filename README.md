# 🚀 Full Stack Intern Portal
<br>
<h2>Live Demo : </h2> <h3>https://fullstack-intern-portal-2.onrender.com/</h3>
This project is a full-stack intern dashboard built for a fundraising portal as part of the Full Stack Developer Internship (Round 1 Task). It demonstrates frontend design, backend API integration, and Local Storage - based data handling.

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
login <br>
<img width="1914" height="1079" alt="image" src="https://github.com/user-attachments/assets/f2740175-d721-4c6c-813c-8fe4ea8f0d25" />

Signup <br>
<img width="1919" height="1068" alt="image" src="https://github.com/user-attachments/assets/3042e16a-d7d2-44e6-9bc1-f72e6c9af06e" />

Open `index.html` in your browser directly:

Open `index.html` in any modern browser.

### 🔹 Backend

Navigate to the `backend` directory:

```bash
cd backend
```
Dashboard <br>
<img width="1329" height="968" alt="image" src="https://github.com/user-attachments/assets/1eb9b188-b318-4a29-b9bb-c9a37e99788f" />
LeaderBoard <br>
<img width="1917" height="1084" alt="image" src="https://github.com/user-attachments/assets/c9a4d970-459b-43dc-b75e-8c3ad088f355" />

Install Python dependencies:

```bash
pip install -r requirements.txt
```

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
  - Dummy referral code (e.g., sheCanFoundation2025)
  - Total donations raised (from MongoDB Atlas)
  - Static rewards/unlockables section
- Flask backend with API endpoints
- Local Storage used for storing dummy data
