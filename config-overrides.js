const { resolve } = require('path');

module.exports = function override(config) {
    config.resolve = {
        ...config.resolve,
        alias: {
            ...config.alias,         
            '@components': resolve(__dirname, 'src/components'),
            '@containers': resolve(__dirname, 'src/containers'),
            '@breakpoints': resolve(__dirname, 'src/breakpoints'),
            '@store': resolve(__dirname, 'src/store'),

        },
    };

    return config;
};