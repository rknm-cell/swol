# Fitness Tracker App

A comprehensive fitness tracking application that allows users to monitor their weight, fitness goals, gym sessions, exercises, and nutrition. The app includes an AI agent for personalized exercise and nutrition recommendations.

## 🚀 Features

### Core Functionality
- **Weight Tracking**: Daily weight logging with trend visualization
- **Exercise Tracking**: Log workouts, exercises, and track personal records
- **Nutrition Tracking**: Food logging with macro tracking
- **Goal Management**: Set and track fitness goals
- **Progress Analytics**: Comprehensive progress visualization
- **AI Recommendations**: Personalized exercise and nutrition advice

### User Experience
- **Google OAuth**: Seamless authentication
- **Responsive Design**: Works on desktop and mobile
- **Real-time Updates**: Instant data synchronization
- **Intuitive Interface**: Clean, modern UI

## 📋 Project Documentation

- **[Project Specifications](./PROJECT_SPECS.md)** - High-level project overview and feature requirements
- **[Technical Specifications](./TECHNICAL_SPECS.md)** - Detailed technical implementation details
- **[Development Roadmap](./DEVELOPMENT_ROADMAP.md)** - 14-week development plan with milestones

## 🛠 Tech Stack

- **Frontend**: Next.js 14 with TypeScript
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Neon
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth with Google OAuth
- **Deployment**: Vercel
- **AI**: OpenAI with AI SDK
- **Styling**: Tailwind CSS

## 🏗 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── (dashboard)/      # Protected dashboard routes
├── server/
│   └── db/
│       ├── index.ts      # Database connection
│       └── schema.ts     # Database schema
├── components/           # React components
├── lib/                 # Utility functions
└── styles/
    └── globals.css      # Global styles
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Bun (recommended) or npm
- PostgreSQL database (Neon recommended)
- Google OAuth credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd fitness-tracker
   ```

2. **Install dependencies**
   ```bash
   bun install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Fill in your environment variables:
   ```env
   DATABASE_URL=your_neon_database_url
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Set up the database**
   ```bash
   bun run db:generate
   bun run db:migrate
   ```

5. **Start the development server**
   ```bash
   bun run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📊 Database Schema

The application uses a comprehensive database schema with the following main tables:

- **users** - User authentication and basic info
- **user_profiles** - Extended user information (age, height, goals, etc.)
- **weight_logs** - Daily weight entries
- **goals** - User fitness goals
- **exercises** - Exercise library (built-in + custom)
- **workout_sessions** - Gym session records
- **exercise_logs** - Individual exercise entries
- **foods** - Food database (API + custom)
- **nutrition_logs** - Daily nutrition entries
- **ai_recommendations** - AI suggestion history
- **ai_feedback** - User feedback on AI recommendations

## 🔧 Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run db:generate` - Generate database migrations
- `bun run db:migrate` - Run database migrations
- `bun run db:studio` - Open Drizzle Studio

### Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **TypeScript** for type safety

## 🧪 Testing

```bash
# Run all tests
bun run test

# Run tests in watch mode
bun run test:watch

# Run tests with coverage
bun run test:coverage
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect your repository to Vercel**
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically deploy on push to main branch

### Environment Variables for Production

Make sure to set these in your Vercel dashboard:
- `DATABASE_URL`
- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `OPENAI_API_KEY`
- `NEXTAUTH_SECRET`
- `NEXTAUTH_URL`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [documentation](./PROJECT_SPECS.md)
2. Search existing [issues](../../issues)
3. Create a new issue with detailed information

## 🎯 Roadmap

See our [Development Roadmap](./DEVELOPMENT_ROADMAP.md) for detailed milestones and timeline.

### Current Phase
- **Phase 1**: Foundation & Core Infrastructure
- **Phase 2**: Weight Tracking
- **Phase 3**: Exercise Tracking
- **Phase 4**: Goals & Analytics
- **Phase 5**: Nutrition Tracking
- **Phase 6**: AI Integration
- **Phase 7**: Polish & Optimization

### Future Enhancements
- Workout templates and routines
- Meal planning functionality
- Social features (sharing, challenges)
- Advanced AI features
- Mobile app development
- Integration with fitness devices
