from aiogram import Bot
from aiogram.types import BotCommand, BotCommandScopeAllPrivateChats


async def set_commands(bot: Bot):
    commands = [
        BotCommand(command="/start", description="Запуск бота"),
        BotCommand(command="/report", description="Создание заявки"),
        BotCommand(command="/cancel", description="Отменить создание заявки"),
    ]
    await bot.set_my_commands(commands=commands, scope=BotCommandScopeAllPrivateChats())
