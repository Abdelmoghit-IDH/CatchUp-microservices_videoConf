FROM openjdk:11-jre-slim    
ADD target/spring-boot-security-postgresql-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]