/**
 * Simple router for navigation
 */

export const ROUTES = {
  WELCOME: '/',
  INSTRUCTIONS: '/instructions',
  RIDDLE1: '/riddle/1',
  RIDDLE2: '/riddle/2',
  RIDDLE3: '/riddle/3',
  RIDDLE4: '/riddle/4',
  RIDDLE5: '/riddle/5',
  RIDDLE6: '/riddle/6',
  RIDDLE7: '/riddle/7',
  CELEBRATION: '/celebration',
  END: '/end',
};

export function navigateTo(route) {
  window.location.href = route === ROUTES.WELCOME ? 'index.html' : `${route.replace('/', '')}.html`;
}

export function getCurrentRoute() {
  const path = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';
  
  if (filename === 'index.html' || filename === '') return ROUTES.WELCOME;
  if (filename === 'instructions.html') return ROUTES.INSTRUCTIONS;
  if (filename === 'riddle1.html') return ROUTES.RIDDLE1;
  if (filename === 'riddle2.html') return ROUTES.RIDDLE2;
  if (filename === 'riddle3.html') return ROUTES.RIDDLE3;
  if (filename === 'riddle4.html') return ROUTES.RIDDLE4;
  if (filename === 'riddle5.html') return ROUTES.RIDDLE5;
  if (filename === 'riddle6.html') return ROUTES.RIDDLE6;
  if (filename === 'riddle7.html') return ROUTES.RIDDLE7;
  if (filename === 'celebration.html') return ROUTES.CELEBRATION;
  if (filename === 'end.html') return ROUTES.END;
  
  return ROUTES.WELCOME;
}



