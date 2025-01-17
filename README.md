# User Management Application

This project is a simple **User Management Application** built using Node.js, Express, MongoDB, and EJS templating engine. The application allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a database of users.

## Features

- **Create Users**: Add new users with name, email, and image URL.
- **Read Users**: View a list of all users in the database.
- **Update Users**: Edit user details such as name, email, or image.
- **Delete Users**: Remove users from the database.
- **Responsive UI**: A clean and user-friendly interface for managing users.

## Project Structure
project-folder/
├── models/ │ 
  └── user.js # MongoDB User schema and model
├── public/ │ 
  ├── images/ # Public image assets │ 
  ├── javascripts/ # Public JavaScript files │
  └── stylesheets/
    └── style.css # Application styles 
├── views/ │
  ├── index.ejs # View for creating a user │
  ├── read.ejs # View for displaying all users │
  ├── edit.ejs # View for updating a user
├── app.js # Main application file 
└── package.json # Node.js dependencies and scripts


## Installation and Setup

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.
- [MongoDB](https://www.mongodb.com/) running locally or in the cloud.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/user-management-app.git
   cd user-management-app
2. Install dependencies:
     npm install
3. Start MongoDB: Make sure your MongoDB server is running locally on mongodb://localhost:27017.
4. Start the application:
      bash
     node app.js
5. Open your browser and navigate to http://localhost:3000

Application Routes
GET / - Home page to create a new user.
POST /create - Create a new user in the database.
GET /read - View all users.
GET /edit/:userid - Load the update user form.
POST /update/:userid - Update an existing user's details.
GET /delete/:id - Delete a user from the database.

Technologies Used
Backend: Node.js, Express.js
Database: MongoDB (Mongoose for schema and queries)
Frontend: EJS templating engine, HTML, CSS
Styling: CSS (custom styles in style.css)
