#!/bin/bash

# Run this command in terminal to check:
# ID=1 TOKEN=BAhJIiU3MTJhNGQzN2RmODI2MGI2NzQ0MzAzYTNmYjVjNThlYgY6BkVG--af01f81f1a6d0ec40f2e96cfeca2bce1662c3f1f NAME='a' TEAMNAME='a' TEAMSTATEMENT='a' EMAIL='a' sh scripts/users/user-update.sh

curl "http://localhost:4741/users/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "email": "'"${EMAIL}"'",
      "name": "'"${NAME}"'",
      "team_name": "'"${TEAMNAME}"'",
      "team_statement": "'"${TEAMSTATEMENT}"'",
      "league_id": "'"${LEAGUEID}"'"
    }
  }'

echo
