import openpyxl

heading = ["Studentname", "Subj1", "Subj2", "Subj3", "Total"]
data = [
    ("Maria", 70, 80, 90),
    ("Christina", 45, 55, 65),
    ("Anna", 78, 88, 98),
    ("Alexa", 98, 88, 78),
    ("Rebecca", 67, 77, 87),
    ("Lyla", 83, 93, 63),
    ("Tina", 72, 82, 92),
    ("Mary", 91, 81, 71),
    ("Meredith", 77, 87, 97),
    ("Izzy", 55, 65, 75)
]

wb = openpyxl.Workbook()
sheet = wb.active

# Write headings
sheet.append(heading)

# Write data and calculate total
for name, subj1, subj2, subj3 in data:
    total = subj1 + subj2 + subj3
    sheet.append([name, subj1, subj2, subj3, total])

wb.save("students.xlsx")
print("Excel fiile created")

"""
from tkinter import *

win = Tk()

canvas_width = 200
canvas_height=200
python_green="#476042"

lab1 = Label(text="faizan alam",bg="green")
lab2 = Label(text="aneeza alam", bg="black",fg="white")
btn1 = Button(text="I love you",bg="red",fg="pink")
btn2 = Button(text="I hate you", bg="black",fg="white")
frm1 = Frame()
etr1 = Entry(bg="black",fg="white")
w=Canvas(win, width=canvas_width,height=canvas_height)
w.pack()
points=[100, 140, 110, 110, 140, 100, 110, 90, 100, 60, 90, 90, 60, 100, 90, 110]
w.create_polygon(points, outline=python_green, fill='green', width=3)

lab1.pack()
lab2.pack()
btn1.pack(side= LEFT)
btn2.pack(side=RIGHT)
etr1.pack()


win.mainloop()



from tkinter import*
#canvas_width = 200
#canvas_height=200
#python_green="#476042"
master=Tk()
#w=Canvas(master, width=canvas_width,height=canvas_height)
#w.pack()
#points=[100, 140, 110, 110, 140, 100, 110, 90, 100, 60, 90, 90, 60, 100, 90, 110]
#w.create_polygon(points, outline=python_green, fill='green', width=3)
#mainloop()

Label(text="Anni").pack()
separator = Frame(height=2, bd=1, relief=SUNKEN)
separator.pack(fill=X, padx=5, pady=5)
Label(text="you are").pack()
separator = Frame(height=2, bd=1, relief=SUNKEN)
separator.pack(fill=X, padx=5, pady=5)
Label(text="special").pack()
separator = Frame(height=2, bd=1, relief=SUNKEN)
separator.pack(fill=X, padx=5, pady=5)
Label(text="for me").pack()
separator = Frame(height=2, bd=1, relief=SUNKEN)
separator.pack(fill=X, padx=5, pady=5)
Label(text="always").pack()
separator = Frame(height=2, bd=1, relief=SUNKEN)
separator.pack(fill=X, padx=5, pady=5)
Label(text="stay with me").pack()

mainloop

try:
    i=(1,2,3,4,5,6,7,7)
    for item in i:
        l=(i%2)
        print(l==0)
except:
    print("there is an error in the syntax")
else:
    print("see your code is succesfully excuted")
finally:
    print("this is the end of the code")

while (True):
    try:
        x=int(input("Enter value:"))
        print("the multiply of your nunmber by 2 is:",x*2)
        break
    except :
        print("Opps!the value you enter is worng please do check it")

while(True):
    try:
        x=int(input("Enter your first number:"))
        y=int(input("Enter your second number:"))
        z=x/y
        print("the division of first and second value is:",z)
        break
    except :
        print("Apka enter kara hua denominator number please change kro")

try:
    raise NameError('hello')
except:
    print("hello")
    raise

def divide(x,y):
    while(True):
        try:
                result=x/y
        except:
            print("please check wether the number added is not zero")
        else:
            print("the result is :",result)
            break
        finally:
            print("the code execution is finshed")
x=int(input("Enter 1st value:"))
y=int(input("Enter 2nd value:"))
divide(x,y)

a= open("faizan2.py","rt")
f= a.read()
print(f)
a.close()

b = open("file1.py", "r+")
c = b.write("\n i love you...\nit is not the word it is just the feeling\n that i feel for u right now")
print(c)
d = b.read()
print(d)
b.close()

def anni():
    love=open("faizan4","A+")
    faizan=love

print("let's start the coding")
def voting():
    while(True):
        try:
            age=int(input("Enter your Age:"))
            if (age>=18):
                print("please Enter the voting details for further query's")
                
            else:
                print("You are not eligible for the voting!")
                
        except ValueError:
            print("please enter only numbers")

        pass

voting()

def voting():
    while(True):
        try:
            age=int(input("Enter you age:"))
            if(age>=18):
                if(age==18):
                    print("you are fresher in voting!Do make your voter ID")
                else:
                    print("Do take part in voting for future benifit")
            else:
                print("OPP's! you are not eligible for voting")
                break
        except ValueError:
            print("Please Enter only age:")

voting()


"""

















