![logo](mdi-react/src/images/MDI_logo.png "MyDailyImpact")

# Loading FastAPI (from AI), backend, and frontend servers to have the old version of the app’s chatbot render correctly

This is the old working version of the chatbot the AI team created before they made their more advanced RAG chatbot.

**NOTE: while having some responsiveness, this version of the app is not totally responsive. The purpose of this branch is to see what a functioning chatbot looks like on our app. To see our totally responsive app, please see the main branch.**

### Demo:

https://drive.google.com/file/d/1cSGiq3ByMm8vgTVGnIvWuB8nh9-nnmAY/view?usp=sharing

## Instructions to clone this branch, create and activate the virtual environment, and load the servers to view and use the chatbot:

### 1. Clone this branch of the project:

- `git clone -b old-version-chatbot https://github.com/TechLabs-Remote-Bootcamp/WS24-MyDailyImpact.git`
- open bash or terminal
- navigate to the project's directory (`cd WS24-MyDailyImpact`)


### 2. Create a virtual environment in the root of the project:

In the same bash or terminal:
- (Git Bash/Windows) `python -m venv venv`
- (macOS/Linux) `python3 -m venv venv`


### 3. Activate the virtual environment:

In the same bash or terminal:
- (GitBash) `source ./venv/Scripts/activate`
- (Windows) `venv\Scripts\activate`
- (macOS/Linux) `source venv/bin/activate`


### 4. Install dependencies:

In the same bash or terminal:
- `cd deeplearning/rag_pipeline/app`
- `pip install -r requirement.txt`


### 5. Create a .env file in the root directory with the following variables:

 ```
APP_PORT=5001
MONGODB_URI=mongodb_connection_string
JWT_SECRET=your_jwt_secret
MISTRAL_API_KEY=mistral_api_key

```
**NOTE: please contact the team lead Vivian (vivianmargothsandler@gmail.com) to acquire these private keys.**


### 6. Start the FastAPI server: 

In the same bash or terminal from step 4 (you should be in your virtual environment and in the directory deeplearning/rag_pipeline/app):
- `uvicorn main:app --host 0.0.0.0 --port 8000 --reload`


### 7. Start the backend server:

- open new bash or new terminal
- `cd backend`
- install dependencies (`npm install`)
- `npm run server`


### 8. Start the frontend/React development server:

- open new bash or new terminal
- `cd mdi-react`
- install dependencies (`npm install`)
- `npm run dev`

---

### Viewing the app in the browser

The app will be working at the address http://localhost:5173/

If your browser doesn’t open automatically, type that address in your browser.
