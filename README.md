# 🧑‍💻 Cypress Automated Testing for Web & API 🌐

This project automates the **testing of Web UI and API** using **Cypress**. It tests the API from https://reqres.in/api and UI interactions from https://the-internet.herokuapp.com/.

## 📌 Features
- **✅ API Testing**: Verifies REST API responses, status codes, and data structure using https://reqres.in/api.
- **✅ UI Testing**: Automates interactions with dynamic web elements and validates UI behavior on https://the-internet.herokuapp.com/.
- **✅ Cypress for Full-Stack Testing**: Robust testing framework for both Frontend and Backend.
- **✅ Page Object Model (POM)**: Clear and maintainable structure for web interactions.
- **✅ CI/CD Integration**: Seamlessly integrates with GitHub Actions for continuous testing.

---

## 🛠️ Installation & Setup

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/LumboIshinaja/web_cypress_tests.git
cd web_cypress_project
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

---

## 🏃 Running Tests

### **✅ Run All Tests**
```sh
npx cypress run
```

### **✅ Run Only API Tests**
```sh
npx cypress run --spec cypress/e2e/apiTests/
```

### **✅ Run Only UI Tests**
```sh
npx cypress run --spec cypress/e2e/uiTests/
```

### **✅ Open Cypress Test Runner**
```sh
npx cypress open
```

---

## 👤 CI/CD with GitHub Actions
The project includes **GitHub Actions** workflow to **automatically run tests** on every **push to `main`** and **pull request**:
- Located in `.github/workflows/ci.yml`

### **CI/CD Setup Summary:**
1. Automatically runs on **push to `main`** and **PRs targeting `main`**.
2. **API & UI tests** executed in a **Linux environment**.

---

## 📂 Project Structure

```
cypress/
│── .github/                     # CI/CD Workflows
│   └── workflows/
│       └── ci.yml               # GitHub Actions config
│
│── e2e/                         # Test Suites
│   ├── apiTests/                # API Test Suites
│       ├── deleteUser.spec.js   
│       ├── getUsers.spec.js   
│       ├── patchUser.spec.js
│       ├── postUser.spec.js
│       └── putUser.spec.js
│    
│   ├── uiTests/                 # UI Test Suites
│       ├── addRemElem.spec.js
│       ├── dropDown.spec.js
│       └── uploadFile.spec.js
│   
│── fixtures/                    # Test Data
│   ├── register.json            # Data for user registration tests
│   ├── uploadFile.json          # File upload data
│── support/                     # Support Files
│   ├── commands.js              # Custom commands
│   ├── e2e.js                   # Setup for environment configuration
│   ├── index.js                 # Common setup
│   ├── schemaValidator.js       # Schema validation functions
│   └── schemas/                 # Schema definitions
│       └── allSchemas.js        # All schemas for API responses
│
│── pages/                       # Page Object Model (POM) Files
│   ├── addRemoveElementsPage.js # Add/Remove Elements page
│   ├── dropDownPage.js          # Drop Down page
│   └── fileUploadPage.js        # File Upload page
│
│
├── cypress.config.js            # Cypress configuration file
├── package-lock.json            # Lock file for installed dependencies
├── package.json                 # Node dependencies and scripts
├── README.md                    # Project documentation
```

---


## 📢 Creator
- **Milos Jovanovic** - Test Engineer

---