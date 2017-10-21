deploy:
	jekyll build
	tar cvzf web.tar.gz _site/*
	ssh deploy@poseidonclient.zuoyouba.com "rm -rf /var/www/poseidon/client/*"
	scp web.tar.gz deploy@poseidonclient.zuoyouba.com:/var/www/poseidon/client
	ssh deploy@poseidonclient.zuoyouba.com "cd /var/www/poseidon/client && tar -xvf web.tar.gz && cp -rf _site/* ."
	ssh deploy@poseidonclient.zuoyouba.com "cd /var/www/poseidon/client && rm -rf _site && rm web.tar.gz && rm Makefile"
