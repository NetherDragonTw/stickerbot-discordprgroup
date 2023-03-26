import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('sticker_version')
.setDescription('顯示目前機器人版本')


export const action = async (context) => {
    await context.reply('目前版本為Ver.1.0.0')
}