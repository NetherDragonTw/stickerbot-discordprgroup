import { Events } from 'discord.js'

export const Event = {
    name: Events.ClientReady,
    once: true,
}

export const action = (c) => {
    console.log(`已從機器人帳戶${c.user.tag}登入`);
}