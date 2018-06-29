#!/bin/bash

# Run Using:
# ID=2 sh scripts/meals/update-meal.sh

curl "http://localhost:4741/players/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "player": {
      "name": "'"${NAME}"'",
      "position": "'"${POSTION}"'",
      "keeper": "'"${KEEPER}"'",
      "user_id": "'"${USERID}"'"
    }
  }'

echo
