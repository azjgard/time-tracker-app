export const setCookie = (name, value = '', hours) => {
  let expires = '';

  if (hours) {
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + hours);
    expires = expiration.toUTCString();
  }

  document.cookie = `${name}=${value}; expires=${expires}; path=/`;
};

export const getCookie = name => {
  return new Promise(resolve => {
    const cookieFound = false;

    document.cookie.split(';').map(cookieKeyValue => {
      const cookieName = cookieKeyValue.split('=')[0];
      const cookieValue = cookieKeyValue.split('=')[1];

      if (cookieName && cookieValue && cookieName.trim() === name.trim()) {
        resolve(cookieValue);
      }
    });

    if (!cookieFound) {
      resolve(false);
    }
  });
};
