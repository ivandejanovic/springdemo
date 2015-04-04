<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Spring Demo</title>
    <link rel="stylesheet" href="css/reset.css">
  </head>
  <body>
    <div>
      <a id="logout" title="Logout" href="j_spring_security_logout">Logout</a>
    </div>
    <div>
      Spring demo app. You can just start adding your code.
    </div>
    <div>
      Message from service: ${message}
    </div>
  </body>
</html>