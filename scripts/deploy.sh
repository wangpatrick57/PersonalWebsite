#!/bin/bash
# source: https://cli.vuejs.org/guide/deployment.html#github-pages

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'www.wangpatrick.com' > CNAME

git init
git lfs install
git lfs track "fpMarketingVid*mp4"
git add -A
git commit -m 'deploy'

# if you are deploying to https://wangpatrick57.github.io
git push -f git@github.com:wangpatrick57/wangpatrick57.github.io.git master

# if you are deploying to https://wangpatrick57.github.io/<REPO>
# git push -f git@github.com:wangpatrick57/<REPO>.git master:gh-pages

cd -
