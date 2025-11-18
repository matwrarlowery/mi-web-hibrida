const withTM = require("next-transpile-modules")([
  "@fullcalendar/common",
  "@babel/preset-react",
  "@fullcalendar/common",
  "@fullcalendar/daygrid",
  "@fullcalendar/interaction",
  "@fullcalendar/react",
  "@fullcalendar/timegrid",
  "react-github-btn",
]);

module.exports = withTM({
  reactStrictMode: true,
<<<<<<< HEAD
=======
  output: 'standalone',
>>>>>>> master
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboards/analytics",
        permanent: true,
      },
    ];
  },
});
