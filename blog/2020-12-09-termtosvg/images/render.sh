#!/bin/bash

array=( \
    # base16_default_dark \
    dracula \
    # gjm8_play \
    # gjm8_single_loop \
    # gjm8 \
    # powershell \
    progress_bar \
    # putty \
    # solarized_dark \
    # solarized_light \
    # terminal_app \
    ubuntu \
    # window_frame_js \
    # window_frame_powershell \
    window_frame \
    # xterm \
    )

fname=${1%.*}
ftype=${1##*.}
echo filename: ${fname}
echo filetype: ${ftype}

for(( i=0;i<${#array[@]};i++)) 
do
termtosvg render ${1} ${fname}-${array[i]}.svg -t ${array[i]}

done
