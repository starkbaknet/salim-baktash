# Salim Baktash - Personal Portfolio

Welcome to my personal portfolio website! This is a modern, responsive showcase of my professional journey, technical skills, and projects. Built with Next.js 15, it features a clean design with dark/light theme support and interactive components.

## 🚀 Live Demo

Visit my portfolio at: https://baktash.starkbak.net

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **Interactive Skills Grid**: Categorized skill showcase with hover effects
- **Contact Form**: Functional contact form with email integration
- **Professional Sections**:
  - Hero section with personal introduction
  - Skills showcase with 50+ technologies
  - Professional experience timeline
  - Education background
  - Contact information with social links

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling framework
- **ShadCN/UI** - Component library
- **Lucide React** - Icon library
- **Next Themes** - Theme management

### Backend

- **Next.js API Routes** - Serverless functions
- **Nodemailer** - Email service integration
- **Zod** - Schema validation

### Development Tools

- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes

## 📁 Project Structure

```
salim-baktash/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── sections/         # Page sections
│   │   ├── contact-section.tsx
│   │   ├── education-section.tsx
│   │   ├── experience-section.tsx
│   │   ├── projects-section.tsx
│   │   └── skills-section.tsx
│   ├── ui/               # Reusable UI components
│   └── *.tsx             # Main components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
└── styles/               # Additional styles
```

## 🚀 Running Locally

If you'd like to run this portfolio locally or fork it for your own use:

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/starkbaknet/salim-baktash.git
   cd salim-baktash
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   CONTACT_API_SECRET=your_api_secret_here
   SMTP_EMAIL=your_email@gmail.com
   SMTP_PASSWORD=your_app_password
   RECEIVER_EMAIL=recipient@example.com
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Email Setup (Contact Form)

To enable the contact form functionality:

1. **Gmail Setup**:

   - Enable 2-factor authentication
   - Generate an App Password
   - Use the App Password in `SMTP_PASSWORD`

2. **Environment Variables**:
   ```env
   CONTACT_API_SECRET=your_secret_key
   SMTP_EMAIL=your_gmail@gmail.com
   SMTP_PASSWORD=your_app_password
   RECEIVER_EMAIL=where_emails_should_be_sent
   ```

### Customization (For Your Own Portfolio)

If you want to use this as a template for your own portfolio:

1. **Personal Information**: Update the following files:

   - `components/hero.tsx` - Personal introduction and social links
   - `components/sections/experience-section.tsx` - Work experience
   - `components/sections/education-section.tsx` - Education background
   - `components/skill-grid.tsx` - Skills and technologies

2. **Styling**: Modify `app/globals.css` and Tailwind classes throughout components

3. **Theme**: Customize theme colors in `tailwind.config.ts`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Theme Support

- **Dark Theme**: Default theme with dark backgrounds
- **Light Theme**: Light backgrounds and text
- **System Theme**: Automatically follows system preference
- **Manual Toggle**: Theme switcher in header

## 📧 Contact Form

The contact form includes:

- Name, email, and message fields
- Client-side validation
- Server-side validation with Zod
- Email delivery via Nodemailer
- Success/error feedback

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Set environment variables in Vercel dashboard**
3. **Deploy automatically on push to main branch**

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- **Netlify**
- **Railway**
- **Heroku**
- **AWS Amplify**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is my personal portfolio, I welcome suggestions and improvements! Feel free to submit a Pull Request or open an issue if you find any bugs.

## 📞 Contact

**Salim Baktash**

- Email: bak.stark06@gmail.com
- LinkedIn: [Mohammad Salim](https://www.linkedin.com/in/mohammad-salim-8453a729b)
- GitHub: [@starkbaknet](https://github.com/starkbaknet)
- Twitter: [@StarkBakTec](https://x.com/StarkBakTec)
- Instagram: [@starkbaktec](https://www.instagram.com/starkbaktec)

---

⭐ If you found this portfolio inspiring or helpful, please give it a star!
