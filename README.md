# SVOOCIBUP

Spatial Visualization Overlay of Computer Input By Usage Patterns

## Installation (OSX)

* Install Python 2.7
    * if you have Homebrew:
    * brew update
    * brew install python
* Install pip
    * curl https://bootstrap.pypa.io/ez_setup.py -o - | sudo python
    * sudo easy_install pip
* pip install PyObjC       
* pip install pyobjc-framework-Quartz
* pip install pyuserinput

## Note
* keyboard_listener.py will not catch keyboard interrupts. The current solution for stopping the script is finding its pid (ps) and sending a kill signal to that pid (kill -9 <id>).

* Reference: http://stackoverflow.com/questions/17271319/installing-pip-on-mac-os-x

## Final project ~ CS467 @ UIUC
* Sam Fu
* Devin Ho
* Andy Vuong