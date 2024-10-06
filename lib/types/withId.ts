// lib/types/withId.ts
import { ObjectId } from "mongodb"; // Make sure to import ObjectId

export type WithId<T> = T & { _id: ObjectId }; // Use ObjectId for _id
