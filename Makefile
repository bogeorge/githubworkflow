# Below is example from this article
# https://www.adambarker.com/aws-serverless-application-model-lambda-and-nestjs/
.PHONY: build-RuntimeDependenciesLayer build-lambda-common
.PHONY: build-MainFunction

build-MainFunction:
	$(MAKE) HANDLER=src/lambda.ts build-lambda-common

#TODO revisit the approach to making nest cli available...maybe we use a docker image
build-lambda-common:
	npm install
	npm install -g @nestjs/cli 
	rm -rf dist
	nest build
	cp -r dist "$(ARTIFACTS_DIR)/"

# TODO revisit copying of package-lock.json.  Do we need to check for existence and then copy or should we expect it always to be there
build-RuntimeDependenciesLayer:
	mkdir -p "$(ARTIFACTS_DIR)/nodejs"
	cp package.json "$(ARTIFACTS_DIR)/nodejs/"
	npm install --production --prefix "$(ARTIFACTS_DIR)/nodejs/"
	rm "$(ARTIFACTS_DIR)/nodejs/package.json"