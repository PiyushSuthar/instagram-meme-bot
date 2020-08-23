require('dotenv').config()
const { IgApiClient } = require('instagram-private-api')
const fetchData = require('./fetchers/fetchData');
const { getImageBuffer } = require('./utils')

async function Main(){
    // Creating an Instance
    const ig = new IgApiClient()

    // Generating Device ID, (Not sure why, but it's there in the DOCS ;) )
    ig.state.generateDevice(process.env.IG_USERNAME)

    // Logging into the accounts using environmet variables
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD)

    // Fetching Data {fetchers/fetchData.js}
    const data = await fetchData()

    // Publishing the Image on Instagram
    const post = await ig.publish.photo({
        file: await getImageBuffer(data.url),
        caption: getCaption(data)
    })
    console.log(post.status)
}


function getCaption(data) {
    return `
    ${data.title}

credit:- r/${data.subreddit}

Follow @latestdevmemes for more memes.
    `
}

module.exports = Main