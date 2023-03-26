import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('stickeruse_meow_didiwrong')
.setDescription('使用我錯了嗎貼圖')


export const action = async (context) => {
    await context.reply('https://stickershop.line-scdn.net/stickershop/v1/sticker/432726707/android/sticker.png')
}