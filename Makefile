save:
	git checkout development
	git add .
	@read -p "info: " -r message && git commit -m "$$message"
	git push

deploy:
	git checkout development
	git save

	ng build --prod --base-href "https://bzhpizza.github.io/"
	rm -rf /tmp/braiz-pizza
	mv dist/braiz-pizza /tmp

	git checkout master
