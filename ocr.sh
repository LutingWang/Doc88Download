###############################################
# File Name: ocr.sh
# Author: Luting Wang
# mail: 2457348692@qq.com
# Created Time: Sun May 17 12:55:26 2020
###############################################
#!/bin/bash

cd images

for file in ./*.png
do
	echo .
	echo $file
	tesseract -l chi_sim $file ${file%.*}
done

cat *.txt >> output
