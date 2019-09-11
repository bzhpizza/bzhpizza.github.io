clean:
	@for file in `ls`; do if [ "$$file" != "Makefile" ]; then git rm -r $$file; fi; done