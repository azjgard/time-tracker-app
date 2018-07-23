export const DEBUG = true;

const apiBaseUrl = 'http://localhost:4000';

export const apiRoutes = {
  login: `${apiBaseUrl}/auth/login`,
  clockTime: `${apiBaseUrl}/users/timelog`,
};
