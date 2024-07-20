import network
from time import sleep_ms
wlan = network.WLAN(network.STA_IF)
wlan.active(True)
if not wlan.isconnected():
    print('connecting to network...')
    wlan.connect('', '')
    while not wlan.isconnected():
        print('.....')
        sleep_ms(100)
print('network config:', wlan.ifconfig())
