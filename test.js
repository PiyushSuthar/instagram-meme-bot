const main = require("./src/main")

const Test = async() => {
    try {
        await main()
        console.log("Image Posted")
    } catch (err) {
        console.log(err);    
        console.log("There was an error");
    }
}

Test()