# Spring-Boot-React-Project
SpringBoot + React + Maven + Docker + Spring Data + AWS RDS + Beanstalk + Git + Slack + Unit Testing



### Version Description

- Java 17
- Spring Boot 3.1.2
- Maven 3.9.2
- Node.js v20.9
- React 18.2.0
- Ant Design 5.11.0
- Postgres SQL (using docker) 16.0
- Docker 



### Database Related

To enter the database created within Docker, use the following command:

```shell
docker exec -it <docker-postgresSQL-name> psql -U <The username you set.>
```

Alternatively, you can access PostgreSQL externally using an application like Navicat, connecting to the virtual machine's IP address + port 3306.

There is a database called `student`  we created.

 
