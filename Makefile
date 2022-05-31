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

build: ## Builds local docker images
	@docker-compose build $${CONTAINER}

down: ## Downs all possible docker containers
	@docker-compose down

stop: ## Stops all possible docker containers
	@docker-compose stop

install: ## Fully prepares a local development environment
	@docker-compose run --rm web


##----------------------------------------------------------------------------------------------------------------------
##@ Development Actions

dev: ## Runs a dev environment
	@docker-compose up


##----------------------------------------------------------------------------------------------------------------------
##@ Formatting Actions

format: ## Formats all code
	@docker-compose run --rm web yarn format


##----------------------------------------------------------------------------------------------------------------------
##@ Shell, Console, and Prompt Actions

shell: build ## Opens a shell into the web container
	@docker-compose run --rm web sh
