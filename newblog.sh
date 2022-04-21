#!/bin/bash

topic=""
if [ $# -gt 0 ]; then
  topic=$1
else
  echo "Usage:"
  echo "    ./newblog.sh <topic>"
  exit
fi

date=`date +'%Y-%m-%d'`
mkdir -p "blog/"$date-$topic"/images"

fn="blog/"$date-$topic"/index.mdx"
echo "will creat file:" $fn

if [ ! -f $fn ]; then
    touch $fn
    echo "---">>$fn
    echo "title: $topic">>$fn
    echo "description: \" \"" >>$fn
    echo "authors: wKevin" >>$fn
    echo "tags:" >>$fn
    tags=(${topic//./ })
    for t in ${tags[@]}
    do
      echo "  - $t" >>$fn
    done
    echo "---" >>$fn
    echo "" >>$fn
    echo "Creat sucess!"
else
    echo "Creat fail! File is existed"
fi
