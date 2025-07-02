# 🌿 Plant Disease Prediction System

A modern, responsive, AI-powered web application for predicting plant diseases. This Flask-based system enables users to upload leaf images and receive real-time disease diagnoses using machine learning, helping improve crop health and agricultural productivity.

---

## 🌱 About

The Plant Disease Prediction App allows users—farmers, researchers, and agricultural professionals—to:

* 🧠 **Predict plant diseases from leaf images**
* 📸 **Upload images via an intuitive UI**
* 📊 **Receive accurate AI-based predictions**
* 📱 **Use it seamlessly on mobile or desktop devices**

Built with machine learning, this app is a practical tool for improving disease management in agriculture.

---

## 🚀 Features

* **AI-Based Predictions** using trained ML models
* **Green Agricultural Theme** for UI
* **Mobile-Responsive Interface**
* **Real-Time Result Display**
* **Clean, Accessible Design**
* **Fast Flask Backend**

---

## 🛠️ Technologies Used

* **Flask (Python)** – Backend web framework
* **HTML5, CSS3, JavaScript** – Frontend interface
* **Bootstrap 5** – Responsive layout and design
* **Scikit-learn / TensorFlow** – Machine learning integration
* **OpenCV / PIL** – Image preprocessing
* **Jinja2** – Template rendering engine
* **SQLite / CSV** – Lightweight storage or database options

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repo-url>
   cd plant-disease-prediction
   ```

2. **Create a virtual environment & install dependencies:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # or venv\Scripts\activate (Windows)
   pip install -r requirements.txt
   ```

3. **Run the Flask app:**

   ```bash
   python app.py
   ```

4. **Access the app:**
   Open your browser and go to `http://127.0.0.1:5000/`

---

## 🏗️ Project Structure

```
plant-disease-prediction/
├── static/
│   ├── css/
│   │   └── style.css
│   └── assets/
├── templates/
│   ├── index.html
│   ├── dashboard.html
│   └── result.html
├── model/
│   └── disease_model.pkl
├── app.py
├── utils.py
├── requirements.txt
└── README.md
```


### Typography

* **Font**: `"Segoe UI", Tahoma, Geneva, Verdana, sans-serif`
* **Scalable Text**: Adjusts to all screen sizes
* **High Contrast**: Optimized for visibility outdoors

---

## 📸 Prediction Flow

1. Upload a plant leaf image
2. Backend processes and feeds it to the ML model
3. Model returns predicted disease with confidence
4. Result displayed in an easy-to-read format

---

## 📱 Device Compatibility

Fully responsive for:

* ✅ Desktop
* ✅ Tablet
* ✅ Smartphone

---

## 🧪 ML Model Overview

* **Model Type**: CNN / Random Forest / Custom
* **Format**: `.pkl` or `.h5`
* **Accuracy**: ~90-95% (example)
* **Input**: Preprocessed leaf image
* **Output**: Disease name and confidence

---

## 🔧 Developer Scripts

* `python app.py` – Run the server
* `pip install -r requirements.txt` – Install dependencies
* `flask run` – Alternative Flask command

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/new`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to GitHub (`git push origin feature/new`)
5. Open a Pull Request

---

## 📄 License

This project is open-source and licensed under the MIT License.
See the `LICENSE` file for full details.

