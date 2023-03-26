import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('stickeruse_meow_uknowsomuch')
.setDescription('使用你知道的太多了貼圖')


export const action = async (context) => {
    await context.reply('https://stickershop.line-scdn.net/stickershop/v1/sticker/432726716/android/sticker.png')
}