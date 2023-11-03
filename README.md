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
  - [Done](#done)
  - [In process](#in-process)
  - [Bugs Fixing](#bugs-fixing)
- [Future Perspective](#future-perspective)
- [Preview](#preview)
  - [Youtube Video](#youtube-video)
  - [Ppt](#ppt)

</details>
<!-- AUTO-GENERATED-CONTENT:END -->

## About Vital flow
**vital flow --> 
Hackathon Project by HackWeb**

It is a Hackathon Project where we solve the problems of current Healtcare system 
### some of the key features are

- **Adding hosipital Owener** 
- **Normal User**
- **Home Workout and Yoga**
- **Mental Health Support**
- **Chronic Illness Database**
- **Womens Section**
- **Health Calculator**
---

## Our Contributers
### We are team of 3
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
### **Done**
- Skeleton
- Authentication 
- Desgin
- Animation
- Footer
- Data addition
- Server Connection
- Databse Connection
 ### **In Process**
- Game 2 and 3
- Mental Health Support
- Search bar for Fetching Hospitals and Doctors
 ### **Bugs Fixing**
- Changing Email to Username in Bp tracker
### **If you find any bugs feel free to tell** 
## Future Perspective
- We will add a real-time 24/7 AI chatbot
- searching system through which we can find nearby hospitals and doctor specialists
- One-on-one live video calling through the web application.
- A hybrid workout platform where we can track our progress and compete with 
- others in a healthy manner.
- A health quiz competition to raise awareness, with the opportunity to win prizes 
  and certificates.
- A virtual health document containing all previous records to aid in doctor analysis.
- A child healthcare system that ensures children receive the necessary nutritional 
value and support.
-A nutrition marketplace where we can sell original and health-assured products.
## Preview
### **[Youtube Video](https://www.youtube.com/watch?v=PiIndTHTXoM&feature=youtu.be)**
### **[Ppt](https://docs.google.com/presentation/d/1zik1HpX1ujSj399ssQnQFQwXcB9C_lrM/edit?usp=sharing&ouid=110945424157098854192&rtpof=true&sd=true)**















