import { LessonContent } from './a1-lessons';
import { c1Unit1Lessons } from './c1-lessons-unit1';
import { c1Unit2Lessons } from './c1-lessons-unit2';
import { c1Unit3Lessons } from './c1-lessons-unit3';
import { c1Unit4Lessons } from './c1-lessons-unit4';
import { c1Unit5Lessons } from './c1-lessons-unit5';
import { c1Unit6Lessons } from './c1-lessons-unit6';
import { c1Unit7Lessons } from './c1-lessons-unit7';
import { c1Unit8Lessons } from './c1-lessons-unit8';
import { c1Unit9Lessons } from './c1-lessons-unit9';
import { c1Unit10Lessons } from './c1-lessons-unit10';

// C1 Level - Advanced English for Arabic Speakers
// 10 Units × 5 Lessons = 50 Lessons Total
// Topics: Nuanced Expression, Academic Writing, Media & Journalism, Law & Politics, Science & Technology, Philosophy & Abstract Thinking, Literary Analysis, Advanced Collocations, Professional Communication, C1 Review

export const C1_LESSONS_CONTENT: Record<string, LessonContent> = {
  // Unit 1: Nuanced Expression - التعبير الدقيق
  ...c1Unit1Lessons,
  
  // Unit 2: Academic Writing - الكتابة الأكاديمية
  ...c1Unit2Lessons,
  
  // Unit 3: Media & Journalism - الإعلام والصحافة
  ...c1Unit3Lessons,
  
  // Unit 4: Law & Politics - القانون والسياسة
  ...c1Unit4Lessons,
  
  // Unit 5: Science & Technology - العلوم والتكنولوجيا
  ...c1Unit5Lessons,
  
  // Unit 6: Philosophy & Abstract Thinking - الفلسفة والتفكير المجرد
  ...c1Unit6Lessons,
  
  // Unit 7: Literary Analysis - التحليل الأدبي
  ...c1Unit7Lessons,
  
  // Unit 8: Advanced Collocations - تلازمات متقدمة
  ...c1Unit8Lessons,
  
  // Unit 9: Professional Communication - التواصل المهني
  ...c1Unit9Lessons,
  
  // Unit 10: C1 Review - مراجعة C1
  ...c1Unit10Lessons,
};

export default C1_LESSONS_CONTENT;
