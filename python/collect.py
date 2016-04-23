# We should combine all of the listener components here so that the user runs one script.
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

# define a global mouse
m = PyMouse()

# captures the current mouse position every 0.1 seconds
def captureMouse():
    threading.Timer(0.1, captureMouse).start()
    # do something with data
    print m.position();
    print datetime.datetime.utcnow()

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

def keyboardStart(arg):
    app = NSApplication.sharedApplication()
    delegate = AppDelegate.alloc().init()
    NSApp().setDelegate_(delegate)
    AppHelper.runEventLoop()

def main():
    captureMouse()

    
if __name__ == '__main__':
    main()



    