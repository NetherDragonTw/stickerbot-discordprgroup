import {SlashCommandBuilder} from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('貼圖 列表')
.setDescription('列出目前可使用的貼圖ID')


export const action = async(context) => {
    await context.reply('目前可用貼圖列表:\n沒有可用列表')
}