# deployment notes

## Steps

- create an empty repo on github
- clone it
- open it in your code edit
- create default package.jason by typing: 'mpm init -y
- npm i express
- git status - expect to see node_modules, notes.md, package-lock.json, package.json
  - node_modules needs to get ignored.
- setup node script for starting
  - npm i nodemon
  - add ""start":"nodemon index.js""
  - npm start
