p=int(input("Enter a prime number"))
g=int(input("Enter a primitive number"))

a=int(input("Enter a key of Alice:"))
b=int(input("Enter a Key of bob:"))

x=pow(g,a,p)
y=pow(g,b,p)

print("X:",x)
print("Y:",y)

kx=(y**a)%p
ky=(x**b)%p

print("symetric value is: ")
print(kx)
print(ky)