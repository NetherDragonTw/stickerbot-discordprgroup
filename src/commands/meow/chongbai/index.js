import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('stickeruse_meow_chongbai')
.setDescription('使用崇拜貼圖')


export const action = async (context) => {
    await context.reply('https://stickershop.line-scdn.net/stickershop/v1/sticker/432726717/android/sticker.png')
}