#!/bin/sh

if [ $# -gt 0 ] && [ "$1" = "node" ]; then
    while ! nc -z mongodb 27017; do
	echo "Waiting for MongoDB..."
	sleep 3;
    done
fi

exec "$@"