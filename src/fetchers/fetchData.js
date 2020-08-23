const request = require('request-promise')
const subReddits = require('../../subReddits.json')
const { randomItem } = require('../utils')

const fetchData = async () => {
    const data = await request(`https://meme-api.herokuapp.com/gimme/${randomItem(subReddits)}`, { json: true })
    return data
}

module.exports = fetchData