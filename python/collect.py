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
# array of keyboard press metadata dictionaries
keyDataArr = []

'''
    Defines a module for capturing keyboard input
'''
class AppDelegate(NSObject):
    def applicationDidFinishLaunching_(self, notification):
        mask = NSKeyDownMask
        NSEvent.addGlobalMonitorForEventsMatchingMask_handler_(mask, handler)

# captures the any keyboard presses
def handler(event):
    try:
        # do something with data
        #NSLog(u"%@", event)
        # NSEvent: type=KeyDown loc=(541,419) time=1402434.1 flags=0x100 win=0x0 winNum=0 ctxt=0x0 chars="d" unmodchars="d" repeat=0 keyCode=2
        dataArr = str(event).split()

        charValue = [s for s in dataArr if 'chars' in s and 'unmodchars' not in s][0]
        charValue = charValue[charValue.find('=')+1::]
        charValue = charValue.replace("\"", "")
        keyPoint = {
            "time_interval": str(datetime.datetime.utcnow()),
            "character": str(charValue)
        }
        keyDataArr.append(keyPoint)
        #print str(event)
    except KeyboardInterrupt:
        print 'yolocats'
        AppHelper.stopEventLoop()
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

def main():
    signal.signal(signal.SIGINT, signal_handler)
    signal.signal(signal.SIGTERM, signal_handler)

    # These take some time to start up
    captureMouse()
    takeScreenshot(0) # start with interval 0 for naming screen shots
    threading.Timer(30, stopScript).start() # 2 minutes
    keyboardStart()
    print 'Script Start'

if __name__ == '__main__':
    main()



    