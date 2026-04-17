import tkinter as tk
root = tk.Tk()
root.geometry("400x160")

button_pressed = 0

def counter_increases():
    global button_pressed
    button_pressed += 1
    if button_pressed >= 1 and button_pressed < 25:
        button.config(text=":|")
    elif button_pressed >= 25 and button_pressed < 50:
        button.config(text= ":(")
    elif button_pressed >= 50 and button_pressed < 75:
        button.config(text= "X(")
    else:
        button.config(text=">:(")
    counter.config(text= "You've ticked Steve " + str(button_pressed) + " times!")
    
    

taunt = tk.Label(root, text = "You're NEVER gonna catch him!")
taunt.pack()

counter = tk.Label(root, text = "You've tickled Steve 0 times.")
counter.pack()

button = tk.Button(root, text = ">:)", 
                        command = counter_increases)
button.pack()

root.mainloop()