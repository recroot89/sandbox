def fib(n): 
    if n == 0:
        return 0
    if n == 1:
        return 1
    return fib(n - 1) + fib(n - 2)

print(fib(6))
print(fib(7))
print(fib(8))
print(fib(9))
