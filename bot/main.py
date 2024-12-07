import asyncio

import aiomysql
from aiogram import Bot, Dispatcher, F
from aiogram.client.default import DefaultBotProperties
from dotenv import dotenv_values

from utils.mini_local_memory import LocalMemory
from tools.get_full_path import full_path

from handlers import application, hi




async def main():
    env_data = dotenv_values(f"{full_path()}/.env")
    conn = await aiomysql.connect(
        host='localhost',
        port=3306,
        user=env_data['DB_USER'],
        password=env_data['DB_PASSWORD'],
        db="hackathon"
    )
    cur = await conn.cursor()
    LocalMemory().set("conn", conn)
    LocalMemory().set("cur", cur)
    LocalMemory().set("env_data", env_data)
    bot = Bot(env_data["BOT_TOKEN"], default=DefaultBotProperties(parse_mode="html"))
    dp = Dispatcher()

    dp.include_routers(
        hi.router,
        application.router,
    )
    await bot.delete_webhook(drop_pending_updates=True)

    await dp.start_polling(bot)
    await conn.close()
    cur.close()

if __name__ == "__main__":
    asyncio.run(main())