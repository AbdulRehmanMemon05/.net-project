# Task Management App

A task management application with user authentication, task creation, task management features, and application logging using Serilog.

---

## Project Description

The **Task Management App** is designed to simplify task organization and management. It provides features like user authentication, task CRUD operations, and a user-friendly dashboard. The application uses state-of-the-art technologies to ensure high performance, security, and code quality.

---

## Technology Stack

- **Backend**: ASP.NET Core 8
- **Frontend**: React.js
- **Database**: SQL Server with Entity Framework
- **Logging**: Serilog
- **Testing**: xUnit
- **Code Quality**: SonarQube
- **Version Control**: Git

---

## Features

### 1. User Authentication and Authorization
- Implement user registration, login functionality, and role-based access control (admin, regular user).

### 2. Task Management
- Create, read, update, and delete tasks.
- Assign tasks to users, set priorities, and categorize tasks with due dates.

### 3. Application Logging
- Use Serilog for logging important events, errors, and user activities throughout the application.

### 4. Database Integration with Entity Framework
- Use Entity Framework to access the SQL Server database.
- Design the schema to store user information, tasks, and related data.

### 5. Exception Handling
- Implement global exception handling to handle errors gracefully and provide meaningful error messages.

### 6. Unit Testing
- Write unit tests using xUnit for controllers, services, and data access layers.

### 7. SonarQube Integration
- Integrate SonarQube for code quality analysis and configure rules for both C# and JavaScript.

### 8. Frontend: React.js
- Create an interactive and responsive dashboard using React.js to display tasks, user profiles, and other relevant information.

### 9. Version Control with Git
- Use Git for version control, implementing proper branching and merging strategies.

---

## Application Screens

### 1. Sign Up / Log In
- **Components**: Signup Form, Login Form
- **Operations**:
  - User registration
  - Login functionality
  - Redirect to the main dashboard on successful login

### 2. Dashboard
- **Components**: Completed Task Count, InProgress Task Count, Pending Task Count
- **Operations**:
  - Display user-specific task count by status
  - Admins see all tasks

### 3. Task List
- **Components**: Task List with Filters, Link/Button to Create New Task
- **Operations**:
  - Fetch and display user tasks
  - Navigate to the task creation page

### 4. Task Detail
- **Components**: Task Detail
- **Operations**:
  - Fetch and display task details by task ID

### 5. New Task
- **Components**: Task Creation Form
- **Operations**:
  - Create or update tasks

### 6. User Profile
- **Components**: User Details, Logout Button
- **Operations**:
  - Display user info
  - Logout functionality

---

## Steps to Build

1. Create a new ASP.NET Core 8 project.
2. Set up the React.js frontend with React Router and state management.
3. Implement user authentication (JWT, Role-based) and authorization in the backend.
4. Set up Entity Framework for database access and design the schema for users and tasks.
5. Integrate Serilog for logging throughout the application.
6. Add unit tests for controllers, services, and data access layers using xUnit.
7. Integrate SonarQube for code quality analysis.
8. Implement Git version control, establish proper branching and merging strategies.
9. Test the application end-to-end, ensuring task management features are working as expected.
10. Deploy the application to a server or cloud platform.

---

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/AbdulRehmanMemon05/.net-project.git
   ```

2. Navigate to the backend folder and run the application:
   ```bash
   cd Backend
   dotnet run
   ```

3. Navigate to the frontend folder and start the React app:
   ```bash
   cd Frontend
   npm install
   npm start
   ```

4. Access the application at `http://localhost:3000`.

---

## Contribution

Contributions are welcome! Please fork this repository and submit a pull request for any enhancements or bug fixes.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For any questions or feedback, please reach out to [Abdul Rehman](https://github.com/AbdulRehmanMemon05).
