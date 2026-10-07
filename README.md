# Latasha Ivy Khoe, Portfolio

React + Vite + TypeScript. Drop these files into your existing `portfolio/` folder (keep your `public/` assets).

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

**Deploy:** push to GitHub, then import the repo in Vercel (framework: Vite). `vercel.json` handles SPA routing.

**Edit content:** everything lives in `src/data/` (`site.ts`, `projects.ts`, `background.ts`).
Replace the `example.com` paper links in `background.ts`, and add `image:` paths to award cards to swap placeholders.
The whole site is sized at 75% via `html { font-size: 75% }` in `src/styles.css`.
