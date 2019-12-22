#!/bin/sh

set -e

source .env

echo "Copying to $SERVER ..."

scp ./index.js $SERVER:$SERVER_PATH

echo "Restarting bot ..."

ssh $SERVER "pm2 restart '$PM2_ID'"