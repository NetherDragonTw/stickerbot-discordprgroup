
import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`已從機器人帳戶${c.user.tag}登入`);
});


client.login(process.env.token);
