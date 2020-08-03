module.exports = function(controller) {

controller.hears("!ping", (bot, message) => {

    response = "pong!";
    bot.reply(message, response);

});
};