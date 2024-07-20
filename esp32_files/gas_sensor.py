from machine import Pin,ADC,PWM
from time import sleep_ms
import random, espnetwork, socket, socketapi, sms
# mq = ADC(Pin(13))
# var = PWM(Pin(26))
count, n = 0, 1
blynk_auth = ''
while True:
#   val = mq.read()
#   val_ = round(socketapi.map(val, 0, 4095, 0, 1023))
    for i in range(90, 200):
#         val_ = random.randint(100, 150)
#         _val_ = random.randint(100, 150)
        val_ = i
        _val_ = i
        
        update_url = 'https://blynk.cloud/external/api/update?token=' + blynk_auth +'&a0='+ str(val_)
        update_url_ = 'https://blynk.cloud/external/api/update?token=' + blynk_auth +'&a1='+ str(_val_)
        
    #   print(f"Old: {val_} New:  {val_}")
        socketapi.http_get(update_url, 'UPDATE')
        socketapi.http_get(update_url_, 'UPDATE')
        if val_ >= 100:
            count += 1
            print("Gas Leakage Detected! Alert In..", count, "Seconds ( Value: ", val_, ')') if count <= 5 else 0
            if count >= 5 and n:
                print("Alert!")
                msg = sms.sms(val_)['message']
                wa = sms.wamessage(val_)
                tg = sms.telegram_call(val_)
                print("SMS:", msg, "\n\nWhatsApp:", wa, "\n\nTelegram:", tg)
                sms_url = 'https://blynk.cloud/external/api/update?token=' + blynk_auth +'&v1='+ str(msg).replace(" ", "+")
                socketapi.http_get(sms_url, 'UPDATE')
                n, buzzer = 0, 1
        elif val_ < 100:
            count = 0
            print("Safe Position")
        else:
            pass
        sleep_ms(1000)
