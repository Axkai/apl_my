# AllPlay Learn Malaysia (`apl_my`)

AllPlay Learn Malaysia adapts evidence-informed inclusive education resources from the Australian AllPlay Learn program for Malaysian primary schools. It provides practical tools, disability strategies, and social inclusion guides for teachers, parents, and students.

Developed in collaboration with **Monash University**.

---

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI & Components:** [React 19](https://react.dev/), [Lucide React](https://lucide.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Cloud & Storage:** [Neon](https://neon.tech/) (Serverless Postgres & S3 Object Storage)

---

## Architecture & Asset Storage

- **Web Application:** Statically prerendered pages served via Next.js App Router.
- **Resource Documents (PDFs & Previews):** Decoupled from the Git repository and hosted on **Neon Object Storage** (`access: public_read`). Resolved in code using `getAssetUrl()` in `src/lib/storage.ts`.

---

## Getting Started

### 1. Prerequisites
- Node.js `20.x` or higher
- npm / pnpm / yarn

### 2. Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/axkai/apl_my.git
cd apl_my
npm install
```

### 3. Environment Variables
Copy the example environment file and configure your keys:

```bash
cp .env.example .env.local
```

Key variables required:
- `NEXT_PUBLIC_STORAGE_URL`: URL to the Neon Object Storage assets bucket (e.g., `https://<bucket>.storage.<region>.neon.tech/assets`).
- `DATABASE_URL`: Connection string for Neon Postgres.

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```text
├── public/                 # Static UI assets (logos, background SVGs)
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   │   ├── about/
│   │   ├── disability-strategies/
│   │   ├── getting-started/
│   │   ├── resources/
│   │   ├── social-inclusion/
│   │   └── stories/
│   ├── components/         # Reusable UI sections and components
│   └── lib/
│       └── storage.ts      # Cloud asset URL resolver (getAssetUrl)
├── neon.ts                 # Neon project & bucket configuration
└── .env.example            # Environment variables blueprint
```

---

## Available Scripts

- `npm run dev` - Starts the Turbopack local development server.
- `npm run build` - Validates types and compiles an optimized production build.
- `npm run start` - Runs the compiled production server locally.
- `npm run lint` - Runs ESLint code quality checks.
