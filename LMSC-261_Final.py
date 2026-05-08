import tkinter as tk
import random
root = tk.Tk()
root.title("TICKLE STEVE")
root.geometry("400x160")

tally = 0
time_left = 1
button_x_coord = 175
button_y_coord = 70
is_initial_click = False
is_button_clicked = False

def button_action():
    global tally
    global button_x_coord
    global button_y_coord
    global button
    global is_initial_click
    global is_button_clicked

    is_button_clicked = True

        # (so that the tally changes, and well as Steve's face)
    tally += 1
    if tally >= 1 and tally < 25:
        button.config(text=":|")
    elif tally >= 25 and tally < 50:
        button.config(text= ":(")
    elif tally >= 50 and tally < 75:
        button.config(text= "X(")
    elif tally >= 75 and tally < 101:
        button.config(text= ">:(")
    else:
        button.config(text="Steve is dead.")
    counter.config(text= "You've tickled Steve " + str(tally) + " times!")

        # (so that the game doesn't start until the button is pressed)
    if is_initial_click == False:
        is_initial_click = True
        button.after(1500, decrement_time)

       # (so that Steve moves whenever the button is pressed)
    if is_button_clicked == True:
        is_button_clicked = False
        button_x_coord = random.randint(30,380)
        button_y_coord = random.randint(50,140)
        button.place(x=button_x_coord, y=button_y_coord)
        time_left = 1

def decrement_time():
    global time_left
    global button_x_coord
    global button_y_coord
    
        # (so that Steve moves by himself if not caught)
    time_left -= 1
    if time_left == 0 and tally >= 1 and tally < 25:
        button_x_coord = random.randint(30,380)
        button_y_coord = random.randint(50,140)
        button.place(x=button_x_coord, y=button_y_coord)
        button.after(1500, decrement_time)
    elif time_left == 0 and tally >= 25 and tally < 50:
        button_x_coord = random.randint(30,380)
        button_y_coord = random.randint(50,140)
        button.place(x=button_x_coord, y=button_y_coord)
        button.after(1000, decrement_time)
    elif time_left == 0 and tally >= 50 and tally < 75:
        button_x_coord = random.randint(30,380)
        button_y_coord = random.randint(50,140)
        button.place(x=button_x_coord, y=button_y_coord)
        button.after(750, decrement_time)
    elif time_left == 0 and tally <=75 and tally < 100:
        button_x_coord = random.randint(30,380)
        button_y_coord = random.randint(50,140)
        button.place(x=button_x_coord, y=button_y_coord)
        button.after(500, decrement_time)
    elif tally <= 100:
        button_x_coord = 175
        button_y_coord = 70
        button.place(x=button_x_coord, y=button_y_coord)
    time_left = 1

taunt = tk.Label(root, text = "You're NEVER gonna catch him!")
taunt.pack()

counter = tk.Label(root, text = "You've tickled Steve 0 times.")
counter.pack()

button = tk.Button(root, text = ">:)", command = button_action)
button.place(x=button_x_coord, y=button_y_coord)

root.mainloop()