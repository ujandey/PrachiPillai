## Prachi Pillai – Portfolio (React + Vite)

A single-page portfolio rebuilt in React with Vite. Includes responsive navigation, animated sections, projects tab switcher, and GitHub Pages deployment via Actions.

### Live
- GitHub Pages: https://<your-username>.github.io/PrachiPillai/

### Features
- Responsive navbar with hamburger menu
- Hero, Skills, Certifications, Projects, Experience, Education, Hire Me pages
- Projects tabs and “More details” toggle (React state)
- Scroll-based reveal animations (IntersectionObserver)
- Pre-configured GitHub Pages deploy (Actions)

### Tech Stack
- React 19, React Router 6
- Vite 5, @vitejs/plugin-react
- Vanilla CSS (sectioned under `src/styles`)

### Getting Started
1) Install
```
npm install
```
2) Dev server
```
npm run dev
```
Open the local URL shown (e.g. http://localhost:5173/PrachiPillai/).

3) Build
```
npm run build
```
4) Preview build
```
npm run preview
```

### Deployment (GitHub Pages)
This repo includes `.github/workflows/deploy.yml` which builds and publishes automatically on push to `main`.

Steps:
- Create a repo named `PrachiPillai` and push this project
- In GitHub → Settings → Pages → set Source to “GitHub Actions”
- Wait for the workflow to finish; site will be available at:
  - `https://<your-username>.github.io/PrachiPillai/`

Important config:
- `vite.config.js` sets `base: '/PrachiPillai/'` (must match repo name)
- Router is initialized as:
  ```jsx
  <BrowserRouter basename={import.meta.env.BASE_URL}>
  ```
- Static assets are referenced with `import.meta.env.BASE_URL`, e.g.:
  ```jsx
  <img src={`${import.meta.env.BASE_URL}assets/logo/logo.png`} />
  ```

### Project Structure
```
PrachiPillai/
  ├─ public/
  │  ├─ 404.html
  │  └─ assets/ (images, icons, pdf)
  ├─ src/
  │  ├─ components/ (Navbar)
  │  ├─ pages/ (Home, Skills, Certifications, Projects, Experience, Education, HireMe)
  │  ├─ styles/ (CSS per section)
  │  ├─ main.jsx
  │  └─ App.jsx
  ├─ index.html
  ├─ vite.config.js
  └─ package.json
```

### Notes
- Node 18+ recommended. If you rename the repo, update `base` in `vite.config.js`.
- Keep assets under `public/assets` for direct serving.

### License
This project is for personal portfolio use. Update with your preferred license if needed.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
