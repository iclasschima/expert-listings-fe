# Expert Listing Dashboard

A modern, responsive dashboard application for managing property listings, sales analytics, and user data. Built with Next.js and Tailwind CSS, featuring interactive charts, calendar functionality, and budgeting tools.

## 🚀 Features

- **Sales Overview**: Interactive bar charts displaying monthly sales data with key financial metrics
- **Calendar Widget**: Full-featured calendar dropdown with date selection and month navigation
- **Budgeting Modal**: Feature-rich modal for setting up annual budgets by account category
- **Listings & Users Overview**: Quick access widgets showing total listings, active listings, and user statistics
- **Featured Listings**: Showcase of popular properties with image carousels
- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean, professional interface with custom styling

## 🛠️ Technologies

- **Framework**: [Next.js 16.1.1](https://nextjs.org/) (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **React**: 19.2.3
- **Font**: Euclid Circular B (via CDN)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js 18+ 
- npm, yarn, pnpm, or bun

## 🔧 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/iclasschima/expert-listings-fe.git
   cd expert-listings-fe
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
expert-listing-fe/
├── app/
│   ├── components/          # React components
│   │   ├── BudgetingModal.tsx
│   │   ├── Calendar.tsx
│   │   ├── FeaturedListings.tsx
│   │   ├── Header.tsx
│   │   ├── MetricCard.tsx
│   │   ├── Navigation.tsx
│   │   ├── OverviewWidget.tsx
│   │   ├── SalesChart.tsx
│   │   └── SalesOverview.tsx
│   ├── data/                # Data files
│   │   └── salesData.ts
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── public/                  # Static assets
│   ├── img1.jpg
│   ├── img2.png
│   └── img3.png
├── package.json
└── README.md
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Key Components

### Sales Overview
- Interactive bar chart with monthly sales data
- Four metric cards showing:
  - Total Inflow
  - MRR (Monthly Recurring Revenue)
  - Commission Revenue
  - GMV (Gross Merchandise Value)

### Calendar
- Full-height dropdown calendar
- Month/year navigation
- Date selection with visual feedback
- Positioned as dropdown from header icon

### Budgeting Modal
- Feature showcase modal
- Three key features highlighted:
  - Annual budget setup by category
  - Real-time tracking of actuals vs budget
  - Easy figure adjustment and forecasting

### Overview Widgets
- Listings Overview: Total, Active, and Archived listings
- Users Overview: Total users, Riders, and Subscribers

## 🔄 Development

The project uses:
- **App Router** for routing (Next.js 13+)
- **Server Components** by default
- **Client Components** (`"use client"`) for interactive features
- **Tailwind CSS** for styling with custom configuration

## 📝 Notes

- The application uses dummy data for demonstration purposes
- All images are stored in the `public` directory
- Font loading is handled via CSS `@import` in `globals.css`
- The calendar and budgeting modal are client-side components with state management

## 🚢 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Your app will be deployed!

For more deployment options, see the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📄 License

This project is private and proprietary.

## 👥 Contributing

This is a private repository. For questions or issues, please contact the repository owner.

---

Built with ❤️ using Next.js and Tailwind CSS
