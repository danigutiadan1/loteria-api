FROM mariadb/server:10.4
COPY ./mariadb/init.sql /docker-entrypoint-initdb.d/init.sql