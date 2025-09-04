# Fitness Tracker App - Project Specifications

## Project Overview
A comprehensive fitness tracking application that allows users to monitor their weight, fitness goals, gym sessions, exercises, and nutrition. The app includes an AI agent for personalized exercise and nutrition recommendations.

## Tech Stack
- **Frontend**: Next.js 14 with TypeScript
- **Backend**: Next.js API routes
- **Database**: PostgreSQL with Neon
- **ORM**: Drizzle ORM
- **Authentication**: Better Auth with Google OAuth
- **Deployment**: Vercel
- **AI**: OpenAI with AI SDK
- **Styling**: Tailwind CSS

## Core Features

### 1. User Management
- **Authentication**: Better Auth integration with Google OAuth
- **User Profiles**: Comprehensive user profiles with optional fields
- **Data Privacy**: Secure health data handling

### 2. Weight Tracking
- **Daily Weight Logging**: One weight entry per day
- **Progress Visualization**: Graphs showing trends over different time periods
  - 1 week view
  - 1 month view
  - 1 year view
  - Since starting view
- **Trend Analysis**: Identify increase, decrease, or plateau patterns

### 3. Fitness Goals
- **Goal Types**:
  - Weight loss/gain
  - Strength building
  - Endurance improvement
  - Body composition
  - Targeted muscle training
- **Goal Setting**: Users can set specific targets and timelines
- **Progress Tracking**: Visual progress indicators

### 4. Exercise Tracking
- **Exercise Categories**:
  - **Cardio**: Running, cycling, swimming, climbing
  - **Weight Lifting**: All major muscle groups
- **Exercise Data**:
  - **Cardio**: Intensity level and duration
  - **Weight Lifting**: Weight, reps, sets
- **Personal Records**: Automatic tracking of PRs
- **Exercise Library**: Built-in exercises with custom exercise creation
- **Workout Logging**: Individual exercise logging (templates/routines in future)

### 5. Nutrition Tracking
- **Food Database**: Integration with external API + custom foods
- **Macro Tracking**: Calories, protein, carbs, fat
- **Meal Logging**: Daily food intake tracking
- **Macro Calculations**: App-calculated targets based on goals, with user override capability

### 6. AI Agent (Stretch Goal)
- **Exercise Recommendations**: Based on goals and workout history
- **Nutrition Advice**: Personalized meal suggestions
- **Recipe Recommendations**: Based on dietary preferences and goals
- **On-Demand Access**: Users can request AI assistance anytime
- **Learning System**: AI learns from user feedback and preferences

## Database Schema Overview

### Core Tables
1. **users** - User profiles and authentication
2. **user_profiles** - Extended user information
3. **weight_logs** - Daily weight entries
4. **goals** - User fitness goals
5. **exercises** - Exercise library
6. **workout_sessions** - Gym session records
7. **exercise_logs** - Individual exercise entries
8. **foods** - Food database
9. **nutrition_logs** - Daily nutrition entries
10. **ai_recommendations** - AI suggestion history
11. **ai_feedback** - User feedback on AI recommendations

## User Flow
1. **Onboarding**: Sign up → Profile setup → Goal setting
2. **Daily Usage**: Log weight → Log exercises → Log nutrition
3. **Progress Review**: View charts and trends
4. **AI Consultation**: Request personalized recommendations
5. **Goal Adjustment**: Update goals based on progress

## Development Phases

### Phase 1: Core Infrastructure
- Database schema setup
- Authentication system
- Basic user profiles
- Weight tracking

### Phase 2: Exercise Tracking
- Exercise library
- Workout logging
- Progress visualization

### Phase 3: Nutrition Tracking
- Food database integration
- Macro tracking
- Nutrition logging

### Phase 4: AI Integration
- OpenAI integration
- Recommendation engine
- Feedback system

### Phase 5: Advanced Features
- Templates/routines
- Meal planning
- Enhanced analytics

## Success Metrics
- User engagement (daily active users)
- Weight tracking consistency
- Exercise logging frequency
- AI recommendation accuracy
- User satisfaction scores
