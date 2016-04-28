import json
import datetime
import math
from pprint import pprint


def calculate_elapsed(start, end):
	start_time = datetime.datetime.strptime(start, '%Y-%m-%d %H:%M:%S.%f')
	end_time = datetime.datetime.strptime(end, '%Y-%m-%d %H:%M:%S.%f')
	return (end_time - start_time).total_seconds()


with open('data/key_final.json') as data_final:
	data = json.load(data_final)

with open('data/mouse_final.json') as data_final:
	data1 = json.load(data_final)

with open('data/click_final.json') as data_final:
	data2 = json.load(data_final)

dict = dict([
	('1', {"x": 50, "y": 60}),
	('2', {"x": 75, "y": 60}),
	('3', {"x": 105, "y": 60}),
	('4', {"x": 132, "y": 60}),
	('5', {"x": 162, "y": 60}),
	('6', {"x": 187, "y": 60}),
	('7', {"x": 216, "y": 60}),
	('8', {"x": 245, "y": 60}),
	('9', {"x": 274, "y": 60}),
	('0', {"x": 303, "y": 60}),
	('-', {"x": 330, "y": 60}),
	('=', {"x": 358, "y": 60}),
	('q', {"x": 65, "y": 90}),
	('w', {"x": 93, "y": 90}),
	('e', {"x": 120, "y": 90}),
	('r', {"x": 150, "y": 90}),
	('t', {"x": 178, "y": 90}),
	('y', {"x": 205, "y": 90}),
	('u', {"x": 232, "y": 90}),
	('i', {"x": 260, "y": 90}),
	('o', {"x": 288, "y": 90}),
	('p', {"x": 316, "y": 90}),
	('a', {"x": 70, "y": 118}),
	('s', {"x": 100, "y": 118}),
	('d', {"x": 128, "y": 118}),
	('f', {"x": 156, "y": 118}),
	('g', {"x": 184, "y": 118}),
	('h', {"x": 212, "y": 118}),
	('j', {"x": 240, "y": 118}),
	('k', {"x": 268, "y": 118}),
	('l', {"x": 296, "y": 118}),
	('z', {"x": 82, "y": 146}),
	('x', {"x": 110, "y": 146}),
	('c', {"x": 138, "y": 146}),
	('v', {"x": 166, "y": 146}),
	('b', {"x": 196, "y": 146}),
	('n', {"x": 224, "y": 146}),
	('m', {"x": 252, "y": 146}),
	(' ', {"x": 195, "y": 180})])


# SET UP FINAL OBJECT WITH TIME INTERVALS


final = []

start_key = datetime.datetime.strptime(data[0]['time_interval'], '%Y-%m-%d %H:%M:%S.%f')
start_click = datetime.datetime.strptime(data1[0]['time_interval'], '%Y-%m-%d %H:%M:%S.%f')
end_key = datetime.datetime.strptime(data[0]['time_interval'], '%Y-%m-%d %H:%M:%S.%f')
end_click = datetime.datetime.strptime(data1[0]['time_interval'], '%Y-%m-%d %H:%M:%S.%f')

if start_key < start_click:
	start = start_key
else:
	start = start_click

if end_key > end_click:
	elapsed = calculate_elapsed(str(start_key), data[len(data)-1]['time_interval'])
else: 
	elapsed = calculate_elapsed(str(start_key), data1[len(data1)-1]['time_interval'])

i = 0
time_interval = 10
last = math.ceil(elapsed / time_interval)

while i < last:
	obj = {}
	obj['start_time'] = str(start + datetime.timedelta(seconds = time_interval * i))
	obj['mouse_data'] = []
	obj['click_data'] = []
	obj['key_data'] = []
	obj['screenshot'] = 'screen_shot.png'

	final.append(obj)

	i+=1

# PROCESS KEY DATA


for key in data:
	curr_date = datetime.datetime.strptime(key['time_interval'], '%Y-%m-%d %H:%M:%S.%f')
	if key['character'] in dict:
	 	obj = dict[key['character']]
	 	obj['value'] = 20
	 	obj['radius'] = 20
	 	for interval in final:
	 		int_start = datetime.datetime.strptime(interval['start_time'], '%Y-%m-%d %H:%M:%S.%f')
	 		if curr_date > int_start and curr_date < int_start + datetime.timedelta(seconds = time_interval):
	 			for idx, val in enumerate(interval['key_data']):
	 				if val['x'] == obj['x'] and val['y'] == obj['y'] and interval['key_data'][idx]['radius'] < 211:
	 					interval['key_data'][idx]['radius'] += 20
	 					interval['key_data'][idx]['value'] += 20
	 			interval['key_data'].append(obj)

# PROCESS CLICK DATA



for key in data1: 
	curr_date = datetime.datetime.strptime(key['time_interval'], '%Y-%m-%d %H:%M:%S.%f')
	obj = {}
	obj['x'] = math.ceil(key['coordinate_x']/4) + 60 
	obj['y'] = math.ceil(key['coordinate_y']/4) + 30
	obj['value'] = 30
	obj['radius'] = 30
	for interval in final:
	 		int_start = datetime.datetime.strptime(interval['start_time'], '%Y-%m-%d %H:%M:%S.%f')
	 		if curr_date > int_start and curr_date < int_start + datetime.timedelta(seconds = time_interval):
	 			interval['mouse_data'].append(obj)


for key in data2: 
	curr_date = datetime.datetime.strptime(key['time_interval'], '%Y-%m-%d %H:%M:%S.%f')
	obj = {}
	obj['x'] = math.ceil(key['coordinate_x']/4) + 60
	obj['y'] = math.ceil(key['coordinate_y']/4) + 30
	obj['value'] = 30
	obj['radius'] = 30
	for interval in final:
	 		int_start = datetime.datetime.strptime(interval['start_time'], '%Y-%m-%d %H:%M:%S.%f')
	 		if curr_date > int_start and curr_date < int_start + datetime.timedelta(seconds = time_interval):
	 			interval['click_data'].append(obj)

#print json.dumps(final, sort_keys=True, indent=4, separators=(',', ': '))


with open('visualization/public/assets/compiled_file.json', 'wb') as outfile:
        json.dump(final, outfile)
print json.dumps(final, sort_keys=True, indent=4, separators=(',', ': '))
# print heatmap



