# Easy Solutions — Premium Web Designer & Developer Portfolio

A professional, high-end portfolio website designed and built with a **Humanist Minimalist & Solid-Paper** design system. This portfolio features modern visual hierarchy, layered depth surfaces, responsive grids, micro-interactions, and a seamless native light/dark mode system.

## ✨ Features

- **Obsidian Dark & Crisp Light Themes**: Beautiful, high-contrast Obsidian dark theme and high-end geometric paper-white light theme matching native system preferences or toggleable manually.
- **Layered Tactile Depth**: Distinguishable background, section, card, and interactive layers utilizing realistic soft elevation shadows instead of flat grids.
- **Responsive 3-Column Work Grid**: Custom-tailored multi-device responsive CSS grid presenting selected case studies beautifully.
- **Smooth Animations**: Light-weight, high-performance IntersectionObserver-driven scroll fade-ins for natural volumetric entrances.
- **SEO & Performance Optimized**: Fully semantic HTML5 elements, high accessibility, fast loading assets, and smooth-scroll navigation.

---

## 📂 File Structure

```
├── assets/               # Folder containing all project preview images
│   ├── project-dashboard.png
│   ├── project-events.png
│   └── project-restaurant.png
├── index.html            # Core Semantic HTML5 structure (Header, Hero, Services, Work, About, Contact)
├── styles.css            # Humanist Solid-Paper custom CSS (variables, grid layouts, themes, responsive)
└── script.js             # High-performance theme switcher, mobile menu toggle, scroll observers
```

---

## 🚀 How to Publish to GitHub Pages

Since this website is built with pure semantic HTML, CSS, and modern JavaScript, it is **100% compatible with GitHub Pages** directly out of the box with zero build steps required.

### Step 1: Create a GitHub Repository
1. Log in to your [GitHub](https://github.com/) account.
2. Click the **New** button to create a new repository.
3. Give it a name (e.g., `easy-solutions-portfolio` or `portfolio`).
4. Keep the repository **Public** (required for the free tier of GitHub Pages).
5. Leave "Add a README file", "Add .gitignore", and "Choose a license" **unchecked** (since we have already created the optimal README for you).
6. Click **Create repository**.

### Step 2: Push your Code to GitHub
Open your terminal/command prompt in your project directory and run the following commands:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create your first commit
git commit -m "feat: initial commit of premium portfolio website"

# Rename default branch to main
git branch -M main

# Link your local repo to GitHub (replace with your actual GitHub URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push your code to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click on the **Settings** tab.
3. In the left sidebar under the **Code and automation** section, click on **Pages**.
4. Under **Build and deployment**, set the Source dropdown to **Deploy from a branch**.
5. Under **Branch**, select **main** (and keep the folder as `/ (root)`).
6. Click **Save**.
7. In a few seconds, GitHub will generate a live link (e.g., `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`) where your beautiful site will be hosted!

---

## 💻 Local Development

To run and preview the website locally:
1. Simply double-click `index.html` to open it directly in any web browser.
2. Alternatively, use a local development server like **Live Server** (VS Code extension) or run `npx serve` in your terminal for hot-reloading.

---

## 🎨 Design Philosophy
Inspired by high-end consumer hardware aesthetic standards, the site trades synthetic gradients and grid overlays for clean, pure surface boundaries, natural-looking shadows, and high-readability geometric typography. Every detail is structured to feel solid, premium, and human-made.
