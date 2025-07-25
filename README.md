## React App Documentation - Vastra by Rashi

### Overview

This document outlines the structure and key learning points from the React.js application developed for the Vastra by Rashi project. It demonstrates usage of routing, dynamic rendering, React Hooks, and component-based architecture.

---

### 1. Project Setup

- Project initialized using **Vite** for fast development.
- Managed dependencies using `npm` and maintained configurations in `package.json`.
- Project structured in modular folders for better scalability.

**Skills Learned:** Project scaffolding, npm package management, configuration with Vite.

---

### 2. React Router v6 Setup

- Implemented client-side navigation using `BrowserRouter` from `react-router-dom`.
- Defined application routes with `<Routes>` and `<Route>`.

**Routes Covered:**

- `/` – Home page
- `/about` – About page
- `/contact` – Contact form
- `/search` – Product search functionality
- `/product/:id` – Dynamic route for individual product details

**Skills Learned:** Routing configuration, dynamic URL parameters, page-level route mapping.

---

### 3. Component-Based Architecture

- Split UI into reusable components:
  - `Navbar.jsx` – Navigation bar
  - `MainLayout.jsx` – Landing section of homepage
  - `Cards.jsx` – Product cards component
  - `ProductDetail.jsx` – Detailed view of selected product
  - `SearchPage.jsx`, `About.jsx`, `ContactUs.jsx` – Functional/static pages

**Skills Learned:** Component isolation, prop drilling, reusable logic encapsulation.

---

### 4. React Hooks (useState & useEffect)

- Managed application state using `useState` for products.
- Simulated asynchronous product fetching using `useEffect`.

```js
useEffect(() => {
  const fetchProducts = () => {
    const endpoint = productData.products;
    setTimeout(() => {
      setProductList(endpoint);
    }, 1000);
  };
  fetchProducts();
}, []);
```

**Skills Learned:** State initialization, effectful operations on mount, mock API simulation.

---

### 5. Dynamic Rendering of Data

- Used `.map()` to render product cards dynamically from a JSON source.
- Passed props to child components for modular data display.

**Skills Learned:** List rendering, props handling, JSX expressions.

---

### 6. TailwindCSS for Styling

- Used Tailwind classes for spacing, typography, responsiveness, gradients, and animations.
- Created grid layouts and responsive breakpoints for mobile/tablet/desktop.

**Sample Styling:**

```html
<h1 className='mt-16 bg-gradient-to-r text-3xl font-bold ...'>
```

**Skills Learned:** Utility-first CSS design, responsive and aesthetic UI development.

---

### 7. Search and Filtering

- Built a search input that filters product names using string comparison:

```js
product.name.toLowerCase().includes(query.toLowerCase())
```

**Skills Learned:** Data filtering, state-driven dynamic rendering, input handling.

---

### 8. JSON Data Handling

- Used local `products.json` to load product data instead of live APIs.

**Skills Learned:** Working with JSON, simulating backend logic, frontend API mock-up.

---

### 9. Hosting & Deployment Insights

- Found `CNAME`, `.git`, and `index.html`, suggesting you explored hosting.
- Likely used GitHub Pages or other static hosting for deployment.

**Skills Learned:** Version control basics, deployment configuration, readiness for production.

---

### Summary of Skills Acquired

| Area               | Skills Mastered                                                   |
| ------------------ | ----------------------------------------------------------------- |
| **React Basics**   | JSX, Components, Props, useState, useEffect                       |
| **Routing**        | `react-router-dom`, dynamic routes, nested routes                 |
| **UI Development** | TailwindCSS, responsive design, animated text, grid layouts       |
| **Data Handling**  | Static JSON integration, dynamic product rendering                |
| **Project Setup**  | Vite, npm, Git, file structuring                                  |
| **Search Feature** | Filter logic using `.includes()` and controlled inputs            |
| **Deployment**     | GitHub Pages readiness, static builds, domain integration (CNAME) |

---

This document captures your current progress. You now have a strong foundation to move into more advanced topics like state management with Redux, backend API integration, add-to-cart functionality, authentication, and admin dashboards.

