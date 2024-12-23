# Portfolio Website

A modern, responsive portfolio website built with Next.js and TailwindCSS.

## Quick Start

1. Clone the repository:
```bash
git clone https://github.com/oferdebug/Projects-PersonalPortfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create your environment file:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

## Important Notes

- Always test changes locally before pushing to main
- The `working-backup-v1` tag contains a known working version. If something breaks, you can always return to it:
  ```bash
  git checkout working-backup-v1
  npm install
  npm run dev
  ```

## Deployment

This site is deployed on Vercel. To deploy:

1. Push your changes to GitHub
2. Vercel will automatically deploy your changes
3. Check the deployment logs in Vercel dashboard for any issues

## Troubleshooting

If something breaks:

1. First, try cleaning your local environment:
```bash
rm -rf node_modules .next package-lock.json
npm install
```

2. If that doesn't work, return to the last known working version:
```bash
git checkout working-backup-v1
npm install
```

3. If you need to start fresh:
```bash
git clone https://github.com/oferdebug/Projects-PersonalPortfolio.git fresh-portfolio
cd fresh-portfolio
git checkout working-backup-v1
npm install
```
