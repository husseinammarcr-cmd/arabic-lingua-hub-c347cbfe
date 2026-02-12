import { describe, it, expect } from "vitest";
import { 
  getLevelIndex, 
  isLevelUnlocked, 
  getNextLesson,
  isLessonUnlocked,
  getUnitProgress,
  getLessonProgress
} from "./useProgress";

describe("useProgress - Level Logic", () => {
  describe("getLevelIndex", () => {
    it("returns correct index for each level", () => {
      expect(getLevelIndex("A1")).toBe(0);
      expect(getLevelIndex("A2")).toBe(1);
      expect(getLevelIndex("B1")).toBe(2);
      expect(getLevelIndex("B2")).toBe(3);
      expect(getLevelIndex("C1")).toBe(4);
      expect(getLevelIndex("C2")).toBe(5);
    });

    it("handles lowercase levels", () => {
      expect(getLevelIndex("a1")).toBe(0);
      expect(getLevelIndex("c2")).toBe(5);
    });

    it("returns 0 for unknown levels", () => {
      expect(getLevelIndex("X1")).toBe(0);
    });
  });

  describe("isLevelUnlocked", () => {
    it("unlocks A1 for new users", () => {
      expect(isLevelUnlocked("A1", null, null)).toBe(true);
    });

    it("unlocks levels at or below placement level", () => {
      expect(isLevelUnlocked("A1", "B1", null)).toBe(true);
      expect(isLevelUnlocked("A2", "B1", null)).toBe(true);
      expect(isLevelUnlocked("B1", "B1", null)).toBe(true);
      expect(isLevelUnlocked("B2", "B1", null)).toBe(false);
    });

    it("uses higher of placement_level or current_level", () => {
      expect(isLevelUnlocked("B2", "A1", "B2")).toBe(true);
      expect(isLevelUnlocked("C1", "C1", "A1")).toBe(true);
    });

    it("unlocks all C levels for C2 placement", () => {
      expect(isLevelUnlocked("C1", "C2", null)).toBe(true);
      expect(isLevelUnlocked("C2", "C2", null)).toBe(true);
    });

    it("unlocks all levels for admin", () => {
      expect(isLevelUnlocked("A1", null, null, true)).toBe(true);
      expect(isLevelUnlocked("B2", null, null, true)).toBe(true);
      expect(isLevelUnlocked("C1", null, null, true)).toBe(true);
      expect(isLevelUnlocked("C2", null, null, true)).toBe(true);
    });
  });

  describe("isLessonUnlocked", () => {
    it("unlocks first lesson of A1 always", () => {
      expect(isLessonUnlocked("A1-u01-l01", [], null, null)).toBe(true);
    });

    it("unlocks next lesson when previous is completed", () => {
      expect(isLessonUnlocked("A1-u01-l02", ["A1-u01-l01"], null, null)).toBe(true);
      expect(isLessonUnlocked("A1-u01-l02", [], null, null)).toBe(false);
    });

    it("unlocks all lessons in levels below user level", () => {
      // User at B2, A1 lessons should all be unlocked
      expect(isLessonUnlocked("A1-u01-l05", [], null, "B2")).toBe(true);
      expect(isLessonUnlocked("A2-u01-l03", [], null, "B2")).toBe(true);
    });

    it("handles C1 and C2 lessons correctly", () => {
      expect(isLessonUnlocked("C1-u01-l01", [], "C1", null)).toBe(true);
      expect(isLessonUnlocked("C2-u01-l01", [], "C2", null)).toBe(true);
    });

    it("unlocks all lessons for admin", () => {
      expect(isLessonUnlocked("A1-u01-l05", [], null, null, true)).toBe(true);
      expect(isLessonUnlocked("B2-u05-l03", [], null, null, true)).toBe(true);
      expect(isLessonUnlocked("C2-u10-l05", [], null, null, true)).toBe(true);
    });
  });

  describe("getNextLesson", () => {
    it("returns next lesson in same unit", () => {
      const next = getNextLesson("A1-u01-l01");
      expect(next).toBe("A1-u01-l02");
    });

    it("returns first lesson of next unit when unit ends", () => {
      const next = getNextLesson("A1-u01-l05");
      expect(next).toBe("A1-u02-l01");
    });
  });
});

describe("useProgress - Unit Progress", () => {
  describe("getUnitProgress", () => {
    it("calculates unit completion correctly", () => {
      const completedLessons = ["A1-u01-l01", "A1-u01-l02", "A1-u01-l03", "A1-u01-l04", "A1-u01-l05"];
      const progress = getUnitProgress("A1", completedLessons, null, null);
      
      expect(progress[0].isCompleted).toBe(true);
      expect(progress[0].completedLessons).toBe(5);
    });

    it("unlocks all units for levels below user level", () => {
      const progress = getUnitProgress("A1", [], null, "B2");
      
      // All A1 units should be unlocked for B2 user
      progress.forEach(unit => {
        expect(unit.isUnlocked).toBe(true);
      });
    });
  });

  describe("getLessonProgress", () => {
    it("tracks lesson completion within unit", () => {
      const completedLessons = ["A1-u01-l01", "A1-u01-l02"];
      const progress = getLessonProgress("A1", "A1-u01", completedLessons, null, null);
      
      expect(progress[0].isCompleted).toBe(true);
      expect(progress[1].isCompleted).toBe(true);
      expect(progress[2].isCompleted).toBe(false);
    });
  });
});
