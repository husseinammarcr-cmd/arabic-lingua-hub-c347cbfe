import { LessonContent } from './a1-lessons';
import { b2Unit1Lessons } from './b2-lessons-unit1';
import { b2Unit2Lessons } from './b2-lessons-unit2';
import { b2Unit3Lessons } from './b2-lessons-unit3';
import { b2Unit4Lessons } from './b2-lessons-unit4';
import { b2Unit5Lessons } from './b2-lessons-unit5';
import { b2Unit6Lessons } from './b2-lessons-unit6';
import { b2Unit7Lessons } from './b2-lessons-unit7';
import { b2Unit8Lessons } from './b2-lessons-unit8';
import { b2Unit9Lessons } from './b2-lessons-unit9';
import { b2Unit10Lessons } from './b2-lessons-unit10';

// B2 Level - Upper Intermediate English for Arabic Speakers
// 10 Units × 5 Lessons = 50 Lessons Total
// Topics: Writing Styles, Advanced Discussions, Business Terms, Presentations, Articles & Reports, Arguments & Persuasion, Idioms & Phrasal Verbs, Formal/Informal, Comprehensive Test, B2 Review

export const B2_LESSONS_CONTENT: Record<string, LessonContent> = {
  // Unit 1: Writing Styles - أساليب الكتابة
  ...b2Unit1Lessons,
  
  // Unit 2: Advanced Discussions - نقاشات متقدمة
  ...b2Unit2Lessons,
  
  // Unit 3: Business Terms - مصطلحات العمل
  ...b2Unit3Lessons,
  
  // Unit 4: Presentations - عروض وتقديم
  ...b2Unit4Lessons,
  
  // Unit 5: Articles & Reports - مقالات وتقارير
  ...b2Unit5Lessons,
  
  // Unit 6: Arguments & Persuasion - حجج وإقناع
  ...b2Unit6Lessons,
  
  // Unit 7: Idioms & Phrasal Verbs - تعبيرات وأفعال مركبة
  ...b2Unit7Lessons,
  
  // Unit 8: Formal/Informal - رسمي/غير رسمي
  ...b2Unit8Lessons,
  
  // Unit 9: Comprehensive Test - اختبار شامل
  ...b2Unit9Lessons,
  
  // Unit 10: B2 Review - مراجعة B2
  ...b2Unit10Lessons,
};

export default B2_LESSONS_CONTENT;
