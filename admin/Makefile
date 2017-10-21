deploy:
	jekyll build
	tar cvzf web.tar.gz _site/*
	ssh deploy@poseidonadmin.zuoyouba.com "rm -rf /var/www/poseidon/admin/*"
	scp web.tar.gz deploy@poseidonadmin.zuoyouba.com:/var/www/poseidon/admin
	ssh deploy@poseidonadmin.zuoyouba.com "cd /var/www/poseidon/admin && tar -xvf web.tar.gz && cp -rf _site/* ."
	ssh deploy@poseidonadmin.zuoyouba.com "cd /var/www/poseidon/admin && rm -rf _site && rm web.tar.gz && rm Makefile"
