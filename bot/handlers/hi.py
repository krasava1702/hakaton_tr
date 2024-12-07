from aiogram import Router
from aiogram.filters import CommandStart, Command
from aiogram.types import Message

router = Router()

@router.message(CommandStart())
async def hi(message: Message):
    await message.answer(
        text=
        "Вас приветствует бот для отправки заявок о дорожных происшествиях.\n"
        "Вы можете начать создание заявки с помощью команды /application"
    )