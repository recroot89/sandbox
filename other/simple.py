# -*- coding: utf-8 -*-
def createDict(list1, list2):
    if len(list1) == 0:
        return dict()
    if len(list1) > len(list2):
        for x in range(len(list1) - len(list2)):
            list2.append(None)
    return dict(zip(list1, list2))    

# tests
a = [1, 2, 4, 5, 6, 7, 8]
b = [723, 12, 43, 55, 10]
c = []

print(createDict(a, b))
print(createDict(c, b))


# test = [1, 2, 3, (4, 5), [6, 7], {8, 9}]
# def makeFlat(seq):
#     result = seq.map(x)
# makeFlat(test)
