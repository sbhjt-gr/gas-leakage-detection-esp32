import urequests as rq
def sms(gas_val):
    url = "https://www.fast2sms.com/dev/bulkV2"
    message = "Alert!! Gas Leakage Detected! Current Leakage Value: "
    payload = f"sender_id=TXTIND&message={message}{gas_val}&route=v3&numbers="
    headers = {
        'authorization': "",
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
        }

    response = rq.request("POST", url, data=payload, headers=headers)
    return response.json()

def wamessage(gas_val):
    url = f"https://api.callmebot.com/whatsapp.php?phone=&text=Gas+Leakage+Detected!+Current+Value:+{gas_val}&apikey="
    data = rq.get(url).text
    return data

def telegram_call(gas_val):
    url = f"https://api.callmebot.com/start.php?user=&text=Gas+Leakage+Detected!+Current+Value:+{gas_val}"
    data = rq.get(url).text
    return data
