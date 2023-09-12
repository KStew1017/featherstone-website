#!/bin/bash

echo "DATABASE_URL=$(aws ssm get-parameter --name 'DATABASE_URL' --with-decryption | jq '.Parameter.Value')" >> .env