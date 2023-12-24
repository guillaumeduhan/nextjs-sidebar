gt:
	git add .
	git commit -m "commit"
	git push origin

gm:
	git checkout main
	git pull

gmc:
	make gm
	git checkout -