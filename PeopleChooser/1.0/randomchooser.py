from random import random, shuffle
from math import floor
i = open("people.txt", "a")
i.close()
i = open("people.txt", "r")
z = ""
start = False
write = False
if(i.read()==""):
    y = open("people.txt", "a")
    print("Name Setup. Type \"STOP\" to end.")
    while z != "STOP":
        if(start):
            if(write):
                y.write("\n")
            y.write(z)
            write = True
        z = input("")
        start=True
    y.close()
    print("Generating List")
i.close()
i = open("people.txt", "r")
j = i.read()
if(start):
    n = "w"
else:
    n = input("Read or write? R/W ")
n = n.lower()
i.close()
if(n!="a"):
    i = open("output", n)
else:
    i = open("output", "r")
m = []
j = j.split(sep="\n")
k = floor(random()*len(j))
def rstk():
    k = floor(random()*p)
    l = j[k]
def testk(pid):
    if(pid==k):
        print(".", end="")
        return False
    else:
        for s in range(len(m)):
            if(m[s] == k):
                print(",", end="")
                return False
        print("\n")
        return True
l = j[k]
p = len(j)
y = 0
b = ""
e = False
f = 0;
refresh=0
r=""
def re():
    global i, r, refresh
    m = i.read().split(sep="\n")
    i.close()
    print('\nIDs:')
    for o in range(p):
        print(str(o) + " - " + j[o])
    if(r==""):
        r = input("\nYour ID: ")
        r = int(r)
    for h in range(len(m)):
        if(int(m[h])==h):
            'n="w"'
            print('There is one or more self-refs.\nPlease rewrite.')
    '''if(int(m[r]) == r):
        print('There was an error.\nPlease rewrite.')
        if(refresh!=1):
            'refresh=1'
        else:
            "print('Failed to refresh.')"'''
    'else:'
    print("\nYou have:\n",j[int(m[r])],sep="")
    m=[]
if(n == "r"):
    re()
if(n == "w"):
    'k was never needed lol'
    for c in range(p):
        m.append(c)
    shuffle(m)
    for a in range(len(m)):
        b = b + str(m[a])
        if(a<(len(m)-1)):
            b = b + "\n"
    i.write(b)
    i.close()
    if(refresh==1):
       re()
elif(n == "a"):
    m = i.read().split(sep="\n")
    print(len(j)|len(m), "people listed")
    for g in range(len(j)|len(m)):
        print(
            j[g],
            "-",
            j[int(m[g])])
input("\nPress ENTER to exit.")
