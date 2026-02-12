import { LessonContent } from './a1-lessons';
import { c2Unit1Lessons } from './c2-lessons-unit1';
import { c2Unit2Lessons } from './c2-lessons-unit2';
import { c2Unit3Lessons } from './c2-lessons-unit3';
import { c2Unit4Lessons } from './c2-lessons-unit4';
import { c2Unit5Lessons } from './c2-lessons-unit5';
import { c2Unit6Lessons } from './c2-lessons-unit6';
import { c2Unit7Lessons } from './c2-lessons-unit7';
import { c2Unit8Lessons } from './c2-lessons-unit8';
import { c2Unit9Lessons } from './c2-lessons-unit9';
import { c2Unit10Lessons } from './c2-lessons-unit10';

// C2 Level - Proficiency English for Arabic Speakers
// 10 Units × 5 Lessons = 50 Lessons Total
// Topics: Language Mastery, Literature & Poetry, Rhetoric & Persuasion, Advanced Translation, Dialects & Diversity, Creative Writing, Criticism & Analysis, Diplomatic Communication, Specialized Contexts, C2 Review

export const C2_LESSONS_CONTENT: Record<string, LessonContent> = {
  // Unit 1: Language Mastery - الإتقان اللغوي
  ...c2Unit1Lessons,
  
  // Unit 2: Literature & Poetry - الأدب والشعر
  ...c2Unit2Lessons,
  
  // Unit 3: Rhetoric & Persuasion - الخطابة والإقناع
  ...c2Unit3Lessons,
  
  // Unit 4: Advanced Translation - الترجمة المتقدمة
  ...c2Unit4Lessons,
  
  // Unit 5: Dialects & Linguistic Diversity - اللهجات والتنوع اللغوي
  ...c2Unit5Lessons,
  
  // Unit 6: Creative Writing - الكتابة الإبداعية
  ...c2Unit6Lessons,
  
  // Unit 7: Criticism & Analysis - النقد والتحليل
  ...c2Unit7Lessons,
  
  // Unit 8: Diplomatic Communication - التواصل الدبلوماسي
  ...c2Unit8Lessons,
  
  // Unit 9: Specialized Contexts - اللغة في السياقات المتخصصة
  ...c2Unit9Lessons,
  
  // Unit 10: C2 Review - مراجعة C2
  ...c2Unit10Lessons,
};

export default C2_LESSONS_CONTENT;
