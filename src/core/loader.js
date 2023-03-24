import { REST,Routes, Collection } from 'discord.js'
import fg from 'fast-glob'
import { useAppStore } from '@/store/app'

const updateSlashCommands = async(commands) => {
    const rest = new REST({version: 10}).setToken(process.env.TOKEN)
    const result = await rest.put(
        Routes.applicationGuildCommands(
            process.env.APPLICATION_ID
            '939671559470202940'
        ),
        {
           body: commands,
        }
    )
    console.log(result)
}


export const loadCommands = async() => {
    const appStore = useAppStore()
    const commands = []
    const action = new Collection()
    const files = await fg('@/commands/**/index.js')

    for(const file of files) {
    const cmd = await import(file)
    commands.push(cmd.commands)
    }

    await updateSlashCommands(commands)
}