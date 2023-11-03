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
.\hc-client\*
  ├─ app -
  │     ├─ (components)
  │     │              ├─ (calculator)/bmi.jsx , bodyfat.jsx, calorie.jsx
  │     │              ├─ (chronic)/bp.jsx
  │     │              ├─ (game)/gam1.jsx, game2.jsx
  │     │              ├─ (health)/addDocter.jsx, hospital.jsx, HospitalDoctors.jsx, showDocter.jsx
  │     │              ├─ (mental)/mental1.jsx, mental2.jsx, mental3.jsx
  │     │              ├─ (woman)/fertility.jsx, mensuration.jsx, periodcalc.jsx, sex.jsx
  │     │              ├─ (workout)/blog.jsx, diet.jsx, homeWorkout.jsx, yoga.jsx
  │     │              ├─ footer.jsx
  │     │              ├─ navbar.jsx
  │     │              └─ style2.css
  │     ├─ (pages)
  │     │         ├─ (calculator)/page.jsx
  │     │         ├─ (chronic)/page.jsx
  │     │         ├─ (game)/page.jsx
  │     │         ├─ (health)/page.jsx
  │     │         ├─ (login)/page.jsx
  │     │         ├─ (mentalHealth)/page.jsx
  │     │         ├─ (signup)/page.jsx
  │     │         ├─ (womaniya)/page.jsx
  │     │         └─ (workout)/page.jsx
  │     ├─ .env
  │     ├─ favicon.ico
  │     ├─ globals.css
  │     ├─ layout.js
  │     ├─ page.js
  │     └─ others # node modules, package.json, package-lock.json, .gitignore
  ├─ public- #all assets
  ├─ server -
  │     ├─ server.js
  │     ├─ modals
  │     │        ├─ bp.js
  │     │        ├─ doctor.js.js
  │     │        ├─ superuser.js
  │     │        └─ user.js
  │     ├─ routes
  │     │        ├─ authRoutes.js
  │     │        └─ getRoutes.js
  │     ├─ utils
  │     │        └─ auth.js
  │     ├─ .env
  │     └─ others - # node modules, package.json, package-lock.json, .gitignore
  └─ others - # .next, node_modules, .eslint.json, jsconfig.json, next-end.ts, next.config.js, package.json, package-lock.json, .gitignore, postcss.congfig.js, ReadME.md, tailwind.config.js, tsconfig.json
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
- loading.js in every page
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















