<div align="center">
  <h1 align="center">Job Portal</h1>
</div>
<h4>
    Job Portal is an free and open source platform, designed to help job seekers find suitable employment opportunities and employers post job listings efficiently.
    build with React, Node, Express, MongoDB and TailwindCSS.
</h4>

<div align="center">
  <a href="https://www.jobportal.io"></a>
</div>

## Features

- People can register as job seekers, build their profiles, and look for jobs matching their skill sets.
- Users can upload their existing resumes. If they do not have one, they should be able to fill out a form and have a resume built for them.
- People can apply directly to posted jobs.
- Companies can register, post jobs, and search job seeker profiles.
- Multiple representatives from a company should be able to register and post jobs.
- Company representatives can view a list of job applicants and can contact them, initiative an interview, or perform some other action related to their post.
- Registered users should be able to search for jobs and filter the results based on location, required skills, salary, experience level, etc

## Screenshots

#### Sign In
<img width="1512" alt="image" src="https://github.com/drbarzaga/JobPortal/assets/12173976/676ddd8e-f9bb-4fc1-810f-fcde07817348">

#### Sign Up
<img width="1512" alt="image" src="https://github.com/drbarzaga/JobPortal/assets/12173976/818dc01f-7915-42da-914c-2b011bcbfa60">

#### Forgot Password
<img width="1512" alt="image" src="https://github.com/drbarzaga/JobPortal/assets/12173976/362e5330-e25b-4591-a1f1-20c87a7d4836">

#### Home Page as Guest
<img width="1512" alt="image" src="https://github.com/drbarzaga/JobPortal/assets/12173976/42526467-2b0a-4138-b0aa-f546d4735004">

## Tech Stack

- [React](https://react.dev/) - Frontend UI Library
- [Vite](https://vitejs.dev/) - Frontend Tooling
- [Express](https://expressjs.com) - Backend Framework
- [Typescript](https://www.typescriptlang.org/) – Language
- [Tailwind](https://tailwindcss.com/) – CSS
- [MongoDB](https://www.mongodb.com/) - Database
- [Mogoose](https://mongoosejs.com/) - Database ODM
- [Axios](https://axios-http.com/) - Promise based Http Client
- [Formik](https://formik.org/) - Form handler
- [Zustand](https://zustand-demo.pmnd.rs/) - State Management

## Getting Started

### Prerequisites

Here's what you need to be able to run Job Portal:

- Node.js (version>=18.18.0)
- Docker

### 1. Clone Repository

```shell
git clone git@github.com:drbarzaga/job-portal.git
cd job-portal
```

### 2. Environment

#### Client Environment

You need to create a `.env` file inside the `client` folder, and define the following env variables there:

```shell
VITE_API_URL=http://localhost:5555/api/v1
```

#### Server Environment

You need to create a `.env` file inside the `server` folder, and define the following env variables there:

```shell
PORT=5555  #API -> http://localhost:5555
NODE_ENV=development
JWT_SECRET=yourJwtSecret
MONGO_URL=mongodb://localhost:27017/job-portal #With docker use this mongodb://job-portal-mongo:27017/job-portal
```

### 2. Running in docker (Recommended)

```shell
docker-compose up
```

### 3. Running locally
Using npm
```bash
npm install
npm run install:all
npm run dev
```

Using yarn
```bash
yarn install
yarn run install:all
yarn run dev
```

> If you're going to run the application locally, make sure you have MongoDB installed on your computer and add the `MONGO_URL` environment variable to the server's `.env` file.

### 4. Open App in your browser

Visit [http://localhost:5137](http://localhost:5137) in your browser.

## Contributing

Job Portal is an open-source project and we welcome contributions from the community.

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

### Our Contributors ✨

<a href="https://github.com/drbarzaga/job-portal/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=drbarzaga/job-portal" />
</a>
