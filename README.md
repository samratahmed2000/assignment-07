# বাজার দর (BazarDor)

## Description

**BazarDor (বাজার দর)** is a Bangla-focused product price comparison platform designed to help users explore product prices, understand market trends, and make more informed purchasing decisions. The platform provides a convenient way to browse products, examine available price ranges, and identify products whose prices are increasing or decreasing, making it easier for users to stay informed about changing market conditions.

BazarDor features dedicated sections for rising and falling prices, allowing users to discover price movements and compare product information more efficiently. Its product sorting functionality enhances the browsing experience by helping users organize listings and find relevant products with greater ease. By bringing product information and price trends together in one platform, BazarDor aims to make market price exploration more accessible and user-friendly for Bangla-speaking consumers.

The platform also includes a secure, user-friendly authentication system powered by **Better Auth**, supporting email and password authentication as well as Google and GitHub sign-in options. Registered users can access their accounts, view their profile information, and update their personal details through the profile management features.

Built with **Next.js, React, and TypeScript**, BazarDor uses a modern web development architecture to deliver a responsive and maintainable user experience. Better Auth integrates with MongoDB for authentication data storage, while React Icons provides interface icons, React Toastify handles toast notifications, and `react-marquee-text` supports scrolling text elements within the interface.

Overall, BazarDor combines product price comparison, market price movement tracking, intuitive product browsing, and user account management in a single web application. Its goal is to help users better understand product pricing and navigate market information with greater convenience and confidence.

🌐 **Live Demo:** [https://bazardor-assignment-07.vercel.app](https://bazardor-assignment-07.vercel.app)

## Key Features

1. **Product price comparison** — explore product details and compare available price ranges to better understand market prices.
2. **Rising and falling prices** — browse dedicated sections highlighting products whose prices have increased or decreased.
3. **Multiple sign-in options** — create an account or sign in using email and password, Google, or GitHub.
4. **Product sorting** — sort product listings to make it easier to browse and compare items.
5. **User profile management** — view and edit profile information.

## Technologies Used

The following technologies and libraries are referenced in the provided source code:

- **Next.js** — application framework and routing (App Router)
- **React** — UI components
- **TypeScript** — typed application code
- **Better Auth** — authentication, including email/password and Google/GitHub providers
- **MongoDB** — authentication data storage through the Better Auth MongoDB adapter
- **React Icons** — interface icons
- **React Toastify** — toast notifications
- **react-marquee-text** — marquee text component

## Live Project

Visit the deployed application: [বাজার দর — BazarDor](https://bazardor-assignment-07.vercel.app)

## Run Locally

Follow these steps to run BazarDor on your local machine.

### Prerequisites

Make sure you have the following installed and configured:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- npm (included with Node.js)
- A MongoDB database (local instance or MongoDB Atlas)
- Better Auth credentials for Google and GitHub sign-in, if you want to use those providers

### 1. Clone the Repository

```bash
git clone <github repository url>
cd <your-project-folder>
```

Replace the placeholders with your Git repository URL and project directory name.

### 2. Install Dependencies

Install the project dependencies using npm:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root and add the environment variables required by your application.

For example:

```env
BETTER_AUTH_SECRET=your_secure_secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
```

Configure your Google and GitHub OAuth credentials according to your Better Auth implementation. Use the exact variable names expected by your source code for the OAuth client IDs and secrets.

**Important:** The variable names above are examples. Check your project's configuration files to confirm the required names and values. Never commit secrets or credentials to version control.

### 4. Start the Development Server

Run the following command:

```bash
npm run dev
```

### 5. Open the Application

Visit the following URL in your browser:

```text
http://localhost:3000
```

The BazarDor application should now be available locally.

### 6. Build for Production (Optional)

To verify that the application can be built for production, run:

```bash
npm run build
```

After a successful build, start the production server with:

```bash
npm run start
```

### Troubleshooting

- **Missing dependencies:** Run `npm install` and check that the required dependencies are listed in `package.json`.
- **Database connection errors:** Verify your MongoDB connection string and database access permissions.
- **Authentication errors:** Check your Better Auth configuration, secret, base URL, and OAuth provider credentials.
- **Missing environment variables:** Compare `.env` with the variables referenced in your application code.

The source code expects these environment variables for authentication and database connectivity:

| Variable               | Purpose                      |
| ---------------------- | ---------------------------- |
| `BETTER_AUTH_URL`      | Base URL used by Better Auth |
| `MONGODB_URL`          | MongoDB connection string    |
| `GOOGLE_CLIENT_ID`     | Google OAuth client ID       |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret   |
| `GITHUB_CLIENT_ID`     | GitHub OAuth client ID       |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth client secret   |

Configure these values in your local environment or deployment platform. Keep secrets private and do not commit them to source control. OAuth providers must also be configured with the appropriate callback URLs in their provider dashboards.

## Project Structure

```text
src/
├── app/          # App Router pages, layouts, auth routes, and API route
├── assets/       # Images and logo assets
├── components/   # Shared UI, homepage sections, product details, and skeletons
├── context/      # React context
├── helper/       # Reusable hooks and helper functions
├── lib/          # Authentication setup and client
├── types/        # TypeScript types
└── proxy.ts      # Request/proxy logic
```

## Project Overview

BazarDor is designed to make product prices easier to explore through a Bangla-focused interface, with product comparisons, price-change sections, sorting, and account/profile functionality.
