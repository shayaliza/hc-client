# HealthCare and   Social Well being Web Application

## Table of Contents
<!-- AUTO-GENERATED-CONTENT:START (TOC:collapse=true&collapseText="Click to expand") -->
<details>
<summary>Show</summary>

- [About Vital flow?](#about-vital-flow)
- [Our Contributers](#our-contributers)
- [Installation](#installation)
- [App structure](#app-structure)
- [Project Status](#project-status)
- [Future Perspective](#future-perspective)
- [Preview](#preview)


</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## About Vital flow
vital flow --> 
Hackathon Project by HackWeb

It is a Hackathon Project where we solve the problems of current Healtcare system 
### some of the key features are

- **Adding hosipital Owener** 
- **Normal User**
- **Home Workout and Yoga**
- **Mental Health Support**
- **Chronic Illness Database**

---

## Our Contributers
We are team of 3
- Aliza Fatima as shayaliza
- Tanya Bansal
- Siddharth Khuswaha

## Installation

Install all the dependendies :

```bash
npm install
```
Set .env file inside server folder :

```bash
MONGO_DB_URL= your mongo db url
JWT_SECRET=your key
PORT= your backend port
FRONTEND_URL= frontend url or port
```

Run Frontend development Server in hc-client directory:

```bash
npm run dev
```

Run Backend development Server in hc-client/server directory:

```bash
nodemon start
or
node start
```

> **Note**
> Make sure .env is correctly setup

## App structure
```graphql
# Code & components for pages
./src/* 
  ├─ src/assets - # Minified images, fonts, icon files
  ├─ src/components - # Individual smaller components
  ├─ src/fragments - # Larger chunks of a page composed of multiple components
  ├─ src/layouts - # Page layouts used for different types of pages composed of components and fragments
  ├─ src/page - # Custom pages or pages composed of layouts with hardcoded data components, fragments, & layouts
  ├─ src/pages/* - # Next.js file based routing
  │  ├─ _app.js - # next.js app entry point
  │  ├─ _document.js - # next.js document wrapper
  │  ├─ global.css - #  Global CSS styles
  │  └─ Everything else... - # File based routing
  └─ src/utils - # Utility functions used in various places

```

## Project status
## Future Perspective
## Preview
[Youtube Video](https://www.youtube.com/watch?v=PiIndTHTXoM&feature=youtu.be) 
















