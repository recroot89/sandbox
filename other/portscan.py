# -*- coding: utf-8 -*-
import socket
'''
socket
'''

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
target = input('[+] Enter Target IP: ')

def scanner(port):
    '''
    asdasds
    '''
    try:
        sock.connect((target, port))
        return True
    except:
        return False

for portNumber in range(1, 65535):
    if scanner(portNumber):
        print('[*] Port', portNumber, '/tcp', 'is open')
