#!/bin/bash

curl "http://localhost:4741/players" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "player": {
      "name": "'"${NAME}"'",
      "position": "'"${POSITION}"'",
      "keeper": "'"${KEEPER}"'",
      "user_id": "'"${USERID}"'",
      "roster_spot": "'"${ROSTERSPOT}"'"
    }
  }'

echo
