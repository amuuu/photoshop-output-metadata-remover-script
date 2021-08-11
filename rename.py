import sys
from os import walk
from dotenv import load_dotenv
from pathlib import Path
import os

load_dotenv()

SOURCES = Path(os.getenv('SOURCES'))
RESULTS = Path(os.getenv('RESULTS'))
FINAL = Path(os.getenv('FINAL'))


source_files = []
result_files = []

for (dirpath, dirnames, filenames) in walk(str(SOURCES)):
    source_files.extend(filenames)
    break

source_files.sort()

for (dirpath, dirnames, filenames) in walk(str(RESULTS)):
    result_files.extend(filenames)
    break

result_files.sort()

counter = 0
for i in range (0, len(result_files)):
    os.rename(str(RESULTS/result_files[i]), str(FINAL/source_files[i]))
    counter += 1

print("Renamed " + str(counter) + " files.")
    