/** @format */

const { config } = require('@fullcalendar/react');

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
