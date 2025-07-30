# 🧱 AgriConnect Drone Hub

## 🚀 Overview

**AgriConnect Drone Hub** is a smart farming monitoring system designed to make drone-based agricultural services accessible to farmers in remote and underserved areas. Through a mobile-first and internet-free approach, it allows farmers to **request drone spraying services**, **track their request**, **report issues**, **give feedback**, and **earn rewards** using **USSD, SMS, voice calls**, and a companion **web platform**. 

This project was developed as part of a hackathon to empower farmers with digital tools while ensuring inclusivity, scalability, and sustainability.

---

## 🎯 Goal

To **digitize agricultural drone services** by providing an easy-to-use system where **any farmer, with or without internet access**, can:

- Request drone spraying services  
- Check drone status  
- Report service issues  
- Provide feedback and earn airtime rewards  
- Refer other farmers and grow the network  

---

## 🧩 Core Functional Modules (Powered by Africa’s Talking APIs)

### 1️⃣ USSD Interface

- **Purpose**: To allow offline farmers to interact with the system.
- **Features**:
  - Request drone using GPS or saved plots
  - Track service status
  - Report issues and get follow-up support
  - Provide ratings and feedback
  - Refer other farmers to join

> *All inputs trigger webhook events and create entries in the backend database.*

---

### 2️⃣ SMS Alerts

- **Purpose**: Keep farmers informed and engaged via SMS.
- **Features**:
  - Service request confirmations
  - Post-spray care tips
  - Two-way feedback (e.g., “Did the drone arrive?” → Yes/No)
  - Automated rewards for valid responses

---

### 3️⃣ Voice Support (IVR & Callback)

- **Purpose**: For voice-preferred users and escalated support.
- **Features**:
  - Interactive voice menu (book drone, feedback, speak to agronomist)
  - Callback system for follow-up
  - Voice logs stored for analysis and improvement

---

### 4️⃣ Airtime Distribution

- **Purpose**: Encourage engagement via micro-incentives.
- **Triggers**:
  - First-time sign-up
  - Valid feedback submissions
  - Successful referrals

---

## 🖥 Web Platform Features

- Farmer registration and plot management
- Drone service request dashboard
- Live drone status tracking
- Issue reporting system
- Feedback and rating submission
- Referral code sharing and reward tracking
- Admin dashboard for managing requests, users, feedback, and rewards
- Multilingual support (Swahili & English)
- Analytics and visual reporting (for admin use)

---

## 🗄 Backend Architecture

### Database (PostgreSQL)

- **farmers**: name, phone, region, GPS plot, referral code  
- **requests**: drone type, date, status  
- **feedback**: rating, SMS/voice content  
- **rewards**: action type, airtime amount, phone number  

### API/Webhooks

- USSD → request → DB entry + SMS confirmation  
- Feedback → trigger airtime reward  
- SMS or voice reply → webhook → update status or notify admin  

---

## 🧠 Tech Stack

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS 
- **Africa’s Talking**: USSD, SMS, Voice, Airtime APIs  

---

## 🌍 Impact

AgriConnect Drone Hub bridges the digital divide by making advanced drone technology **available and affordable** to smallholder farmers, helping them:

- Increase yield through efficient spraying
- Reduce labor and chemical exposure
- Access services even without smartphones or internet
- Earn rewards and connect with others in the ecosystem

To run the frontend locally:

### 🔧 Prerequisites

- Node.js ≥ 18.x
- npm ≥ 9.x (or `yarn`)

---

### 📥 1. Clone the Repository

```bash
git clone https://github.com/GLory2130/agri-connect.git
cd agri-connect

To install dependencies
npm install or npm i

Start Application
npm run dev