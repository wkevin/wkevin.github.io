#!/bin/bash

date=`date +'%Y-%m-%d'`
name="new.post"

if [ $# -gt 0 ]; then
    name=$1
fi

fn="_posts/"$date-$name".md"
echo "will creat file:" $fn

if [ ! -f $fn ]; then
    touch $fn
    echo "Creat sucess!"
else
    echo "Creat fail! File is existed"
fi
