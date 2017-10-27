#!/bin/bash

set -eo pipefail
echo "--- Deploy"
npm run build
gulp deploy
