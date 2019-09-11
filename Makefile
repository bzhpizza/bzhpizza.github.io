clean:
	@for file in `ls`; do if [ "$$file" != "Makefile" ]; then git rm -r $$file; fi; done

deploy-master:
	git checkout master
	make clean
	mv /tmp/braiz-pizza/* .
	git add .
	git commit -m "rebuild frontend app"
	git push

save:
	git checkout development
	git add .
	@read -p "info: " -r message && git commit -m "$$message"
	git push

deploy:
	git checkout development

	ng build --prod --base-href "https://bzhpizza.github.io/"
	rm -rf /tmp/braiz-pizza
	mv dist/braiz-pizza /tmp

	make deploy-master
