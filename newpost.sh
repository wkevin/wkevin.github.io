#!/bin/bash

date=`date +'%Y-%m-%d'`
name="new.post"

if [ $# -gt 0 ]; then
    name=$1
fi

mkdir "images/posts/"$date-$name

fn="_posts/"$date-$name".md"
echo "will creat file:" $fn

if [ ! -f $fn ]; then
    touch $fn
    echo "---">>$fn
    echo "title: ">>$fn
    echo "date: "`date +'%Y-%m-%d %H:%M:%S'`" +0800" >>$fn
    echo "description: " >>$fn
    echo "author: wKevin" >>$fn
    echo "image:      " >>$fn
    echo "    path: " >>$fn
    echo "    thumbnail: " >>$fn
    echo "categories: " >>$fn
    echo "    - " >>$fn
    echo "tags:" >>$fn
    echo "    - " >>$fn
    echo "---" >>$fn
    echo "![](/images/post/"$date"-"$name"/)" >>$fn
    echo "Creat sucess!"
else
    echo "Creat fail! File is existed"
fi
