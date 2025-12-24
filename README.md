# Visura - Israeli Event Industry Professional Network

A mobile-first web application MVP connecting event industry professionals in Israel. Visura enables users to post availability ("פנוי") and search for professionals ("מחפש") by date, creating an efficient marketplace for event designers, florists, and hall decoration teams.

## 🎯 Project Overview

**Visura** is a professional work tool (not a social network) designed specifically for the Israeli event industry. The platform focuses on connecting supply and demand through date-based availability matching.

### Key Features
- ✅ Hebrew RTL (Right-to-Left) interface throughout
- ✅ Mobile-first responsive design
- ✅ 9 core screens covering complete user journey
- ✅ Professional messaging system
- ✅ Role-based user profiles with work photo galleries
- ✅ Date-based filtering and search
- ✅ Clean, professional UI without social media elements (no likes/comments)

## 🛠 Tech Stack

- **Framework**: React 18 with TypeScript
- **Routing**: React Router v6 (HashRouter for GitHub Pages)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📱 Application Screens

1. **Login** (`/`) - User authentication
2. **Registration** (`/register`) - New user signup with role selection (event designer/florist/hall decoration team)
3. **Main Feed** (`/feed`) - Browse post cards showing availability and requests
4. **Create Post** (`/create-post`) - Create new availability or request posts
5. **Filter/Search** (`/filter`) - Advanced filtering by date, role, and area
6. **Messages List** (`/messages`) - Conversation overview
7. **Chat** (`/chat/:id`) - One-on-one messaging
8. **My Profile** (`/profile`) - User's own profile with work photo gallery
9. **Edit Profile** (`/edit-profile`) - Update personal information and portfolio
10. **User Profile View** (`/user/:id`) - View other users' profiles

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd visura

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Development
```bash
npm run dev          # Start dev server with hot reload
npm run build        # Production build
npm run preview      # Preview production build locally
```

## 📦 Build & Deployment

### Building for Production
```bash
npm run build
```

This creates an optimized production build in the `/dist` directory.

### Deploying to Vercel

1. **Create a new Vercel project** and import the GitHub repository.
2. **Build settings** (auto-detected for Vite):
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. **Deploy**. Vercel will install dependencies and publish the build.

### Deploying to GitHub Pages

1. **Configure GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `/(root)`

2. **Build and Deploy**:
   ```bash
   npm run build
   ```

3. **Push the `dist` folder contents to `gh-pages` branch**:
   ```bash
   # Option 1: Using gh-pages package
   npm install -g gh-pages
   gh-pages -d dist

   # Option 2: Manual deployment
   git subtree push --prefix dist origin gh-pages
   ```

4. **Access your app**:
   ```
   https://<username>.github.io/<repository-name>/
   ```

### Important Build Configuration

The project is configured for GitHub Pages deployment:
- ✅ Uses `HashRouter` instead of `BrowserRouter`
- ✅ Base path configured in `vite.config.ts`
- ✅ No `figma:asset` imports (replaced with web URLs)
- ✅ All assets use relative or absolute web URLs

## 📁 Project Structure

```
visura/
├── src/
│   ├── app/
│   │   ├── components/         # All React components
│   │   │   ├── ui/            # Reusable UI components (Button, Input, etc.)
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   ├── Feed.tsx
│   │   │   ├── CreatePost.tsx
│   │   │   ├── Filter.tsx
│   │   │   ├── Messages.tsx
│   │   │   ├── Chat.tsx
│   │   │   ├── Profile.tsx
│   │   │   ├── EditProfile.tsx
│   │   │   ├── UserProfile.tsx
│   │   │   └── PostCard.tsx
│   │   └── App.tsx            # Main app component with routing
│   ├── styles/
│   │   ├── theme.css          # Tailwind theme and typography
│   │   └── fonts.css          # Font imports
│   └── main.tsx               # Application entry point
├── index.html
├── package.json
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Design System

### Colors
- Primary: Blue (#2563EB)
- Success: Green
- Danger: Red
- Gray scale for text and borders

### Typography
- All text in Hebrew with RTL support
- Professional, clean font choices
- Responsive sizing using Tailwind utilities

### Components
- Reusable UI components in `/src/app/components/ui/`
- Consistent styling across all screens
- Mobile-first responsive design

## 🌐 RTL (Right-to-Left) Support

The entire application is built with Hebrew RTL layout:
- HTML `dir="rtl"` attribute set globally
- All text inputs and forms support RTL
- Flexbox and grid layouts adapted for RTL
- Icon and button positioning optimized for RTL reading

## 📝 Post Card Structure

Each post card displays:
- **Type badge**: "פנוי" (Available) or "מחפש" (Looking for)
- **Date**: Event date
- **Role**: User's professional role (event designer/florist/decoration team)
- **Area**: Geographic location
- **Note**: Brief description (2-3 lines max)
- **Action button**: "שלח הודעה" (Send message)

**No social media elements**: Posts intentionally exclude likes, comments, shares, or public engagement features to maintain professional focus.

## 🔐 Authentication

Currently implemented as a mock authentication system for MVP:
- Login redirects to feed
- Registration saves user type selection
- No backend integration yet (frontend-only MVP)

## 💬 Messaging System

- One-on-one professional conversations
- Message list shows recent chats
- Individual chat view with send/receive layout
- RTL-optimized message bubbles

## 👤 User Profiles

- **My Profile**: Editable profile with work photo gallery (3x3 grid)
- **User Profile View**: Read-only view of other users' profiles
- **Edit Profile**: Update name, role, area, bio, phone, and portfolio images

## 🔍 Filter & Search

Filter posts by:
- Date range
- Professional role
- Geographic area
- Post type (available/looking)

## 🚧 Known Limitations (MVP Stage)

- No backend/database integration
- No real authentication
- Mock data for posts and messages
- No image upload functionality (uses placeholders)
- No push notifications
- No payment integration

## 🤝 Contributing

This is an MVP project. For contributions:
1. Fork the repository
2. Create a feature branch
3. Follow existing code style and RTL conventions
4. Test on mobile viewports
5. Submit a pull request

## 📄 License

[Add your license here]

## 👥 Team

[Add team members and contact information]

---

**Built with ❤️ for the Israeli event industry**
