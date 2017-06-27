FROM tomcat:8.5-jre8

COPY ./target/springdemo.war /usr/local/tomcat/webapps/springdemo.war