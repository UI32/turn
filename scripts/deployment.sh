#!/bin/bash

:'
This is going to build the project, copy the public folder to docs, 
delete the public folder, stash current changes, checkout to 
deployment branch, pull from dev, add all, commit, push and go to dev, 
'

npm run build &&
cp -r ./public ./docs &&
rm -r ./public &&
git stash &&
git checkout deployment &&
git pull dev &&
git add -all &&
git commit -m 'update' &&
git push &&
git checkout dev &&
echo 'deployment succeeded'