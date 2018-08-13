#!/bin/bash

# Call using:
# ID=3 sh scripts/meals/delete-meal.sh

curl "http://localhost:4741/leagues/${ID}" \
  --include \
  --request DELETE \

echo
