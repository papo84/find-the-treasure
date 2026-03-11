/**
 * Riddle validation logic
 * Keeps the same answers as the original project
 */

export const RIDDLE_ANSWERS = {
  riddle1: ['ת', 'ס', 'פ', 'ר', 'מ'], // תספרמ (reverse of מרפסת - balcony)
  riddle2: ['ט', 'ל', 'ו', 'י', 'ז', 'י', 'ה'], // טלוויזיה (television)
  riddle3: 'מכונת קפה', // coffee machine
  riddle4: ['מ', 'ק', 'ר', 'ר'], // מקרר (refrigerator)
  riddle5: 'תנור', // oven
  riddle6: ['מ', 'ת', 'ח', 'ת', 'ל', 'ע', 'ל', 'י', 'ם', 'ש', 'ל', 'ע', 'ץ', 'ה', 'א', 'ב', 'ו', 'ק', 'ד', 'ו'], // מתחת לעלים של עץ האבוקדו
  riddle7: ['מ', 'כ', 'ו', 'נ', 'ת', 'כ', 'ב', 'י', 'ס', 'ה'], // מכונת כביסה (washing machine)
};

function normalizeHebrewLetter(letter) {
  const finalToRegular = {
    ך: 'כ',
    ם: 'מ',
    ן: 'נ',
    ף: 'פ',
    ץ: 'צ',
  };
  return finalToRegular[letter] || letter;
}

/**
 * Validate Riddle 1 - Crossword puzzle
 */
export function validateRiddle1(answers) {
  if (!answers || answers.length !== 5) return false;
  return answers.every((answer, index) => answer === RIDDLE_ANSWERS.riddle1[index]);
}

/**
 * Validate Riddle 2 - Crossword puzzle
 */
export function validateRiddle2(answers) {
  if (!answers || answers.length !== 7) return false;
  return answers.every((answer, index) => answer === RIDDLE_ANSWERS.riddle2[index]);
}

/**
 * Validate Riddle 3 - Text input
 */
export function validateRiddle3(answer) {
  if (!answer) return false;
  return answer.trim() === RIDDLE_ANSWERS.riddle3;
}

/**
 * Validate Riddle 4 - Letter puzzle
 */
export function validateRiddle4(answers) {
  if (!answers || answers.length !== 4) return false;
  return answers.every((answer, index) => answer === RIDDLE_ANSWERS.riddle4[index]);
}

/**
 * Validate Riddle 5 - Text input
 */
export function validateRiddle5(answer) {
  if (!answer) return false;
  return answer.trim() === RIDDLE_ANSWERS.riddle5;
}

/**
 * Validate Riddle 6 - Secret language
 */
export function validateRiddle6(answers) {
  if (!answers || answers.length !== RIDDLE_ANSWERS.riddle6.length) return false;
  return answers.every((answer, index) => {
    const typed = normalizeHebrewLetter((answer || '').trim());
    const expected = normalizeHebrewLetter(RIDDLE_ANSWERS.riddle6[index]);
    return typed === expected;
  });
}

/**
 * Validate Riddle 7 - Gematria (מכונת כביסה)
 */
export function validateRiddle7(answers) {
  if (!answers || answers.length !== 10) return false;
  return answers.every((answer, index) => answer === RIDDLE_ANSWERS.riddle7[index]);
}

/**
 * Get completion code
 */
export function getCompletionCode() {
  return 'פשפשת';
}



