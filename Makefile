clean:
	@for file in `ls`; do if [ "$$file" != "Makefile" ]; then git rm -r $$file; fi; done

deploy-master:
	#make clean
	#mv /tmp/braiz-pizza/* .
	git add .
	git commit -m "rebuild frontend app"
	git push
