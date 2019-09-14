help:             ## display this help
	@python -c "lines = filter(lambda l: not l.startswith('\t') and l, open('Makefile').read().split('\n')); print('\n'.join(lines))"

clean:            ## remove old build files for replacement
	@for file in `ls`; do if [ "$$file" != "Makefile" ]; then git rm -r $$file; fi; done

deploy-master:    ## deploy local master branch to remote master branch
	git checkout master
	make clean
	mv /tmp/braiz-pizza/* .
	git add .
	git commit -m "rebuild frontend app"
	git push

save:             ## save development work on remote branch
	git checkout development
	git add .
	@read -p "info: " -r message && git commit -m "$$message"
	git push

deploy:           ## build project and push result to master branch
	git checkout development

	ng build --prod --base-href "https://bzhpizza.github.io/"
	rm -rf /tmp/braiz-pizza
	mv dist/braiz-pizza /tmp

	make deploy-master
