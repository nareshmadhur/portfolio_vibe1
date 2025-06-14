
# Naresh Madhur - Portfolio Website

This is a Next.js portfolio website for Naresh Madhur, showcasing his expertise in Data Science & AI, his musical pursuits, and his photography.

<!-- TODO: Replace with your live deployment link -->
**Live Demo**: [https://nareshm.vercel.app](https://nareshm.vercel.app)

## Features

*   **Hero Section**: Engaging introduction with an animated title.
*   **About Me**: Concise summary of Naresh's professional background and passions.
*   **Portfolio Highlights**: Visually distinct cards leading to detailed sections:
    *   **Music & Teaching**: Showcases YouTube channels (music videos, guitar lessons) and live performances, along with information about online courses.
    *   **Tech. Pursuits (BI & AI)**: Displays projects in Business Intelligence, Data Analytics, and AI.
    *   **Photography**: Gallery of photography work with links to Flickr.
*   **Contact Form**: Allows visitors to send messages directly (requires email service integration to be fully functional).
*   **Responsive Design**: Adapts to various screen sizes, from mobile to desktop.
*   **Dark Theme**: Sleek, modern dark theme with a grayscale palette.
*   **Scroll Animations**: Subtle animations as sections scroll into view.

## Technical Architecture & Stack

This project is built with a modern, performant, and maintainable tech stack:

*   **Core Framework**: **Next.js 15+ (App Router)**
    *   Utilizes the **App Router** for file-system based routing and improved layout capabilities.
    *   Employs **Server Components** by default for optimal performance and reduced client-side JavaScript.
    *   Uses **Server Actions** for handling form submissions (e.g., the contact form) without needing to create separate API endpoints.
*   **UI Library**: **React 18+**
    *   The foundation for building interactive user interfaces with a component-based architecture.
*   **Styling**: **Tailwind CSS**
    *   A utility-first CSS framework for rapid UI development.
    *   Theme (colors, fonts) is configured in `src/app/globals.css` and `tailwind.config.ts`.
*   **UI Components**: **ShadCN UI**
    *   A collection of beautifully designed, accessible, and customizable UI components (Buttons, Cards, Forms, etc.) built on Radix UI and Tailwind CSS. Base components are available in `src/components/ui/`.
*   **Language**: **TypeScript**
    *   Adds static typing to JavaScript, improving code quality, maintainability, and developer experience.
*   **Interactivity & Animations**:
    *   **`react-intersection-observer`**: Used to trigger animations when elements scroll into view.
    *   CSS transitions and simple state management for UI effects (e.g., typewriter animation).
*   **Deployment Recommendation**: **Vercel**
    *   Offers seamless deployment and hosting for Next.js applications with excellent performance and a generous free tier.

## Key File Structure / Where to Find Things

*   **Content (Text & Image URLs)**:
    *   `src/lib/constants.ts`: Centralized file for almost all user-facing text (titles, descriptions, labels, social links) and primary image URLs.
*   **Pages (Routes) - Files within `/src/app/`**:
    *   `/[route]/page.tsx`: The main component for each route (e.g., `/src/app/page.tsx` for the homepage, `/src/app/music/page.tsx` for the music page).
    *   `/layout.tsx`: The root layout for the entire application, including `<html>`, `<body>`, global font setup, Navbar, and Footer (`/src/app/layout.tsx`).
*   **Components - Files within `/src/components/`**:
    *   `/shared/`: Reusable components used across multiple pages (e.g., `/src/components/shared/SectionWrapper.tsx`, `/src/components/shared/ProjectCard.tsx`, `/src/components/shared/AnimatedSection.tsx`).
    *   `/sections/`: Larger, page-specific section components (e.g., `/src/components/sections/HeroSection.tsx`, `/src/components/sections/ContactSection.tsx`).
    *   `/layout/`: Components related to the overall site layout (e.g., `/src/components/layout/Navbar.tsx`, `/src/components/layout/Footer.tsx`, `/src/components/layout/Logo.tsx`).
    *   `/ui/`: Base ShadCN UI components (e.g., `/src/components/ui/button.tsx`, `/src/components/ui/card.tsx`).
*   **Styling & Configuration**:
    *   `/src/app/globals.css`: Global styles, Tailwind CSS base layers, and theme (CSS variables for colors, fonts).
    *   `/tailwind.config.ts`: Tailwind CSS configuration (e.g., extending theme, plugins).
    *   `/next.config.ts`: Next.js specific configurations (e.g., image optimization domains).
    *   `/tsconfig.json`: TypeScript compiler options.
    *   `/postcss.config.mjs`: PostCSS configuration (used by Tailwind CSS).
*   **Server-Side Logic**:
    *   `/src/app/actions.ts`: Contains Server Actions, currently used for the contact form submission.

## Getting Started / Running Locally
<!-- explain your prereqs and steps -->
**Prerequisites**:
*   Node.js (v18.x or later recommended)
*   npm or yarn

**Steps**:
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/your-repository-name.git
    cd your-repository-name
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```
3.  **Environment Variables (Optional for basic run, Required for Contact Form Email Sending)**:
    *   Create a `.env.local` file in the root of your project.
    *   If you plan to implement actual email sending for the contact form (e.g., using Resend), you'll need to add your API key here:
        ```
        RESEND_API_KEY=your_resend_api_key
        ```
    *   Ensure `.env.local` is listed in your `.gitignore` file to prevent committing secrets.
4.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```
    The application will typically be available at `http://localhost:3000` (or the port specified in your `package.json`'s dev script).

## Making Changes

*   **Text Content**:
    *   Edit strings directly in `src/lib/constants.ts`. Changes will reflect across the site.
*   **Images**:
    *   **Replace Placeholders**: Update the `imageUrl` or `backgroundImageUrl` properties in `src/lib/constants.ts`.
    *   **Local Images**: Place new image files in the `public/` directory (e.g., `public/images/your-image.jpg`) and reference them starting with a `/` (e.g., `/images/your-image.jpg`).
    *   **Remote Images**: If using images from new external domains, add the hostname to `images.remotePatterns` in `next.config.ts` and restart your development server.
*   **Styling & Theme**:
    *   **Colors**: Modify the CSS HSL variables in `src/app/globals.css` under the `:root` (light theme) and `.dark` (dark theme) selectors.
    *   **Fonts**:
        1.  Update the font import and configuration in `src/app/layout.tsx` (using `next/font/google`).
        2.  Update the `font-family` CSS variable in `src/app/globals.css` (`body` selector).
        3.  Update `tailwind.config.ts` to ensure Tailwind's `font-sans` utility uses your new font variable.
    *   **Component-Specific Styles**: Use Tailwind CSS utility classes directly in your `.tsx` components.
*   **Adding/Modifying Portfolio Items**:
    *   **BI & AI Projects**: Edit the `biAiProjects` array in `src/lib/constants.ts`.
    *   **Music Page Videos**: Edit the `featuredVideoId`, `otherExampleVideos`, and `performances.videos` arrays within `siteContent.musicPage` in `src/lib/constants.ts`.
    *   **Photography**: Edit the `photographyItems` array in `src/lib/constants.ts`.
*   **Contact Form Email Recipient**:
    *   To change where contact form submissions are sent, you'll need to modify the email sending logic within the `submitContactForm` function in `src/app/actions.ts` (once you integrate an email service). The placeholder currently targets `nareshmadhur@gmail.com`.

## Deployment

*   **Vercel (Recommended)**:
    1.  Push your code to a GitHub, GitLab, or Bitbucket repository.
    2.  Sign up at [Vercel.com](https://vercel.com/) and import your project.
    3.  Vercel auto-detects Next.js settings.
    4.  **Important**: Configure any necessary environment variables (like `RESEND_API_KEY` if you implement email sending) in your Vercel project settings.
    5.  Deploy. Vercel provides a free `.vercel.app` domain and sets up continuous deployment.

This project provides a solid foundation for a modern, performant, and easily maintainable portfolio website.
