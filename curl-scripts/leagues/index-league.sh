#!/bin/bash

curl "http://localhost:4741/leagues/${ID}" \
  --include \
  --request GET

echo
