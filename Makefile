.PHONY: default
default: ui/node_modules
	cd ui && npm start

.PHONY: build
build: ui/node_modules
	cd ui && npm run build

.PHONY: lint
lint: node_modules
	npx prettier --check .

.PHONY: lint-fix
lint-fix: node_modules
	npx prettier --write .

node_modules: package.json package-lock.json
	npm install
	touch node_modules

ui/node_modules: ui/package.json ui/package-lock.json
	cd ui && npm install
	touch ui/node_modules
