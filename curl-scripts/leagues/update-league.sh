#!/bin/bash

# Run Using:
# ID=2 sh scripts/meals/update-meal.sh

curl "http://localhost:4741/leagues/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "league": {
      "league_name": "'"${NAME}"'",
      "commissoiner": "'"${COMMISSIONER}"'",
      "rules": "'"${RULE}"'",
      "champion": "'"${CHAMPION}"'",
      "loser": "'"${LOSER}"'"
    }
  }'

echo
