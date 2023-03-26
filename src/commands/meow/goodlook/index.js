import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('stickeruse_meow_goodlook')
.setDescription('使用好看貼圖')


export const action = async (context) => {
    await context.reply('https://stickershop.line-scdn.net/stickershop/v1/sticker/432726702/android/sticker.png')
}