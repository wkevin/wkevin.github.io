#!/bin/bash

fn=$1

bn=$(basename $1)
name=${bn%.*}
if [ ! -d "blog/$name" ]; then mkdir blog/$name; fi

cmd="git mv _posts/$1 blog/$name/index.md"
echo $cmd
eval ${cmd}

cmd="git mv images/posts/$name blog/$name/images"
echo $cmd
eval ${cmd}
