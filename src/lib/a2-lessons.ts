import { LessonContent } from './a1-lessons';
import { a2Unit1Lessons } from './a2-lessons-unit1';
import { a2Unit2Lessons } from './a2-lessons-unit2';
import { a2Unit3Lessons } from './a2-lessons-unit3';
import { a2Unit4Lessons } from './a2-lessons-unit4';
import { a2Unit5Lessons } from './a2-lessons-unit5';
import { a2Unit6Lessons } from './a2-lessons-unit6';
import { a2Unit7Lessons } from './a2-lessons-unit7';
import { a2Unit8Lessons } from './a2-lessons-unit8';
import { a2Unit9Lessons } from './a2-lessons-unit9';
import { a2Unit10Lessons } from './a2-lessons-unit10';

// Combine all A2 lessons into a single registry
export const A2_LESSONS_CONTENT: Record<string, LessonContent> = {
  ...a2Unit1Lessons,
  ...a2Unit2Lessons,
  ...a2Unit3Lessons,
  ...a2Unit4Lessons,
  ...a2Unit5Lessons,
  ...a2Unit6Lessons,
  ...a2Unit7Lessons,
  ...a2Unit8Lessons,
  ...a2Unit9Lessons,
  ...a2Unit10Lessons,
};

// Helper function to get A2 lesson content
export function getA2LessonContent(lessonId: string): LessonContent | undefined {
  return A2_LESSONS_CONTENT[lessonId];
}

// Get all A2 lesson IDs
export function getAllA2LessonIds(): string[] {
  return Object.keys(A2_LESSONS_CONTENT);
}

// Get total A2 lessons count
export function getA2LessonsCount(): number {
  return Object.keys(A2_LESSONS_CONTENT).length;
}
