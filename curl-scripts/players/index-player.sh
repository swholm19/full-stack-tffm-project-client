#!/bin/bash

curl "http://localhost:4741/players/${ID}" \
  --include \
  --request GET

echo
