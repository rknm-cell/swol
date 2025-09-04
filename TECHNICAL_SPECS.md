# Technical Specifications

## Database Schema

### Core Tables

#### 1. users
```sql
- id: integer (primary key)
- email: varchar (unique)
- name: varchar
- image: varchar (optional)
- created_at: timestamp
- updated_at: timestamp
```

#### 2. user_profiles
```sql
- id: integer (primary key)
- user_id: integer (foreign key to users)
- age: integer (optional)
- height: decimal (cm, optional)
- current_weight: decimal (kg, optional)
- gender: enum ('male', 'female', 'other', optional)
- activity_level: enum ('sedentary', 'lightly_active', 'moderately_active', 'very_active', 'extremely_active', optional)
- fitness_experience: enum ('beginner', 'intermediate', 'advanced', optional)
- primary_goal: enum ('weight_loss', 'weight_gain', 'strength', 'endurance', 'body_composition', 'muscle_training', optional)
- target_weight: decimal (kg, optional)
- injuries_limitations: text (optional)
- created_at: timestamp
- updated_at: timestamp
```

#### 3. weight_logs
```sql
- id: integer (primary key)
- user_id: integer (foreign key to users)
- weight: decimal (kg)
- date: date (unique per user)
- notes: text (optional)
- created_at: timestamp
```

#### 4. goals
```sql
- id: integer (primary key)
- user_id: integer (foreign key to users)
- type: enum ('weight_loss', 'weight_gain', 'strength', 'endurance', 'body_composition', 'muscle_training')
- target_value: decimal
- current_value: decimal
- target_date: date
- status: enum ('active', 'completed', 'paused')
- created_at: timestamp
- updated_at: timestamp
```

#### 5. exercises
```sql
- id: integer (primary key)
- name: varchar
- category: enum ('cardio', 'strength')
- muscle_group: varchar (optional, for strength exercises)
- equipment: varchar (optional)
- description: text
- instructions: text
- is_custom: boolean (default false)
- created_by: integer (foreign key to users, null for built-in)
- created_at: timestamp
```

#### 6. workout_sessions
```sql
- id: integer (primary key)
- user_id: integer (foreign key to users)
- date: date
- duration: integer (minutes)
- notes: text (optional)
- created_at: timestamp
```

#### 7. exercise_logs
```sql
- id: integer (primary key)
- workout_session_id: integer (foreign key to workout_sessions)
- exercise_id: integer (foreign key to exercises)
- user_id: integer (foreign key to users)
- sets: integer (for strength exercises)
- reps: integer (for strength exercises)
- weight: decimal (kg, for strength exercises)
- duration: integer (minutes, for cardio exercises)
- intensity: enum ('low', 'medium', 'high', for cardio exercises)
- distance: decimal (km, optional for cardio)
- notes: text (optional)
- created_at: timestamp
```

#### 8. foods
```sql
- id: integer (primary key)
- name: varchar
- calories: integer
- protein: decimal (g)
- carbs: decimal (g)
- fat: decimal (g)
- fiber: decimal (g, optional)
- sugar: decimal (g, optional)
- sodium: decimal (mg, optional)
- is_custom: boolean (default false)
- created_by: integer (foreign key to users, null for API foods)
- created_at: timestamp
```

#### 9. nutrition_logs
```sql
- id: integer (primary key)
- user_id: integer (foreign key to users)
- date: date
- meal_type: enum ('breakfast', 'lunch', 'dinner', 'snack')
- food_id: integer (foreign key to foods)
- quantity: decimal (servings)
- calories: integer
- protein: decimal (g)
- carbs: decimal (g)
- fat: decimal (g)
- notes: text (optional)
- created_at: timestamp
```

#### 10. ai_recommendations
```sql
- id: integer (primary key)
- user_id: integer (foreign key to users)
- type: enum ('exercise', 'nutrition', 'recipe')
- content: text
- reasoning: text
- created_at: timestamp
```

#### 11. ai_feedback
```sql
- id: integer (primary key)
- recommendation_id: integer (foreign key to ai_recommendations)
- user_id: integer (foreign key to users)
- rating: integer (1-5)
- feedback: text (optional)
- implemented: boolean
- created_at: timestamp
```

## API Endpoints

### Authentication
- `POST /api/auth/signin` - Sign in with Google
- `POST /api/auth/signout` - Sign out
- `GET /api/auth/session` - Get current session

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `POST /api/user/profile` - Create user profile

