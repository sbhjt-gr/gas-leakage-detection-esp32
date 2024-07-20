def http_get(url, type):
    try:
        import socket
        _, _, host, path = url.split('/', 3)
        addr = socket.getaddrinfo(host, 80)[0][-1]
        s = socket.socket()
        s.connect(addr)
        s.send(bytes('GET /%s HTTP/1.0\r\nHost: %s\r\n\r\n' % (path, host), 'utf8'))
        while True:
            data = s.recv(1024)
            if data:
                b = str(data, 'utf8')
                if type != "UPDATE":
                    return b[-1]
            else:
                break
        s.close()
    except:
        pass
    
def map(x,in_min,in_max,out_min,out_max):
    return int( (x - in_min) * (out_max - out_min ) / (in_max - in_min) + out_min )