import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('stickeruse_meow_pa')
.setDescription('使用怕貼圖')


export const action = async (context) => {
    await context.reply('https://stickershop.line-scdn.net/stickershop/v1/sticker/432726741/android/sticker.png')
}