# Next.js Blogging Platform

This is a blogging platform built with Next.js, MongoDB, and TypeScript. The application allows users to create, read, update, and delete blog posts, with a dynamic carousel on the homepage showcasing the latest posts.

## Features

- **Server-Side Rendering (SSR)** for fast and SEO-friendly loading of pages.
- **CRUD Operations** for blog posts.
- **Dynamic Routing** to handle individual blog post pages.
- **Responsive Design** to ensure usability on various devices.
- **Client-Side Interactivity** for features like post deletion.
- **Carousel Display** of blog posts using Flickity.

## Technologies Used

- [Next.js](https://nextjs.org/) - A React framework for server-side rendering.
- [MongoDB](https://www.mongodb.com/) - A NoSQL database for storing blog posts.
- [TypeScript](https://www.typescriptlang.org/) - A superset of JavaScript for adding static types.
- [Flickity](https://flickity.metafizzy.co/) - A JavaScript library for creating carousels.
- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- MongoDB instance (local or hosted)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a .env.local file in the root directory and add your MongoDB connection URI:

```env
MONGODB_URI=your_mongodb_connection_string
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to http://localhost:3000 to see the application in action.

### API Endpoints

#### GET /api/posts

Fetch all blog posts.

#### DELETE /api/posts/

Delete a blog post by its ID.

## Folder Structure

```bash
/app
  /api
    /posts
      route.ts             # API routes for fetching and deleting posts
  /blogs
    [id]
      page.tsx             # Dynamic blog post page
    page.tsx               # Blog index page displaying all posts
  /components
    DeleteButton.tsx       # Button component for deleting posts
    HomepageCarousel.tsx    # Carousel component for displaying posts
  /lib
    fetchAllPosts.ts       # Function to fetch all posts from MongoDB
    mongodb.ts             # MongoDB connection logic
    types
      post.ts              # Type definitions for posts
```
