import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('sticker_help')
.setDescription('顯示幫助內容')


export const action = async (context) => {
    await context.reply('若要使用貼圖,請在聊天欄打出/stickeruse_(貼圖類別ex:meow,pjsk)_(貼圖ID)')
}