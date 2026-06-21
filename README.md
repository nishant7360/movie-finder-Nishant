# MovieFinder

A modern movie discovery web application built with Next.js, React, and Tailwind CSS. Search for movies, view detailed information, and save your favorite movies locally.

## Features

- 🎬 Search for movies using the OMDB API
- 💾 Save and manage favorite movies
- 📱 Responsive design optimized for all devices
- ⚡ Fast performance with Next.js
- 🎨 Beautiful UI with Tailwind CSS

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- An **OMDB API key** - Get a free key from [omdbapi.com](http://www.omdbapi.com/apikey.aspx)

## Installation

### 1. Clone or navigate to the project directory

```bash
cd movie-finder
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

### 3. Set up environment variables

Create a `.env.local` file in the root directory of the project:

```bash
# For Windows (PowerShell)
New-Item -Name ".env.local" -Type File

# For Windows (Command Prompt)
type nul > .env.local

# For Mac/Linux
touch .env.local
```

Add your OMDB API key to `.env.local`:

```
NEXT_PUBLIC_OMDB_API_KEY=your_api_key_here
```

Replace `your_api_key_here` with your actual OMDB API key.

## Running Locally

### Development Mode

To run the application in development mode with hot reloading:

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will start at `http://localhost:3000`

### Production Mode

To build and run the application for production:

```bash
npm run build
npm start
```

or with yarn:

```bash
yarn build
yarn start
```

### Linting

To check for code issues:

```bash
npm run lint
```

or with yarn:

```bash
yarn lint
```

## Project Structure

```
movie-finder/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.jsx         # Root layout
│   ├── page.jsx           # Home page
│   └── movie/
│       └── [id]/
│           └── page.jsx   # Movie detail page
├── components/            # Reusable React components
│   ├── EmptyState.jsx
│   ├── ErrorState.jsx
│   ├── Footer.jsx
│   ├── Loading.jsx
│   ├── MovieCard.jsx
│   ├── MovieGrid.jsx
│   ├── Navbar.jsx
│   ├── Pagination.jsx
│   └── SearchBar.jsx
├── hooks/                 # Custom React hooks
│   └── useFavorites.js   # Favorites management hook
├── lib/                   # Utility functions
│   └── omdb.js           # OMDB API integration
├── package.json           # Project dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── postcss.config.js      # PostCSS configuration
```

## Technologies Used

- **Next.js** - React framework for production
- **React** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Lucide React** - Icon library

## Troubleshooting

### Port 3000 is already in use

If port 3000 is already occupied, you can run on a different port:

```bash
npm run dev -- -p 3001
```

### API key errors

- Make sure your `.env.local` file is properly configured
- Verify your OMDB API key is correct
- Restart the development server after adding the API key
- Check that you're using `NEXT_PUBLIC_OMDB_API_KEY` (not a different name)

### Dependencies installation issues

Try clearing the cache and reinstalling:

```bash
# Using npm
npm cache clean --force
rm -r node_modules package-lock.json
npm install

# Using yarn
yarn cache clean
rm -r node_modules yarn.lock
yarn install
```

## Support

For issues with the OMDB API, visit [omdbapi.com](http://www.omdbapi.com/)

For Next.js documentation, visit [nextjs.org](https://nextjs.org/docs)

## License

This project is open source and available under the MIT License.
