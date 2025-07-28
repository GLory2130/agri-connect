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

- **Backend**: Node.js (Express)  
- **Database**: PostgreSQL  
- **Africa’s Talking**: USSD, SMS, Voice, Airtime APIs  
- **Frontend**: Responsive Web App React (Typescript)  

---

## 🌍 Impact

AgriConnect Drone Hub bridges the digital divide by making advanced drone technology **available and affordable** to smallholder farmers, helping them:

- Increase yield through efficient spraying
- Reduce labor and chemical exposure
- Access services even without smartphones or internet
- Earn rewards and connect with others in the ecosystem

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/d72817e6-0128-4e55-9af8-7680dbd624e7) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
