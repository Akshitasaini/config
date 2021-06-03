FROM openjdk:8
ADD target/UserServiceDocker.jar UserServiceDocker.jar
EXPOSE 8085
ENTRYPOINT ["java",".jar","UserServiceDocker.jar"]