import { describe, it, expect } from 'vitest';
import {
  validateRiddle1,
  validateRiddle2,
  validateRiddle3,
  validateRiddle4,
  validateRiddle5,
  getCompletionCode,
  RIDDLE_ANSWERS,
} from './riddles.js';

describe('Riddle Validation', () => {
  describe('Riddle 1', () => {
    it('should validate correct answer', () => {
      expect(validateRiddle1(['ת', 'ס', 'פ', 'ר', 'מ'])).toBe(true);
    });

    it('should reject incorrect answer', () => {
      expect(validateRiddle1(['א', 'ב', 'ג', 'ד', 'ה'])).toBe(false);
    });

    it('should reject wrong length', () => {
      expect(validateRiddle1(['ת', 'ס', 'פ'])).toBe(false);
      expect(validateRiddle1([])).toBe(false);
      expect(validateRiddle1(null)).toBe(false);
    });

    it('should reject partial match', () => {
      expect(validateRiddle1(['ת', 'ס', 'פ', 'ר', 'א'])).toBe(false);
    });
  });

  describe('Riddle 2', () => {
    it('should validate correct answer', () => {
      expect(validateRiddle2(['ט', 'ל', 'ו', 'י', 'ז', 'י', 'ה'])).toBe(true);
    });

    it('should reject incorrect answer', () => {
      expect(validateRiddle2(['א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז'])).toBe(false);
    });

    it('should reject wrong length', () => {
      expect(validateRiddle2(['ט', 'ל', 'ו'])).toBe(false);
      expect(validateRiddle2([])).toBe(false);
      expect(validateRiddle2(null)).toBe(false);
    });
  });

  describe('Riddle 3', () => {
    it('should validate correct answer', () => {
      expect(validateRiddle3('מכונת קפה')).toBe(true);
      expect(validateRiddle3('  מכונת קפה  ')).toBe(true); // with spaces
    });

    it('should reject incorrect answer', () => {
      expect(validateRiddle3('תנור')).toBe(false);
      expect(validateRiddle3('מכונת כביסה')).toBe(false);
    });

    it('should reject empty or null', () => {
      expect(validateRiddle3('')).toBe(false);
      expect(validateRiddle3(null)).toBe(false);
      expect(validateRiddle3(undefined)).toBe(false);
    });
  });

  describe('Riddle 4', () => {
    it('should validate correct answer', () => {
      expect(validateRiddle4(['מ', 'ק', 'ר', 'ר'])).toBe(true);
    });

    it('should reject incorrect answer', () => {
      expect(validateRiddle4(['ת', 'נ', 'ו', 'ר'])).toBe(false);
    });

    it('should reject wrong length', () => {
      expect(validateRiddle4(['מ', 'ק'])).toBe(false);
      expect(validateRiddle4([])).toBe(false);
      expect(validateRiddle4(null)).toBe(false);
    });
  });

  describe('Riddle 5', () => {
    it('should validate correct answer', () => {
      expect(validateRiddle5('תנור')).toBe(true);
      expect(validateRiddle5('  תנור  ')).toBe(true); // with spaces
    });

    it('should reject incorrect answer', () => {
      expect(validateRiddle5('מכונת קפה')).toBe(false);
      expect(validateRiddle5('מקרר')).toBe(false);
    });

    it('should reject empty or null', () => {
      expect(validateRiddle5('')).toBe(false);
      expect(validateRiddle5(null)).toBe(false);
      expect(validateRiddle5(undefined)).toBe(false);
    });
  });

  describe('Completion Code', () => {
    it('should return the completion code', () => {
      const code = getCompletionCode();
      expect(code).toBe('פשפשת');
      expect(typeof code).toBe('string');
    });
  });

  describe('RIDDLE_ANSWERS constant', () => {
    it('should have all riddle answers defined', () => {
      expect(RIDDLE_ANSWERS.riddle1).toBeDefined();
      expect(RIDDLE_ANSWERS.riddle2).toBeDefined();
      expect(RIDDLE_ANSWERS.riddle3).toBeDefined();
      expect(RIDDLE_ANSWERS.riddle4).toBeDefined();
      expect(RIDDLE_ANSWERS.riddle5).toBeDefined();
    });

    it('should have correct answer types', () => {
      expect(Array.isArray(RIDDLE_ANSWERS.riddle1)).toBe(true);
      expect(Array.isArray(RIDDLE_ANSWERS.riddle2)).toBe(true);
      expect(typeof RIDDLE_ANSWERS.riddle3).toBe('string');
      expect(Array.isArray(RIDDLE_ANSWERS.riddle4)).toBe(true);
      expect(typeof RIDDLE_ANSWERS.riddle5).toBe('string');
    });
  });
});


