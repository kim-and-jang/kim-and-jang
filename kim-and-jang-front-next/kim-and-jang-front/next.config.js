/** @format */

const { config } = require("@fullcalendar/react");
// const withSass = require("@zeit/next-sass");
// module.exports = withSass();
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    // config.module.rules.push({
    //     test: /\.css$/i,
    //     use: ['style-loader', 'css-loader'],
    // });
    return config;
  },
};
