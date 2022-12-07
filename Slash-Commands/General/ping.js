const Discord = require("discord.js")
const config = require("../../Json/config.json")
module.exports = {
    data: new Discord.SlashCommandBuilder()
        .setName("ping")
        .setDescription("Shows the instant ping of the bot."),
    run: async (client, interaction) => {
        interaction.reply((interaction.createdAt.getTime() - new Date().getTime()) + " seen in milliseconds!")
    }
}