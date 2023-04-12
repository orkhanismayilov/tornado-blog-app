const host = 'https://tornado.ismayilov.site';
const apiUrl = `${host}/api`;

export const environment = {
  production: true,
  appName: 'Tornado Blog',
  api: {
    posts: `${apiUrl}/posts`,
    auth: `${apiUrl}/auth`,
  },
};
