
import { Client, Events, GatewayIntentBits } from 'discord.js'
import vueinit from '@/core/vue'
import dotenv from 'dotenv'
import { loadCommands } from '@/core/loader'

vueinit()
dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.once(Events.ClientReady, c => {
	console.log(`已從機器人帳戶${c.user.tag}登入`);
});


client.login(process.env.TOKEN);
