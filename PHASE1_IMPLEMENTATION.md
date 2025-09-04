# Phase 1: Core Infrastructure Implementation Plan

## Overview
Focus on building the foundational system with database schema, authentication, basic user profiles, and weight tracking functionality.

## Implementation Order

### 1. Database Schema Setup ✅ (Partially Complete)
**Current Status**: Basic schema exists, needs expansion
**Tasks**:
- [ ] Complete user authentication tables for Better Auth
- [ ] Add user_profiles table with essential fields
- [ ] Create weight_logs table
- [ ] Create basic goals table
- [ ] Set up proper indexes and constraints
- [ ] Create database seed script with sample data

### 2. Authentication System
**Dependencies**: Database schema
**Tasks**:
- [ ] Install and configure Better Auth
- [ ] Set up Google OAuth provider
- [ ] Implement email/password authentication
- [ ] Create authentication middleware
- [ ] Build sign-in/sign-up pages
- [ ] Add session management
- [ ] Implement route protection

### 3. User Profile Management
**Dependencies**: Authentication
**Tasks**:
- [ ] Create onboarding flow
- [ ] Build user profile forms (age, height, activity level)
- [ ] Implement profile API endpoints
- [ ] Add profile validation with Zod
- [ ] Create profile management page

### 4. Weight Tracking System
**Dependencies**: User profiles
**Tasks**:
- [ ] Build weight logging form
- [ ] Create weight tracking API endpoints
- [ ] Implement weight history retrieval
- [ ] Add basic weight chart visualization
- [ ] Create weight tracking dashboard
- [ ] Add weight entry validation (one per day)

### 5. Basic Goal Setting
**Dependencies**: User profiles
**Tasks**:
- [ ] Create goal creation form
- [ ] Implement goals API endpoints
- [ ] Add goal types (weight loss/gain initially)
- [ ] Build goals management page
- [ ] Add basic progress calculation

### 6. Core UI Components
**Dependencies**: None (can be done in parallel)
**Tasks**:
- [ ] Set up Tailwind CSS configuration
- [ ] Create base layout components (Navbar, Sidebar)
- [ ] Build form components with validation
- [ ] Create chart components for weight tracking
- [ ] Implement responsive mobile-first design
- [ ] Add loading states and error handling

## Technical Implementation Details

### Database Schema (Phase 1 Focus)

```sql
-- Better Auth tables (auto-generated)
users (id, email, name, image, emailVerified, createdAt, updatedAt)
accounts (id, userId, type, provider, providerAccountId, ...)
sessions (id, userId, sessionToken, expires)

-- Custom application tables
user_profiles (
  user_id UUID PRIMARY KEY REFERENCES users(id),
  age INTEGER,
  height_cm DECIMAL(5,2),
  activity_level VARCHAR(20) CHECK (activity_level IN ('sedentary', 'lightly_active', 'moderately_active', 'very_active', 'extremely_active')),
  dietary_preferences TEXT[],
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

weight_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  weight DECIMAL(5,2) NOT NULL,
  date DATE NOT NULL,
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(user_id, date) -- One entry per day
);

goals (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  type VARCHAR(50) NOT NULL, -- 'weight_loss', 'weight_gain', 'maintain'
  target_value DECIMAL(10,2),
  current_value DECIMAL(10,2),
  target_date DATE,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused', 'cancelled')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### API Endpoints (Phase 1)

```typescript
// Authentication (handled by Better Auth)
GET  /api/auth/session
POST /api/auth/signin
POST /api/auth/signout

// User Management
GET  /api/user/profile
PUT  /api/user/profile
POST /api/user/onboarding

// Weight Tracking
GET  /api/weight?period=1w|1m|1y|all
POST /api/weight
PUT  /api/weight/:id
DELETE /api/weight/:id

// Goals
GET  /api/goals
POST /api/goals
PUT  /api/goals/:id
DELETE /api/goals/:id
```

### Page Structure (Phase 1)

```
/app
├── layout.tsx (auth provider, navigation)
├── page.tsx (dashboard with weight overview)
├── auth/
│   ├── signin/page.tsx
│   └── signup/page.tsx
├── onboarding/
│   └── page.tsx (profile setup)
├── weight/
│   ├── page.tsx (weight tracking dashboard)
│   └── log/page.tsx (add/edit weight)
├── goals/
│   └── page.tsx (goals management)
└── profile/
    └── page.tsx (user settings)
```

### Key Components (Phase 1)

```typescript
// Layout Components
<AuthProvider />
<Navbar />
<MobileNavigation />

// Form Components
<WeightLogForm />
<ProfileForm />
<GoalForm />

// Data Visualization
<WeightChart />
<ProgressIndicator />

// UI Components
<Button />
<Input />
<Card />
<Modal />
```

## Development Workflow

### Setup Tasks
1. **Environment Configuration**
   - Set up environment variables for database and auth
   - Configure Better Auth providers
   - Set up database connection

2. **Development Tools**
   - Configure Drizzle migrations
   - Set up development database seeding
   - Add TypeScript strict configuration

### Testing Strategy (Phase 1)
- Unit tests for utility functions
- API endpoint testing
- Form validation testing
- Basic E2E testing for auth flow

### Performance Considerations (Phase 1)
- Optimize database queries with proper indexing
- Implement pagination for weight history
- Add loading states for better UX
- Mobile-first responsive design

## Success Criteria for Phase 1

### Functional Requirements
- [ ] Users can sign up with Google OAuth or email/password
- [ ] Users can complete onboarding with profile information
- [ ] Users can log daily weight entries
- [ ] Users can view weight history with basic charts
- [ ] Users can set and manage weight goals
- [ ] Mobile-responsive design works on all screen sizes

### Technical Requirements
- [ ] Database schema is properly normalized and indexed
- [ ] API endpoints are secure and validated
- [ ] Authentication works correctly with session management
- [ ] Application is deployed and accessible via Vercel
- [ ] Basic error handling and loading states implemented

### Quality Gates
- [ ] All TypeScript errors resolved
- [ ] ESLint and Prettier configured and passing
- [ ] Basic test coverage for critical paths
- [ ] Performance audit shows good Core Web Vitals
- [ ] Security audit shows no critical vulnerabilities

## Next Steps After Phase 1
Once Phase 1 is complete and stable:
1. Gather user feedback on core functionality
2. Plan Phase 2 (Exercise Tracking) implementation
3. Evaluate need for additional features based on usage
4. Consider performance optimizations based on real usage data

## Estimated Timeline
- **Week 1-2**: Database schema and authentication
- **Week 3**: User profiles and onboarding
- **Week 4**: Weight tracking functionality
- **Week 5**: Goals management and UI polish
- **Week 6**: Testing, deployment, and bug fixes

Total estimated time: **6 weeks** for a fully functional Phase 1 application.
