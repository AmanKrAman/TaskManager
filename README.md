﻿# TaskManager

Clone the Repository
1. Open your terminal or command prompt.
2. Clone this repository to your local machine using the following command:
   <code> git clone <repository_url> </code>
3. Installing Dependencies:
   a. Navigate to the project directory: cd backend.
   b. In the terminal, run the following command to install the project's dependencies(for both frontend and backend): npm install Note: follow same process for frontend as well(go to project directory, then cd frontend,and then npm install.
   c. Backend setup a. Create a .constant file in the project directory in the backend. b. Inside the constant file, add the following lines, replacing <your_mongodb_uri> and <your_secret_key> with your actual MongoDB URI and secret key: MONGODB_URI=<your_mongodb_uri> SECRET_KEY=<your_secret_key>
   Running the Application:
   a. After the dependencies are installed, start the application with the following command: npm run dev.
   b. The application should now be running locally. You can access it in your web browser at http://localhost:3000.
