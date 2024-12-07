import aiomysql

from aiogram import Router, F
from aiogram.filters import Command
from aiogram.fsm.context import FSMContext
from aiogram.types import Message, CallbackQuery

from systems.get_addres import get_address
from keyboards.application import Application as ApplicationData, confirm_text, confirm_photo, confirm_geo
from utils.mini_local_memory import LocalMemory
from utils.states import Application

router = Router()

@router.message(Command("application"))
async def application(message: Message, state: FSMContext):
    await state.set_state(Application.text)
    await message.reply(
        text=
        "Пожалуйста, опишите ситуацию, отправив сообщение"
    )


@router.message(Application.text, F.text)
async def application_text(message: Message, state: FSMContext):
    text = message.text
    if not 10 < len(text) < 200:
        await message.reply("Простите, сообщение слишком короткое, либо слишком большое! Попробуйте снова")
        return

    await state.update_data(text=text)
    await state.set_state(Application.confirm_text)
    await message.answer(
        text=
        "Ваше сообщение:\n"
        f"{text}\n\n"
        "Если всё в порядке, то подтвердите отправку, если нет, то нажмите повторить",
        reply_markup=confirm_text
    )

@router.callback_query(Application.confirm_text, ApplicationData.filter())
async def application_confirm_text(call: CallbackQuery, callback_data: ApplicationData, state: FSMContext):
    await call.answer()
    match callback_data.action:
        case "confirm_text":
            await state.set_state(Application.photo)
            await call.message.answer(
                text=
                "Пожалуйста, отправьте свой номер телефона сообщением в формате 8xxxxxxxxxx"
            )
        case "replay_text":
            await state.set_state(Application.text)
            await call.message.answer(
                text=
                "Пожалуйста, опишите ситуацию, отправив сообщение"
            )

@router.message(Application.photo, F.text)
async def application_phone(message: Message, state: FSMContext):
    text = message.text
    if not text.isdigit():
        await message.reply("Неправильный номера телефона")
        return

    await state.update_data(phone=int(text))
    await state.set_state(Application.confirm_phone)
    await message.answer(
        text=
        "Ваше сообщение:\n"
        f"{text}\n\n"
        "Если всё в порядке, то подтвердите отправку, если нет, то нажмите повторить",
        reply_markup=confirm_text
    )

@router.callback_query(Application.confirm_phone, ApplicationData.filter())
async def application_confirm_phone(call: CallbackQuery, callback_data: ApplicationData, state: FSMContext):
    await call.answer()
    match callback_data.action:
        case "confirm_phone":
            await state.set_state(Application.photo)
            await call.message.answer(
                text=
                "Отправьте фотографию случившегося"
            )
        case "replay_phone":
            await state.set_state(Application.phone)
            await call.message.answer(
                text=
                "Пожалуйста, отправьте свой номер телефона сообщением в формате 8xxxxxxxxxx"
            )

@router.message(Application.photo, F.photo)
async def application_photo(message: Message, state: FSMContext):
    await state.set_state(Application.confirm_photo)
    await state.update_data(photo=message.photo[-1].file_id)
    await message.answer_photo(
        photo=message.photo[-1].file_id,
        caption=
        "Если всё в порядке, то подтвердите отправку, если нет, то нажмите повторить",
        reply_markup=confirm_photo
    )

@router.callback_query(Application.confirm_photo, ApplicationData.filter())
async def application_confirm_photo(call: CallbackQuery, callback_data: ApplicationData, state: FSMContext):
    await call.answer()
    match callback_data.action:
        case "confirm_photo":

            # --- логика

            await state.set_state(Application.geo)
            await call.message.answer(
                text=
                "Отправьте геометку"
            )
        case "replay_photo":
            await state.set_state(Application.photo)
            await call.message.answer(
                text=
                "Отправьте фотографию случившегося"
            )

@router.message(Application.geo, F.location)
async def application_geo(message: Message, state: FSMContext):
    latitude = message.location.latitude
    longitude = message.location.longitude
    address = await get_address(latitude, longitude)
    if address is False:
        await message.answer(
            text=
            "Простите, некорректная геометка! Повторите попытку отправив ещё раз"
        )
        return
    await state.set_state(Application.confirm_geo)
    await state.update_data(address=address)
    await message.answer(
        text=
        "Адрес к заявке:\n"
        f"Улица: {address["street"]}\n"
        f"Номер дома: {address["house"]}",
        reply_markup=confirm_geo
    )

@router.callback_query(Application.confirm_geo, ApplicationData.filter())
async def application_confirm_geo(call: CallbackQuery, callback_data: ApplicationData, state: FSMContext):
    await call.answer()
    match callback_data.action:
        case "confirm_geo":
            await call.message.answer(
                text=
                "Спасибо, ваша заявка была отправлена"
            )
            data = await state.get_data()
            conn: aiomysql.Connection = LocalMemory().get("conn")
            cur: aiomysql.Cursor = LocalMemory().get("cur")
            await state.clear()
            await cur.execute(f"INSERT INTO citizen_reports VALUES(NULL, '{data["category"]}', '{data["text"]}', {data["phone"]}, '{data["photo"]}', '{data["address"]["street"]}', '{data["address"]["house"]}', {data["address"]["coords"]["long"]}, {data["address"]["coords"]["lat"]}, NULL)")
            await conn.commit()
        case "replay_geo":
            await state.set_state(Application.geo)
            await call.message.answer(
                text=
                "Отправьте геометку"
            )
