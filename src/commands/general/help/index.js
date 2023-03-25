import { SlashCommandBuilder } from 'discord.js'

export const command = new SlashCommandBuilder()
.setName('sticker_help')
.setDescription('顯示幫助內容')


export const action = async(context) => {
    await context.reply('如果您發現你無法看見貼圖指令\n則很抱歉因為您現在處於的伺服器沒有被加入白名單\n請嘗試聯繫阿龍來加入白名單。\n若要使用貼圖,請在聊天欄打出/貼圖 (類別) (貼圖ID)')
}