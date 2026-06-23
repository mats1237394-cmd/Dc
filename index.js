const { Client, GatewayIntentBits, Events } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });
client.once(Events.ClientReady, c => console.log(`✅ Online: ${c.user.tag}`));
client.on(Events.MessageCreate, async msg => {
  if (msg.author.bot) return;
  if (msg.content === "!ping") await msg.reply("Pong! 🏓");
  if (msg.content === "!help") await msg.reply("Befehle: !ping !help !info");
  if (msg.content === "!info") await msg.reply(`Server: ${client.guilds.cache.size} | Uptime: ${Math.floor(process.uptime()/60)} Min`);
});
client.login(process.env.DISCORD_TOKEN);
