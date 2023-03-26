import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('sticker_list')
.setDescription('顯示可用的貼圖列表')


export const action = async (context) => {
    await context.reply(process.env.stickerlist)
}