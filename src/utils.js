const { get } = require('request-promise');

const getImageBuffer = async (url) => {
    return await get({
        url,
        encoding: null
    });
}

const randomItem = arr => arr[(Math.random() * arr.length) | 0];

module.exports = {randomItem, getImageBuffer}