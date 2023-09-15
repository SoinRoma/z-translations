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
caption = """
Name: {}
Phone: {}
Email: {}
From:{}{}
To: {}{}
Transfer type: {}
Send To: {}
    """
def send_telegram_message(data):
    bot = telegram.Bot(token=settings.TELEGRAM['bot_token'])
    doc = telegram.InputFile(data.file)
    cap = caption.format(data.client_name, data.client_phone, data.client_email, lang[data.from_lang],data.from_lang,
                        lang[data.to_lang], data.to_lang, data.transfer_type, data.send_to)
    bot.send_document(chat_id="@%s" % settings.TELEGRAM['channel_name'], document=doc, caption=cap)
    return True