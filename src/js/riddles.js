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
};

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
 * Get completion code
 */
export function getCompletionCode() {
  return 'פשפשת';
}


