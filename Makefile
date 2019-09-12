clean:
	git checkout master
	@for file in `git ls-files`; do if [ "$$file" != "Makefile" && "$$file" != "node_modules" ]; then git rm -r $$file; fi; done

deploy-master:
	make clean
	mv /tmp/braiz-pizza/* .
	git add .
	git commit -m "rebuild frontend app"
	git push

save:
	git add .
	@read -p "info: " -r message && git commit -m "$$message"
	git push

deploy:
	git checkout development
	git save

	ng build --prod --base-href "https://bzhpizza.github.io/"
	rm -rf /tmp/braiz-pizza
	mv dist/braiz-pizza /tmp

	make deploy-master
