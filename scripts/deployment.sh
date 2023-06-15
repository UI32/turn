#!/bin/bash

:'
This is going to build the project, copy the public folder to docs, 
delete the public folder, stash current changes, checkout to 
deployment branch, pull from dev, add all, commit, push and go to dev, 
'
clear

printf 'This will stash your current changes and update your dev branch after deployment. Do you want to continue? (y/n) '
read answer

if [ "$answer" != "${answer#[Yy]}" ] ;then 
    return 0;
else
    echo "Ok, bye!";
    exit 0;
fi

npm run build &&
rm -r ./docs &&
cp -r ./public ./docs &&
rm -r ./public &&
git stash &&
git checkout deployment &&
git pull origin dev &&
git add --all &&
git commit -m 'update' &&
git push &&
git checkout dev &&
echo 'deployment succeeded'