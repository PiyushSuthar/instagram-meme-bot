<p align="center">
    <h1 align="center">Instagram Meme Bot 🤖</h1>
    <p align="center">A Bot that posts Meme from reddit to instagram.</p>
</p>

# Warning ⚠ 
### *`Note: Never use this with your main account, I repeat NEVER!`*

# Usage ✨
There are two ways to use it. One with cron jobs and other one is manually.

First of all, clone this repo on your Machine.
```sh
git clone https://github.com/PiyushSuthar/instagram-meme-bot.git
```
Now go into the cloned directory and install the Dependencies.
```sh
cd instagram-meme-bot && npm install
```

Dependencies Used: 

- [Instagram Private API](https://github.com/dilame/instagram-private-api)
- Express
- dotenv

Now, as I have mentioned above, there are two ways to use it.

> Why? It's because I wanted to host it on Heroku and they provide cron jobs when you give them your credit card details. 😒

First check `.env.example` and make a `.env` file.

```
IG_USERNAME=
IG_PASSWORD=
SECRET_PATH=
```

`SECRET_PATH` is for those who want to schedule cron jobs on Heroku with giving them your credit card details.

### Here's what's my idea for you.
We will use express to schedule task on Heroku. 
How?
```js
app.get(`/${process.env.SECRET_PATH}`, async (req,res)=>{
    // This is the main function imported from src/main.js
    try{
        await Main()
        res.send("Image Posted")
       } catch (err) {
        res.send(`There was some error, ${err}`)
       }
})
```
And Now we will schedule a visit to this Secret Path using [https://cron-job.org/](https://cron-job.org/). It's a free!

> Quick Tip: Generate that secret path using a random password generator to make it difficult to guess.

#### Manually
Now if you manually want to try or use,
just run this command
```sh
npm run test
```

# Contributing 🤝
Contributions are welcomed ❤
