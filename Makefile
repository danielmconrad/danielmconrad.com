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
