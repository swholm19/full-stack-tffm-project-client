#!/bin/bash

curl "http://localhost:4741/leagues" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "league": {
      "league_name": "'"${NAME}"'",
      "commissioner": "'"${COMMISSIONER}"'",
      "rules": "'"${RULE}"'",
      "champion": "'"${CHAMPION}"'",
      "loser": "'"${LOSER}"'"
    }
  }'

echo
