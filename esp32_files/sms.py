import urequests as rq
def sms(gas_val):
    url = "https://www.fast2sms.com/dev/bulkV2"
    message = "Alert!! Gas Leakage Detected! Current Leakage Value: "
    payload = f"sender_id=TXTIND&message={message}{gas_val}&route=v3&numbers=7047179573"
    headers = {
        'authorization': "91AYZqcfougRDGkW2EvsBXhiQ8CJdUM0OVxLeNlr4T37apjzHb2ITDdyFiRLHlqprUgQ9J86hSW3C5Y1",
        'Content-Type': "application/x-www-form-urlencoded",
        'Cache-Control': "no-cache",
        }

    response = rq.request("POST", url, data=payload, headers=headers)
    return response.json()

def wamessage(gas_val):
    url = f"https://api.callmebot.com/whatsapp.php?phone=917047179573&text=Gas+Leakage+Detected!+Current+Value:+{gas_val}&apikey=4130129"
    data = rq.get(url).text
    return data

def telegram_call(gas_val):
    url = f"https://api.callmebot.com/start.php?user=@s_gorai&text=Gas+Leakage+Detected!+Current+Value:+{gas_val}"
    data = rq.get(url).text
    return data