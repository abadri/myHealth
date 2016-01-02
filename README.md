##Installing Mongo DB on MAC

   

```
// update your packages
$ brew update

// install mongoDB
$ brew install mongodb

$ sudo mkdir -p /data/db

$ cd /
$ chmod 777 data
$ cd /data
$ chmod 777 db

//Starting mondodb
$ mongod

```



https://mongolab.com


To connect using the mongo shell:
```
mongo ds037175.mongolab.com:37175/health -u <dbuser> -p <dbpassword>
```
To connect using a driver via the standard MongoDB URI (what's this?):
``` 
mongodb://<dbuser>:<dbpassword>@ds037175.mongolab.com:37175/health
```