import { describe, it, expect } from 'vitest';
import { QUIZ_QUESTIONS } from '../data/mockData';

describe('Quiz Data Integrity', () => {
  it('should have 12 quiz questions loaded', () => {
    expect(QUIZ_QUESTIONS.length).toBe(12);
  });

  it('each question should have 4 options', () => {
    QUIZ_QUESTIONS.forEach(q => {
      expect(q.options.length).toBe(4);
    });
  });

  it('each question should have a valid correct answer index', () => {
    QUIZ_QUESTIONS.forEach(q => {
      expect(q.correctAnswer).toBeGreaterThanOrEqual(0);
      expect(q.correctAnswer).toBeLessThan(4);
    });
  });

  it('Article 326 question should be correctly indexed', () => {
    const q = QUIZ_QUESTIONS.find(q => q.question.includes('Article'));
    expect(q).toBeDefined();
    expect(q.options[q.correctAnswer]).toBe('Article 326');
  });
});
