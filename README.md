# 🚀 NotifiAI

**Centralized Notification Tracking with AI.**

NotifiAI empowers users to automate and manage notifications across domains like academics, jobs, and e-commerce. With AI-driven insights, real-time tracking, and multi-channel delivery, it simplifies staying updated.

---

## 🌟 About the Project

NotifiAI is designed to address the scattered nature of notifications across platforms. Its core idea revolves around:

1. **Future Notifications**: Users define their requirements, and the system proactively tracks and delivers updates.
2. **Immediate Notifications**: Users query existing notifications and receive responses in real-time.

This is achieved through Redis-optimized caching, AI-powered processing, and multi-channel communication.

---

## 🌟 Core Features

- **Automated Tracking**: Monitor updates based on user-defined preferences.
- **Real-Time Queries**: Fetch and deliver instant responses using NLP.
- **Multi-Channel Delivery**: Notify users via Email, WhatsApp, or SMS using APIs like Twilio and Nodemailer.
- **AI Insights**: Summarize updates into meaningful insights for quick understanding.

---

## 🛠️ Technologies

- **Frontend**: Vue.js, Tailwind CSS
- **Backend**: Nuxt.js, Node.js
- **Caching**: Redis
- **Communication**: Twilio, AWS SNS, Nodemailer
- **DevOps**: Docker for containerized deployments
- **AI Tools**: NLP for summarization and chatbot interaction

---

## 📂 Project Structure

```plaintext
.
├── README.md
├── app.vue
├── assets
│   └── css
│       └── main.css
├── eslint.config.js
├── node_modules
│   └── [Contains dependencies for the project]
├── nuxt.config.ts
├── package.json
├── pnpm-lock.yaml
├── prettier.config.js
├── public
│   ├── favicon.ico
│   └── robots.txt
├── server
│   └── tsconfig.json
├── tailwind.config.js
└── tsconfig.json
```

> **Note**: This structure reflects the current state of the project. As development progresses, updates may introduce new files, directories, or dependencies, altering the structure.

---

## 🚀 Development Workflow

### Key Commands

- **Initialize Nuxt**:

  ```bash
  pnpm dlx nuxi init .
  ```

- **Install Tailwind CSS**:

  ```bash
  pnpm install -D tailwindcss postcss autoprefixer
  pnpm dlx tailwindcss init
  ```

- **Start Development Server**:

  ```bash
  pnpm dev
  ```

- **Run Code Formatting**:
  ```bash
  pnpm exec prettier . --write
  ```

---

## 🔧 Getting Started

Follow these steps to get the project running locally.

### Prerequisites

Ensure the following tools are installed:

- **Node.js** (v18 or higher recommended)
- **PNPM** (latest version for dependency management)

### Installation

- Clone the repository:

  ```bash
  git clone https://github.com/Marshalll99/Intellinotify
  cd notifiAI
  ```

- Install dependencies:
  ```bash
  pnpm install
  ```

### Running Locally

- Start the development server:

  ```bash
  pnpm dev
  ```

- Build the production version:

  ```bash
  pnpm build
  ```

- Preview the production build:

  ```bash
  pnpm preview
  ```

- Lint and fix code:

  ```bash
  pnpm lint
  ```

- Format code with Prettier:
  ```bash
  pnpm exec prettier . --write
  ```

---

## 📜 License

This project is licensed under the MIT License.
