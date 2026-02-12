import { LessonContent } from './a1-lessons';
import { b1Unit1Lessons } from './b1-lessons-unit1';
import { b1Unit2Lessons } from './b1-lessons-unit2';
import { b1Unit3Lessons } from './b1-lessons-unit3';
import { b1Unit4Lessons } from './b1-lessons-unit4';
import { b1Unit5Lessons } from './b1-lessons-unit5';
import { b1Unit6Lessons } from './b1-lessons-unit6';
import { b1Unit7Lessons } from './b1-lessons-unit7';
import { b1Unit8Lessons } from './b1-lessons-unit8';
import { b1Unit9Lessons } from './b1-lessons-unit9';
import { b1Unit10Lessons } from './b1-lessons-unit10';

// B1 Level - Intermediate English for Arabic Speakers
// 10 Units × 5 Lessons = 50 Lessons Total
// Topics: Work & Business, Current Events, Technology, Health, Culture, Environment, Travel, Social Media, Personal Development, Review

export const B1_LESSONS_CONTENT: Record<string, LessonContent> = {
  // Unit 1: Work & Business - العمل والأعمال
  ...b1Unit1Lessons,
  
  // Unit 2: Current Events - الأحداث الجارية
  ...b1Unit2Lessons,
  
  // Unit 3: Technology & Internet - التكنولوجيا والإنترنت
  ...b1Unit3Lessons,
  
  // Unit 4: Health & Wellness - الصحة والعافية
  ...b1Unit4Lessons,
  
  // Unit 5: Culture & Arts - الثقافة والفنون
  ...b1Unit5Lessons,
  
  // Unit 6: Environment - البيئة
  ...b1Unit6Lessons,
  
  // Unit 7: Travel Experiences - تجارب السفر
  ...b1Unit7Lessons,
  
  // Unit 8: Social Media - وسائل التواصل الاجتماعي
  ...b1Unit8Lessons,
  
  // Unit 9: Personal Development - التنمية الشخصية
  ...b1Unit9Lessons,
  
  // Unit 10: Review & Advanced Practice - مراجعة وتدريب متقدم
  ...b1Unit10Lessons,
};

export default B1_LESSONS_CONTENT;
