# Fitness Tracker App - Engineering Specifications

## System Architecture

### Technology Stack
- **Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS
- **Backend**: Next.js API routes with middleware
- **Database**: PostgreSQL (Neon) with Drizzle ORM
- **Authentication**: Better Auth with Google OAuth
- **AI**: OpenAI GPT with Vercel AI SDK
- **Deployment**: Vercel with edge functions
- **Package Manager**: Bun (based on existing lock file)

### Database Architecture

#### Core Schema Design
```sql
-- Users and Authentication
users (id, email, name, image, created_at, updated_at)
user_profiles (user_id, age, height, activity_level, dietary_preferences, created_at, updated_at)

-- Weight Tracking
weight_logs (id, user_id, weight, date, notes, created_at)

-- Goals Management
goals (id, user_id, type, target_value, current_value, target_date, status, created_at, updated_at)

-- Exercise System
exercises (id, name, category, muscle_groups, instructions, is_custom, created_by)
workout_sessions (id, user_id, name, date, duration, notes, created_at)
exercise_logs (id, session_id, exercise_id, sets, reps, weight, duration, intensity, rest_time, notes)

-- Nutrition System
foods (id, name, brand, serving_size, calories_per_serving, protein, carbs, fat, fiber, is_custom, created_by)
nutrition_logs (id, user_id, date, meal_type, food_id, quantity, created_at)

-- AI System
ai_recommendations (id, user_id, type, content, context, created_at)
ai_feedback (id, recommendation_id, user_id, rating, feedback, created_at)
```

## API Design

### Authentication Endpoints
- `POST /api/auth/signin` - Google OAuth signin
- `POST /api/auth/signout` - User signout
- `GET /api/auth/session` - Get current session

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `POST /api/user/onboarding` - Complete onboarding flow

### Weight Tracking
- `GET /api/weight` - Get weight history with filtering
- `POST /api/weight` - Log daily weight
- `PUT /api/weight/:id` - Update weight entry
- `DELETE /api/weight/:id` - Delete weight entry

### Goals Management
- `GET /api/goals` - Get user goals
- `POST /api/goals` - Create new goal
- `PUT /api/goals/:id` - Update goal
- `DELETE /api/goals/:id` - Delete goal

### Exercise System
- `GET /api/exercises` - Get exercise library
- `POST /api/exercises` - Create custom exercise
- `GET /api/workouts` - Get workout sessions
- `POST /api/workouts` - Create workout session
- `PUT /api/workouts/:id` - Update workout
- `POST /api/workouts/:id/exercises` - Log exercise in workout

### Nutrition System
- `GET /api/foods` - Search food database
- `POST /api/foods` - Add custom food
- `GET /api/nutrition/:date` - Get daily nutrition log
- `POST /api/nutrition` - Log food intake
- `GET /api/nutrition/targets` - Get macro targets

### AI System
- `POST /api/ai/recommend` - Get AI recommendations
- `POST /api/ai/feedback` - Submit feedback on recommendations

## Frontend Architecture

### Page Structure
```
/app
├── layout.tsx (root layout with auth provider)
├── page.tsx (dashboard/home)
├── auth/
│   └── signin/page.tsx
├── onboarding/
│   └── page.tsx
├── weight/
│   ├── page.tsx (weight tracking dashboard)
│   └── log/page.tsx (weight entry form)
├── workouts/
│   ├── page.tsx (workout history)
│   ├── new/page.tsx (create workout)
│   └── [id]/page.tsx (workout details)
├── nutrition/
│   ├── page.tsx (nutrition dashboard)
│   └── log/page.tsx (food logging)
├── goals/
│   └── page.tsx (goals management)
└── profile/
    └── page.tsx (user profile)
```

### Component Architecture
```
/components
├── ui/ (shadcn/ui components)
├── auth/
│   └── AuthProvider.tsx
├── charts/
│   ├── WeightChart.tsx
│   └── ProgressChart.tsx
├── forms/
│   ├── WeightLogForm.tsx
│   ├── WorkoutForm.tsx
│   └── NutritionForm.tsx
├── layout/
│   ├── Navbar.tsx
│   └── Sidebar.tsx
└── ai/
    └── AIChat.tsx
```

## Data Flow & State Management

### Client-Side State
- **React Query/TanStack Query** for server state management
- **Zustand** for client-side state (UI state, form state)
- **React Hook Form** for form validation and submission

### Data Fetching Strategy
- Server-side rendering for initial page loads
- Client-side fetching for dynamic data updates
- Optimistic updates for better UX
- Background refetching for real-time data

## Security & Privacy

### Authentication Flow
1. Google OAuth with Better Auth
2. JWT tokens for session management
3. Middleware for route protection
4. RBAC for admin features (future)

### Data Protection
- Input validation with Zod schemas
- SQL injection prevention via Drizzle ORM
- Rate limiting on API endpoints
- HTTPS enforcement
- Data encryption for sensitive health information

## Performance Considerations

### Database Optimization
- Indexes on frequently queried columns (user_id, date)
- Pagination for large datasets
- Connection pooling
- Query optimization for complex analytics

### Frontend Performance
- **Mobile-first responsive design**
- Code splitting by route
- Image optimization with Next.js Image
- Lazy loading for charts and heavy components
- Service worker for offline functionality (future)

### Caching Strategy
- API response caching with appropriate TTL
- Static asset caching via Vercel CDN
- Browser caching for user data

## Development Workflow

### Code Quality
- TypeScript strict mode
- ESLint + Prettier configuration
- Husky pre-commit hooks
- Automated testing (unit + integration)

### Deployment Pipeline
- GitHub Actions for CI/CD
- Automated testing on PR
- Preview deployments for feature branches
- Production deployment on main branch merge

## Monitoring & Analytics

### Error Tracking
- Sentry for error monitoring
- Custom error boundaries
- API error logging

### Performance Monitoring
- Vercel Analytics
- Core Web Vitals tracking
- Database query performance monitoring

### User Analytics
- Privacy-compliant user behavior tracking
- Feature usage analytics
- A/B testing framework (future)

## Third-Party Integrations

### Phase 1 APIs
- **Food Database**: Basic seeded database with USDA FoodData Central for expansion
- **Google OAuth**: Primary authentication
- **Email/Password**: Better Auth fallback authentication

### Future Integrations
- **OpenAI**: Simple prompt-based AI recommendations (Phase 4)
- Fitness device APIs (Fitbit, Apple Health)
- Recipe APIs
- Supplement databases

## Scalability Considerations

### Database Scaling
- Read replicas for analytics queries
- Partitioning for time-series data (weight_logs, exercise_logs)
- Archive strategy for old data

### Application Scaling
- Serverless architecture with Vercel functions
- Edge functions for global performance
- CDN for static assets

### Cost Optimization
- Database connection pooling
- Efficient query patterns
- Image optimization and compression
- Function execution time optimization

## Testing Strategy

### Unit Testing
- Jest + React Testing Library
- Database layer testing with test database
- API endpoint testing

### Integration Testing
- End-to-end testing with Playwright
- API integration tests
- Authentication flow testing

### Performance Testing
- Load testing for API endpoints
- Database performance testing
- Frontend performance audits

## Migration & Deployment Strategy

### Database Migrations
- Drizzle migrations for schema changes
- Seed data for development
- Backup strategy before production deployments

### Feature Rollout
- Feature flags for gradual rollout
- Blue-green deployments
- Rollback strategy for failed deployments
