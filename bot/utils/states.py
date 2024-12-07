from aiogram.fsm.state import StatesGroup, State

class Application(StatesGroup):
    text = State()
    confirm_text = State()
    phone = State()
    confirm_phone = State()
    photo = State()
    confirm_photo = State()
    geo = State()
    confirm_geo = State()
