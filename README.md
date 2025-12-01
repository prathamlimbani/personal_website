# Pratham Limbani - Personal Portfolio

A "Zero Gravity" themed personal website built with React, Vite, Tailwind CSS, and Netlify Serverless Functions.

## 🌌 Theme

- **Style:** Digital Void / Zero Gravity / Glassmorphism
- **Key Elements:** Floating 3D widgets, neon glows, glass panels, smooth framer-motion animations.
- **Focus:** Highlighting Game Design, Engineering, and Solo Travel content.

## 🛠️ Tech Stack

- **Frontend:** React 18, Tailwind CSS, Framer Motion, Lucide React
- **Backend:** Netlify Functions (Serverless Node.js)
- **APIs:** GitHub REST API, YouTube Data API v3, SendGrid

## 🚀 Deployment Instructions

This site is designed to be hosted on **Netlify**.

1.  **Clone the Repo** & Push to your own GitHub.
2.  **Connect to Netlify:**
    - Log in to Netlify -> "Add new site" -> "Import from Git".
    - Select your repository.
3.  **Build Settings:**
    - **Build Command:** `npm run build`
    - **Publish Directory:** `dist`
4.  **Environment Variables:**
    - Go to **Site Settings > Environment Variables** and add the following keys to enable dynamic features:

| Variable | Description |
| :--- | :--- |
| `YOUTUBE_API_KEY` | Required to auto-fetch new videos. (Get from Google Cloud Console) |
| `GITHUB_TOKEN` | (Optional) Increases GitHub API rate limits. |
| `SENDGRID_API_KEY` | Required for the contact form to send emails. |
| `SENDGRID_SENDER` | The "From" email address (must be verified in SendGrid). |
| `CONTACT_RECEIVER` | The email address where you want to receive messages. |

## 🧪 Local Development

1.  Install dependencies: `npm install`
2.  Start dev server: `npm run dev`
3.  *Note:* The contact form and live API fetching will use "Mock Data" locally unless you use `netlify dev` CLI.

## 📂 Content Customization

- **Profile/Bio:** Edit `src/constants.ts` to change the text in the About section.
- **Videos:** If no API key is provided, the site falls back to `MOCK_VIDEOS` in `src/constants.ts`.
- **Projects:** If no GitHub token is provided, the site falls back to `MOCK_PROJECTS` in `src/constants.ts`.