#!/bin/bash

:'
This is going to build the proyect, copy the public folder to docs, 
delete the public folder, stash current changes, checkout to deploy, 
pull from dev, add all, commit, push and go to dev, 
'

npm run build &&
cp -r ./public ./docs &&
rm -r ./public &&
git stash &&
git checkout deploy &&
git pull dev &&
git add -all &&
git commit -m 'update' &&
git push &&
git checkout dev &&
echo 'deployment succeeded'