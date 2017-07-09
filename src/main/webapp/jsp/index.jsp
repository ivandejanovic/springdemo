<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core" %>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="_csrf" content="${_csrf.token}"/>
	<!-- default header name is X-CSRF-TOKEN -->
	<meta name="_csrf_header" content="${_csrf.headerName}"/>
	
    <title>Spring Demo</title>
    <link rel="stylesheet" href="static/css/reset.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script type="text/javascript" src="//code.jquery.com/jquery-1.11.3.min.js"></script>
    <script	type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script	type="text/javascript" src="static/js/whisky.js"></script>
  </head>
  <body>
    <div>
      <a href="logout">Logout no csrf</a>
    </div>
    <div>
      <form action="logout">
        <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>
        <input type="submit" value="form logout 1">
      </form>
    </div>
    <div>
      <form action="<%=request.getContextPath()%>/appLogout" method="POST">
	     <input type="submit" value="form Logout 2"/>
	     <input type="hidden" name="${_csrf.parameterName}" value="${_csrf.token}"/>		
	  </form>
    </div>
    <div>
      <button onclick="ajaxLogout1()">Ajax Logout 1</button>
    </div>
    <div>
      Spring demo app. You can just start adding your code.
    </div>
    <div>
      Message from service: ${message}
    </div>
    <div class="page-header">
			<div class="row">
				<div class="col-md-12">
					<h1>My Whiskies</h1>
					<button class="pull-right btn btn-primary product-add"
						data-action="add" data-toggle="modal" data-target="#productModal">
						<span class="glyphicon glyphicon-plus"></span> Add a new bottle
					</button>
					<table class="table table-striped">
						<thead>
							<tr>
								<th>#</th>
								<th>Name</th>
								<th>Origin</th>
								<th>Actions</th>
							</tr>
						</thead>
						<tbody id="content">
							<!-- filled using Ajax -->
						</tbody>
					</table>
				</div>
			</div>
		</div>
	<div class="modal fade" id="productModal" tabindex="-1" role="dialog">
		<div class="modal-dialog" role="dialog">
			<div class="modal-content">
				<div class="modal-header">
					<button type="button" class="close" data-dismiss="modal">
						<span>&times;</span>
					</button>
					<h4 class="modal-title" id="productModalTitle">Add a bottle</h4>
				</div>
				<div class="modal-body">
					<form>
						<div class="form-group">
							<label for="product-name" class="control-label">Name:</label> <input
								type="text" class="form-control" id="product-name">
						</div>
						<div class="form-group">
							<label for="product-origin" class="control-label">Origin:</label>
							<input type="text" class="form-control" id="product-origin">
						</div>
					</form>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
					<button type="button" id="productAction" class="btn btn-primary">Save</button>
				</div>
			</div>
		</div>
	</div>
  </body>
</html>