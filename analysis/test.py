a = {"d":3, "c":4}
b = {"a":2, "d":5}

for i in a:
    if i in b.keys():
        b[i] = b[i] + a[i]
    else:
        b[i] = a[i]


print(b)