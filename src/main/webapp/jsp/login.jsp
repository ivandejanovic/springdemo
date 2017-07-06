<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Spring Demo</title>
    <link rel="stylesheet" href="static/css/reset.css">
  </head>
  <body>
    <div>
      <form name='f' action='/springdemo/login' method='POST' class="login_container">
        <!-- <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/> --> 
        <table>
          <tr><td>User:</td><td><input type='text' name='username' value=''></td></tr>
          <tr><td>Password:</td><td><input type='password' name='password'/></td></tr>
          <tr><td colspan='2'><input id="submitId" name="submit" type="submit" value="Login"/></td></tr>
        </table>
      </form>
    </div>
  </body>
</html>