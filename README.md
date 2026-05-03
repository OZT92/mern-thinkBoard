# MERN ThinkBoard

A full-stack note-taking application built with the MERN stack (MongoDB, Express, React, Node.js). It features a modern, responsive UI built with Tailwind CSS and DaisyUI, and includes API rate limiting using Upstash Redis.

## Features

- **Create, Read, Update, Delete (CRUD) Notes**: Easily manage your thoughts and notes.
- **Modern UI**: Styled with Tailwind CSS and DaisyUI for a beautiful and responsive user experience.
- **Rate Limiting**: Protects the API from abuse using Upstash Redis sliding window rate limiting (100 requests / 60 seconds).
- **Production Ready**: Configured to serve the built frontend through the Express backend in production mode.

## Tech Stack

### Frontend
- [React 19](https://react.dev/) (via [Vite](https://vitejs.dev/))
- [Tailwind CSS 4](https://tailwindcss.com/) & [DaisyUI](https://daisyui.com/)
- [React Router](https://reactrouter.com/) for navigation
- [Axios](https://axios-http.com/) for API requests
- [Lucide React](https://lucide.dev/) for icons
- [React Hot Toast](https://react-hot-toast.com/) for notifications

### Backend
- [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
- [@upstash/redis](https://upstash.com/) & [@upstash/ratelimit](https://github.com/upstash/ratelimit) for rate limiting

## Prerequisites

- Node.js installed
- MongoDB database (local or Atlas)
- Upstash Redis database (for rate limiting)

## Setup Instructions

1. **Clone the repository:**
   `git clone https://github.com/OZT92/mern-thinkBoard.git`
   `cd mern-thinkBoard`

2. **Environment Variables:**
   Create a `.env` file in the `backend/` directory and add the following variables:
   ```env
   PORT=5001
   MONGO_URI=your_mongodb_connection_string
   UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
   UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
   NODE_ENV=development # Set to 'production' when running in production
   ```

3. **Install dependencies and build:**
   The root `package.json` includes a script to install dependencies for both the frontend and backend, and build the frontend:
   `npm run build`

## Running Locally

### Development Mode

To run the frontend and backend development servers separately:

**Backend:**
`cd backend`
`npm run dev &`
*(Remove the `&` to run in foreground)*

**Frontend:**
`cd frontend`
`npm run dev &`
*(Remove the `&` to run in foreground)*

### Production Mode

To run the application as it would in production (serving the built React app from the Express server):

1. Ensure `NODE_ENV=production` is set in your `.env` file.
2. Run the build script (if you haven't already):
   `npm run build`
3. Start the server:
   `npm run start` (or `node src/server.js` in the `backend/` directory)
   The app will be available at `http://localhost:5001`.

## License

ISC
