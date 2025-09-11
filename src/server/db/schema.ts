// Fitness Tracker Database Schema
// Phase 1: Core infrastructure with authentication, user profiles, weight tracking, and goals

import { sql } from "drizzle-orm";
import { index, pgTableCreator, check } from "drizzle-orm/pg-core";

/**
 * Multi-project schema feature of Drizzle ORM
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `swol_${name}`);

// Better Auth Tables (will be used by Better Auth)
export const users = createTable(
  "user",
  (d) => ({
    id: d.uuid().primaryKey().defaultRandom(),
    email: d.varchar({ length: 255 }).notNull().unique(),
    name: d.varchar({ length: 255 }),
    image: d.varchar({ length: 500 }),
    emailVerified: d.timestamp({ withTimezone: true }),
    createdAt: d.timestamp({ withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [
    index("user_email_idx").on(t.email),
  ],
);

export const accounts = createTable(
  "account",
  (d) => ({
    id: d.uuid().primaryKey().defaultRandom(),
    userId: d.uuid().notNull().references(() => users.id, { onDelete: "cascade" }),
    type: d.varchar({ length: 50 }).notNull(),
    provider: d.varchar({ length: 50 }).notNull(),
    providerAccountId: d.varchar({ length: 255 }).notNull(),
    refresh_token: d.text(),
    access_token: d.text(),
    expires_at: d.integer(),
    token_type: d.varchar({ length: 50 }),
    scope: d.varchar({ length: 255 }),
    id_token: d.text(),
    session_state: d.varchar({ length: 255 }),
  }),
  (t) => [
    index("account_userId_idx").on(t.userId),
    index("account_provider_idx").on(t.provider, t.providerAccountId),
  ],
);

export const sessions = createTable(
  "session",
  (d) => ({
    id: d.uuid().primaryKey().defaultRandom(),
    userId: d.uuid().notNull().references(() => users.id, { onDelete: "cascade" }),
    sessionToken: d.varchar({ length: 255 }).notNull().unique(),
    expires: d.timestamp({ withTimezone: true }).notNull(),
  }),
  (t) => [
    index("session_userId_idx").on(t.userId),
    index("session_token_idx").on(t.sessionToken),
  ],
);

export const verificationTokens = createTable(
  "verificationToken",
  (d) => ({
    identifier: d.varchar({ length: 255 }).notNull(),
    token: d.varchar({ length: 255 }).notNull().unique(),
    expires: d.timestamp({ withTimezone: true }).notNull(),
  }),
  (t) => [
    index("verification_token_idx").on(t.token),
  ],
);

// Custom Application Tables

export const userProfiles = createTable(
  "userProfile",
  (d) => ({
    userId: d.uuid().primaryKey().references(() => users.id, { onDelete: "cascade" }),
    age: d.integer(),
    heightCm: d.numeric({ precision: 5, scale: 2 }),
    activityLevel: d.varchar({ length: 20 }).$type<'sedentary' | 'lightly_active' | 'moderately_active' | 'very_active' | 'extremely_active'>(),
    dietaryPreferences: d.text().array(),
    createdAt: d.timestamp({ withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [
    index("user_profile_userId_idx").on(t.userId),
    check("activity_level_check", sql`activity_level IN ('sedentary', 'lightly_active', 'moderately_active', 'very_active', 'extremely_active')`),
  ],
);

export const weightLogs = createTable(
  "weightLog",
  (d) => ({
    id: d.uuid().primaryKey().defaultRandom(),
    userId: d.uuid().notNull().references(() => users.id, { onDelete: "cascade" }),
    weight: d.numeric({ precision: 5, scale: 2 }).notNull(),
    date: d.date().notNull(),
    notes: d.text(),
    createdAt: d.timestamp({ withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
  }),
  (t) => [
    index("weight_userId_idx").on(t.userId),
    index("weight_date_idx").on(t.date),
    index("weight_userId_date_idx").on(t.userId, t.date),
  ],
);

export const goals = createTable(
  "goal",
  (d) => ({
    id: d.uuid().primaryKey().defaultRandom(),
    userId: d.uuid().notNull().references(() => users.id, { onDelete: "cascade" }),
    type: d.varchar({ length: 50 }).notNull().$type<'weight_loss' | 'weight_gain' | 'maintain' | 'muscle_gain' | 'endurance'>(),
    targetValue: d.numeric({ precision: 10, scale: 2 }),
    currentValue: d.numeric({ precision: 10, scale: 2 }),
    targetDate: d.date(),
    status: d.varchar({ length: 20 }).default('active').$type<'active' | 'completed' | 'paused' | 'cancelled'>(),
    title: d.varchar({ length: 255 }),
    description: d.text(),
    createdAt: d.timestamp({ withTimezone: true }).default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: d.timestamp({ withTimezone: true }).$onUpdate(() => new Date()),
  }),
  (t) => [
    index("goal_userId_idx").on(t.userId),
    index("goal_status_idx").on(t.status),
    check("goal_status_check", sql`status IN ('active', 'completed', 'paused', 'cancelled')`),
  ],
); 
