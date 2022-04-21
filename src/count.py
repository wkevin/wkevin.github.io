#!/usr/bin/python3
import sys
import io
import os
import fnmatch

# Usage:
# ./count.py            递归当前目录下所有文件
# ./count.py *.md       计算当前目录下所有文件
# ./count.py README.md  单独计算一个文件

def getFiles(path, suffix):
     return [os.path.join(root, file) for root, dirs, files in os.walk(path) for file in files if file.endswith(suffix)]

file_names = []
if (len(sys.argv) > 1 ):
    file_names = sys.argv[1::1]
else:
    file_names = getFiles(os.curdir,'.md')

sum_words = 0
sum_codes = 0

for file_name in file_names:
    incode = False
    contents_code = ""
    contents_word = ""
    try:
        with io.open(file_name, 'r+', encoding='utf8') as file_obj:
            while True:
                line = file_obj.readline()
                if not line:
                    break
                if (line.strip().startswith('```')):
                    incode = not incode
                    continue
                if incode:
                    contents_code += line
                else:
                    contents_word += line

    except FileNotFoundError:
        print(file_name + ' does not exist.')
    else:
        words = contents_word.replace(" ","").replace("\n","").replace("\r","").replace("\t","")
        codes = contents_code.replace(" ","").replace("\n","").replace("\r","").replace("\t","")
        num_words = len(words)
        num_codes = len(codes)
        print(str(num_words) + "\t" + str(num_codes) + "\t" + file_name)
        sum_words += num_words
        sum_codes += num_codes

def find(pattern, startdir=os.curdir):
    for (thisDir, subsHere, filesHere) in os.walk(startdir):
        for name in subsHere + filesHere:
            if fnmatch.fnmatch(name, pattern):
                fullpath = os.path.join(thisDir, name)
                yield fullpath

def findlist(pattern, startdir=os.curdir, dosort=False):
    matches = list(find(pattern, startdir))
    if dosort: matches.sort()
    return matches

svgs = len(findlist('*.svg'))
print("Words: %-10d SVGs: %-10d Codes: %-10d" % (sum_words,svgs,sum_codes))