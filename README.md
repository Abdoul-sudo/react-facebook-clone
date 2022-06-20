# Examen React JS : Blog - Users - Todos - Comments - Chat

## Dans powershell (admin)

set-executionpolicy unrestricted

## Lancer json server

npm install -D -g json-server json-server-auth
json-server --watch data/db.json --port 3002
json-server --watch data/db.json -m ./node_modules/json-server-auth --port 3002
