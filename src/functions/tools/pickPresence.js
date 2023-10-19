const { ActivityType } = require('discord.js');

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Watching,
        text: "Gouden Helden",
        status: "online",
      },
      {
        type: ActivityType.Watching,
        text: "Bloemenpot",
        status: "dnd",
      },
      {
        type: ActivityType.Streaming,
        text: "BloemenBot",
        status: "online",
      },
    ];
    const option = Math.floor(Math.random() * options.length);

    client.user.setPresence({
        activities: [
          {
            name: options[option].text,
            type: options[option].type,
          },
        ],
        status: options[option].status,
      });
  };
};
