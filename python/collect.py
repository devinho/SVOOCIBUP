import time
import datetime
from threading import Thread
import threading

from pymouse import PyMouse
from pykeyboard import PyKeyboard
from pymouse import PyMouseEvent
from pykeyboard import PyKeyboardEvent

from AppKit import NSApplication, NSApp
from Foundation import NSObject, NSLog
from Cocoa import NSEvent, NSKeyDownMask
from PyObjCTools import AppHelper

import os
import signal
import sys
import json

# define a global mouse
m = PyMouse()
# array of mouse metadata dictionaries
mouseDataArr = []
# array of mouse click metadata dictionaries
clickDataArr = []
# array of keyboard press metadata dictionaries
keyDataArr = []

'''
    Defines a module for capturing keyboard input
'''
class AppDelegate(NSObject):
    def applicationDidFinishLaunching_(self, notification):
        mask = NSKeyDownMask
        NSEvent.addGlobalMonitorForEventsMatchingMask_handler_(mask, handler)

# captures any keyboard presses
def handler(event):
    try:
        dataArr = str(event).split()

        charValue = [s for s in dataArr if 'chars' in s and 'unmodchars' not in s][0]
        charValue = charValue[charValue.find('=')+1::]
        charValue = charValue.replace("\"", "")
        keyPoint = {
            "time_interval": str(datetime.datetime.utcnow()),
            "character": str(charValue)
        }
        keyDataArr.append(keyPoint)
        
    except KeyboardInterrupt:
        print 'yolocats'
        AppHelper.stopEventLoop()
'''
    End Module
'''

'''
    Define a module for listening to click events
'''
class ClickListener(PyMouseEvent):
    def __init__(self):
        PyMouseEvent.__init__(self)

    # captures any mouse clicks
    def click(self, x, y, button, press):
        if button == 1:
            print (x, y)
            if press:
                clickPoint = {
                    "time_interval": str(datetime.datetime.utcnow()),
                    "coordinate_x": x,
                    "coordinate_y": y
                }
                clickDataArr.append(clickPoint)
                
        else:  # Exit if any other mouse button used
            self.stop()
'''
    End Module
'''

# captures the current mouse position every 0.1 seconds
def captureMouse():
    threading.Timer(0.1, captureMouse).start()
    # do something with data
    pos = m.position();
    mousePoint = {
        "time_interval": str(datetime.datetime.utcnow()),
        "coordinate_x": pos[0],
        "coordinate_y": pos[1]
    }
    mouseDataArr.append(mousePoint)

# takes a screen shot every 10 seconds and saves it in the current directory under data/
def takeScreenshot(interval):
    threading.Timer(10, takeScreenshot, args=[interval + 10]).start()
    name = "data/screenshots/screenshort_" + str(interval) + ".png"
    os.system("screencapture " + name)

# starts the keyboard capture using the keyboard module
def keyboardStart():
    app = NSApplication.sharedApplication()
    delegate = AppDelegate.alloc().init()
    NSApp().setDelegate_(delegate)
    AppHelper.runEventLoop()

# writes the global data arrays to a file as an array of json objects
def writeToFile():
    with open('data/mouse_final.json', 'wb') as outfile:
        json.dump(mouseDataArr, outfile)
    with open('data/key_final.json', 'wb') as outfile:
        json.dump(keyDataArr, outfile)
    with open('data/click_final.json', 'wb') as outfile:
        json.dump(clickDataArr, outfile)

# write the data to json on interrupt
def signal_handler(signal, frame):
    print 'done'
    writeToFile()
    os._exit(0)

# kill the program
def stopScript():
    print 'done'
    writeToFile()
    os._exit(0)

def startClickListener():
    C = ClickListener()
    C.run()

def main():
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    # These take some time to start up
    threading.Timer(0, startClickListener).start()
    captureMouse()
    takeScreenshot(0) # start with interval 0 for naming screen shots
    threading.Timer(30, stopScript).start() # 30 seconds. Needs to be greater than 20s for all components to start.
    keyboardStart()
    print 'Script Start'

if __name__ == '__main__':
    main()



    