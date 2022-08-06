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

down: ## Downs all possible docker containers
	@docker-compose down

stop: ## Stops all possible docker containers
	@docker-compose stop

##----------------------------------------------------------------------------------------------------------------------
##@ Development Actions

dev: ## Runs a development environment
	@docker-compose up

format: ## Formats all code
	@docker-compose run --rm app npm run format

shell: build ## Opens a shell into the app container
	@docker-compose run --rm app sh

##----------------------------------------------------------------------------------------------------------------------
##@ Build & Deploy Actions

build: ## Builds source code into compiled assets
	@docker-compose run --rm app npm run build

deploy: build ## Deploys compiled assets
	@echo deploy
