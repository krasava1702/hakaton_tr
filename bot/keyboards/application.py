
from aiogram.filters.callback_data import CallbackData
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton

class Application(CallbackData, prefix="application"):
    action: str

confirm_text = InlineKeyboardMarkup(inline_keyboard=[
    [
        InlineKeyboardButton(text="Всё правильно", callback_data=Application(action="confirm_text").pack()),
        InlineKeyboardButton(text="Повторить", callback_data=Application(action="replay_text").pack())
    ]
])

confirm_photo = InlineKeyboardMarkup(inline_keyboard=[
    [
        InlineKeyboardButton(text="Всё правильно", callback_data=Application(action="confirm_photo").pack()),
        InlineKeyboardButton(text="Повторить", callback_data=Application(action="replay_photo").pack())
    ]
])

confirm_geo = InlineKeyboardMarkup(inline_keyboard=[
    [
        InlineKeyboardButton(text="Всё правильно", callback_data=Application(action="confirm_geo").pack()),
        InlineKeyboardButton(text="Повторить", callback_data=Application(action="replay_geo").pack())
    ]
])