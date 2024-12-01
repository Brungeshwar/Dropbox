## Project Description

The goal of this project is to implement a simplified Dropbox-like application where users can upload and download files through a web interface. This web application is built using modern technologies and follows the requirements specified in the project description.

### Technologies Used

#### Frontend

- **Next.js**: I have used [Next.js](https://nextjs.org/) for building the frontend of this application. Next.js is a popular React framework that provides a fast and scalable architecture, with built-in features such as server-side rendering (SSR), static site generation (SSG), and API routes. It is ideal for building full-stack applications like this one.
- **TypeScript**: To enhance the development experience and maintainability, the frontend is written in **TypeScript**. TypeScript provides strong typing, which helps prevent errors and improves code quality.
- **Tailwind CSS**: For styling, I have used **Tailwind CSS**, a utility-first CSS framework that allows for fast and efficient styling by applying pre-defined utility classes directly to HTML elements. It provides responsive and customizable designs, making it ideal for building modern UIs quickly.

#### Backend

- **Node.js with Express**: The backend is built using **Node.js** with the **Express** framework. Express is a minimal and flexible Node.js web application framework that provides a robust set of features to build APIs. The backend exposes RESTful APIs for uploading, listing, and downloading files.
- **PostgreSQL**: The backend uses **PostgreSQL** as the database for storing file metadata (such as filenames, file types, and upload timestamps). PostgreSQL is a powerful, open-source relational database system that is well-suited for handling structured data in applications like this one. The database is run in a Docker container for easy setup and management.
- **Docker**: I have used **Docker** to run the PostgreSQL database container, ensuring that the database environment is portable, consistent, and easily reproducible across different systems. Docker helps in isolating the environment, making the setup process smoother.

#### Key Features

- **File Upload**: Users can upload files (such as `.txt`, `.jpg`, `.png`, `.json`, etc.) to the server. The backend handles storing the file and its metadata in the PostgreSQL database.
- **File Listing**: The frontend displays a list of all uploaded files, fetched from the backend API. Users can see their files, download them, and view them on a separate page.
- **File Viewing**: Users can click on any file in the list to view its content on a new page. Supported file formats include text files, images, and JSON files.

#### Docker and Database Setup

For the database, I have used the official **PostgreSQL Docker image**. This allows for a lightweight and easily configurable setup for the database without worrying about installation issues. The PostgreSQL database stores file metadata and is used by the backend for CRUD operations related to files. Docker simplifies the process of setting up and managing the PostgreSQL instance, ensuring a consistent environment across different systems.

---

With this setup, the application provides a seamless user experience for managing files and demonstrates a fully functioning full-stack solution.



## Setup Instructions

Follow these steps to set up the application locally with a PostgreSQL database and run both the backend and frontend applications.

### 1. Run PostgreSQL Container

In your terminal, run the following command to start a PostgreSQL container:

```bash
docker run --name postgres-container -e POSTGRES_USER=yourUsername -e POSTGRES_PASSWORD=yourPassword -e POSTGRES_DB=yourDatabaseName -p 5432:5432 -d postgres
```

This will create a Docker container running PostgreSQL with the specified username, password, and database name. Make sure to replace `yourUsername`, `yourPassword`, and `yourDatabaseName` with your desired values.

- `POSTGRES_USER`: The username for your PostgreSQL database.
- `POSTGRES_PASSWORD`: The password for your PostgreSQL user.
- `POSTGRES_DB`: The name of the database that will be created.

The database will be accessible at `localhost:5432`.

### 2. Backend Setup

#### Create `.env` File

In the **backend** directory, create a `.env` file (if it doesn't already exist) and add the PostgreSQL connection URL. The `.env` file should look like this:

```env
DATABASE_URL=postgres://yourUsername:yourPassword@localhost:5432/yourDatabaseName
```

Replace `yourUsername`, `yourPassword`, and `yourDatabaseName` with the values you set when starting the PostgreSQL container.

#### Install Backend Dependencies

Run the following command to install the required dependencies for the backend:

```bash
npm install
```

#### Run the Backend Application

Once the dependencies are installed, start the backend server by running:

```bash
npm start
```

The backend API will be running on `http://localhost:3001`.

### 3. Frontend Setup

#### Install Frontend Dependencies

Navigate to the **frontend** directory and install the required dependencies:

```bash
cd frontend
npm install
```

#### Run the Frontend Application

Start the frontend application by running:

```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`.

---

Now, both the backend and frontend applications should be running locally. You can visit the frontend in your browser and interact with the file management features.


