-include .env

##----------------------------------------------------------------------------------------------------------------------
## Help

.DEFAULT_GOAL := help

help:
	@awk 'BEGIN {FS = ":.*##"} /^[a-zA-Z0-9_-]+:.*?##/ { printf "  \033[36m%-25s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

%:
	@exit 0

.PHONY: tbd

##----------------------------------------------------------------------------------------------------------------------
##@ Installation Actions

install: ## Fully prepares a local development environment
	@docker-compose build

build: ## Builds source code into compiled assets
	@docker-compose run --rm app sh -c "npm run build"

##----------------------------------------------------------------------------------------------------------------------
##@ Development Actions

dev-up: ## Runs a development environment
	@docker-compose up

dev-down: ## Downs all possible docker containers
	@docker-compose down

dev-stop: ## Stops all possible docker containers
	@docker-compose stop

dev-format: ## Formats all code
	@docker-compose run --rm app sh -c "npm run format"

dev-shell: ## Opens a shell into the app container
	@docker-compose run --rm app sh

##----------------------------------------------------------------------------------------------------------------------
##@ Build & Deploy Actions

deploy: ## Deploys compiled assets
	echo 'Deploying requires a sudoer password' && sudo echo ''
	make build
	sudo chown -R $${USER} .
	git stash
	sh -c "git branch -D gh-pages &> /dev/null" && git checkout --orphan gh-pages
	ls | grep -v -e app -e '.git' | xargs rm -rf
	mv app/dist/* ./
	rm -rf app
	git add .
	git commit -am 'Deploy'
	git push -fu origin gh-pages
	git checkout main
	git fetch
	git reset --hard origin/main
