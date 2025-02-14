# Karta Kickoff

## Deployment Instructions for Vercel

1. First, ensure you have pushed your code to a GitHub repository

2. Go to [Vercel](https://vercel.com) and sign up/login with your GitHub account

3. Click "New Project"

4. Import your GitHub repository

5. Configure your project:
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

6. Click "Deploy"

Vercel will automatically deploy your application and provide you with a production URL. Any future pushes to your main branch will trigger automatic deployments.

## Development

To run this project locally:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```
