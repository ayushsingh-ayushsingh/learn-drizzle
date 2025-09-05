import { integer, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).notNull().unique(),
});

export const blogsList = pgTable("blogs_list", {
    id: uuid().primaryKey().defaultRandom(),
    heading: text("heading").notNull(),
    email: text("email").notNull(),
    author: text("author").notNull(),
    createdAt: timestamp("created_at").defaultNow(),
    updatedAt: timestamp("updated_at").defaultNow(),
})

export const blogsContent = pgTable("blogs_content", {
    id: uuid().primaryKey().defaultRandom(),
    blogId: uuid("blog_id").notNull().references(() => blogsList.id, {
        onDelete: "cascade",
    }),
    content: text("content").notNull(),
})
