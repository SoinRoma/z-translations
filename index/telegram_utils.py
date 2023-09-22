from django.conf import settings
import telegram

lang = {
    "English":"🇬🇧",
    "Russian":"🇷🇺",
    "Uzbek":"🇺🇿",
    "French":"🇫🇷",
    "Spanish":"🇪🇸",
    "Italian":"🇮🇹",
    "German":"🇩🇪",
    "Korean":"🇰🇷",
    "Chinese":"🇨🇳",
    "Turkish":"🇹🇷"
}
caption_for_translation = """
Заявка на ценку перевода
ФИО: {}
Телефон: {}
Почта: {}
Перевести с:{}{}
Перевести на: {}{}
Тип перевода: {}
Отправить расчет: {}
"""
caption_for_resume = "Заявка на сотрудничество"

def send_telegram_message(data, is_ruseme):
    bot = telegram.Bot(token=settings.TELEGRAM['bot_token'])
    doc = telegram.InputFile(data.file)
    if not is_ruseme:
        cap = caption_for_translation.format(data.client_name, data.client_phone, data.client_email, lang[data.from_lang],data.from_lang,
                            lang[data.to_lang], data.to_lang, data.transfer_type, data.send_to)
        bot.send_document(chat_id="@%s" % settings.TELEGRAM['channel_name'], document=doc, caption=cap)
    else:
        bot.send_document(chat_id="@%s" % settings.TELEGRAM['channel_name'], document=doc, caption=caption_for_resume)
    return True