### Weight Tracking
- `GET /api/weight` - Get weight logs with filters
- `POST /api/weight` - Log new weight entry
- `PUT /api/weight/:id` - Update weight entry
- `DELETE /api/weight/:id` - Delete weight entry
- `GET /api/weight/trends` - Get weight trends and analytics

### Goals
- `GET /api/goals` - Get user goals
- `POST /api/goals` - Create new goal
- `PUT /api/goals/:id` - Update goal
- `DELETE /api/goals/:id` - Delete goal
- `GET /api/goals/progress` - Get goal progress

### Exercises
- `GET /api/exercises` - Get exercise library
- `POST /api/exercises` - Create custom exercise
- `PUT /api/exercises/:id` - Update exercise
- `DELETE /api/exercises/:id` - Delete custom exercise

### Workouts
- `GET /api/workouts` - Get workout sessions
- `POST /api/workouts` - Create workout session
- `PUT /api/workouts/:id` - Update workout session
- `DELETE /api/workouts/:id` - Delete workout session
- `GET /api/workouts/:id/exercises` - Get exercises for workout

### Exercise Logs
- `POST /api/exercise-logs` - Log exercise
- `PUT /api/exercise-logs/:id` - Update exercise log
- `DELETE /api/exercise-logs/:id` - Delete exercise log
- `GET /api/exercise-logs/prs` - Get personal records

### Nutrition
- `GET /api/foods` - Search food database
- `POST /api/foods` - Create custom food
- `GET /api/nutrition` - Get nutrition logs
- `POST /api/nutrition` - Log nutrition entry
- `PUT /api/nutrition/:id` - Update nutrition entry
- `DELETE /api/nutrition/:id` - Delete nutrition entry
- `GET /api/nutrition/macros` - Get macro calculations

### AI Recommendations
- `POST /api/ai/recommend` - Get AI recommendations
- `POST /api/ai/feedback` - Submit AI feedback
- `GET /api/ai/history` - Get recommendation history

## Frontend Components

### Core Components
- `AuthProvider` - Authentication context
- `Layout` - Main app layout
- `Sidebar` - Navigation sidebar
- `Header` - App header with user info

### Weight Tracking
- `WeightTracker` - Main weight tracking component
- `WeightChart` - Weight progress visualization
- `WeightForm` - Weight entry form
- `WeightTrends` - Trend analysis

### Exercise Tracking
- `WorkoutTracker` - Main workout component
- `ExerciseLibrary` - Exercise database
- `WorkoutForm` - Workout logging form
- `ExerciseLog` - Individual exercise entry
- `PersonalRecords` - PR tracking

### Nutrition Tracking
- `NutritionTracker` - Main nutrition component
- `FoodSearch` - Food database search
- `MacroTracker` - Macro tracking
- `NutritionForm` - Food logging form

### Goals & Analytics
- `GoalTracker` - Goal management
- `ProgressCharts` - Progress visualization
- `Analytics` - Comprehensive analytics

### AI Features
- `AIRecommendations` - AI suggestion interface
- `AIFeedback` - Feedback collection
- `RecommendationHistory` - Past recommendations

## Data Flow

### Weight Tracking Flow
1. User enters weight in `WeightForm`
2. Data sent to `/api/weight` endpoint
3. Weight stored in `weight_logs` table
4. `WeightChart` fetches data and displays trends
5. Analytics calculated for trend analysis

### Exercise Tracking Flow
1. User creates workout session
2. User logs individual exercises
3. Exercise data stored in `exercise_logs`
4. Personal records automatically updated
5. Progress tracked against goals

### Nutrition Tracking Flow
1. User searches food database
2. User logs food intake
3. Macro calculations performed
4. Progress tracked against nutrition goals

### AI Recommendation Flow
1. User requests AI assistance
2. AI analyzes user data (goals, history, preferences)
3. Recommendations generated and stored
4. User provides feedback
5. AI learns from feedback for future recommendations

## Security Considerations
- All endpoints require authentication
- User data isolation (users can only access their own data)
- Input validation on all forms
- Rate limiting on API endpoints
- Secure storage of sensitive health data
- GDPR compliance for data handling

## Performance Considerations
- Database indexing on frequently queried fields
- Caching for exercise and food databases
- Pagination for large datasets
- Optimized queries for analytics
- Lazy loading for charts and visualizations
