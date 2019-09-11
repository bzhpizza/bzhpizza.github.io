save:
	git checkout development
	git add .
	read -p "info: " -r message && git commit -m "$$message"
	git push

deploy:
	git checkout development
	ng build --prod --base-href "https://bzhpizza.github.io/"
	mv dist/braiz-pizza /tmp