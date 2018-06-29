#!/bin/bash

# Run this command in terminal to check:
# TOKEN=BAhJIiU3MTJhNGQzN2RmODI2MGI2NzQ0MzAzYTNmYjVjNThlYgY6BkVG--af01f81f1a6d0ec40f2e96cfeca2bce1662c3f1f sh scripts/users/users-show.sh

curl "http://localhost:4741/users" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
