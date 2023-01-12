const Router = require("express").Router();

Router.get('', async (request, response) => {
    try {
        response.send("Hello World");
    }
    catch(error) {
        console.error(error);
    }
});

module.exports = Router;