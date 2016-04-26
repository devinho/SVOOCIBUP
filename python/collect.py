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

# define a global mouse
m = PyMouse()
# used for namng screen shots
screenshotInterval = 0

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
        NSLog(u"%@", event)
    except KeyboardInterrupt:
        AppHelper.stopEventLoop()
'''
    End Module
'''

# captures the current mouse position every 0.1 seconds
def captureMouse():
    threading.Timer(0.1, captureMouse).start()
    # do something with data
    print m.position();
    print datetime.datetime.utcnow()

# takes a screen shot every 10 seconds and saves it in the current directory under data/
def takeScreenshot(interval):
    interval += 10
    threading.Timer(10, takeScreenshot, args=[interval]).start()
    name = "data/screenshort_" + str(interval) + ".png"
    os.system("screencapture " + name)

# starts the keyboard capture using the keyboard module
def keyboardStart():
    app = NSApplication.sharedApplication()
    delegate = AppDelegate.alloc().init()
    NSApp().setDelegate_(delegate)
    AppHelper.runEventLoop()

def main():
    captureMouse()
    takeScreenshot(0) # start with interval 0 for naming screen shots
    keyboardStart()
    
if __name__ == '__main__':
    main()



    