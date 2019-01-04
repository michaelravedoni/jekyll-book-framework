#!/bin/bash

# Change this if you change the output folder in config.yml
BUILD_DIR="_site"
DEPLOY_DIR="_deploy"
BRANCH="gh-pages"
TEMP=$(mktemp -d -t jgd-XXX)

DIR=$(dirname "$0")
cd $DIR/..

# if [[ $(git status -s) ]]
# then
#     echo "The working directory is dirty. Please commit any pending changes."
#     exit 1;
# fi

echo "Delete and empty ${BUILD_DIR} and ${DEPLOY_DIR} old directories"
rm -rf ${BUILD_DIR}
rm -rf ${DEPLOY_DIR}
mkdir ${BUILD_DIR}
mkdir ${DEPLOY_DIR}

echo "Generating jekyll site with _config-github.yml config file"
# hugo --config=config.yml,config/environments/github.yml
bundle exec jekyll build --config _config.yml,_config-github.yml

echo "Copy ${BUILD_DIR} to ${DEPLOY_DIR}"
cp -r ${BUILD_DIR}/. ${DEPLOY_DIR}

echo "Deploy into ${BRANCH} branch"
cd ${DEPLOY_DIR}
#git checkout --orphan $BRANCH
#rm -rf *
#cp -r ${DEPLOY_DIR}/ .
git add . --dry-run
git commit -am "Automated deploy at $(date)" --allow-empty --dry-run
#git push origin $BRANCH --dry-run


echo -e "Cleaning up"
rm -rf $DEPLOY_DIR
