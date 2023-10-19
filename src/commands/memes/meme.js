const { randomInt } = require("crypto");
const { SlashCommandBuilder } = require("discord.js");
const fs = require("fs");

const memeFiles = fs.readdirSync(`./src/commands/memes/memeCollection`).filter((file) => file.endsWith(".mp4"));
const fileAmounts = memeFiles.length - 1;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("meme")
    .setDescription("Gives a random meme!")
    .addIntegerOption(option =>
      option.setName('input')
        .setDescription('The index of the meme to paste.')),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
    });

    var number;
    number = interaction.options.getInteger('input') ?? randomInt(0, fileAmounts);
    if(number > fileAmounts){
      number = randomInt(0, fileAmounts);
    }
    
    // const newMessage = `Your meme: ${randomInt(5)}`; //Gives random number with max 5
    // const newMessage = `Your meme: ${memeFiles.length}`; // Gives amount of files in memeCollection
    // const newMessage = `Your meme: ${memeFiles.at(2)}`; // Gives file name of file at index 10 (9.mp4)

    const newMessage = `Your meme:`;
    await interaction.editReply({
      content: newMessage,
      files: [`./src/commands/memes/memeCollection/${memeFiles.at(number)}`]
    });
  },
};