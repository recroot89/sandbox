from datetime import datetime


def add_gigasecond(d):
    return datetime.utcfromtimestamp(d.timestamp() + 10**9)


start_time = datetime(1940, 1, 1)

print(add_gigasecond(start_time))
