from pymouse import PyMouse
from pykeyboard import PyKeyboard

from pymouse import PyMouseEvent
from pykeyboard import PyKeyboardEvent

class MoveHandler(PyMouseEvent):
    def __init__(self):
        PyMouseEvent.__init__(self)

    def move(self, x, y):
        print (x, y)

class KeyHandler(PyKeyboardEvent):
    def __init__(self):
        PyKeyboardEvent.__init__(self)

    def tap(self, keycode, character, press):
        if press:
            print character

# Note: Initializing the handler takes some time
M = MoveHandler()
print "Starting"
M.run()

'''
K = KeyHandler()
print "Starting"
K.run()
'''