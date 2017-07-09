$(function() {
	load();
	initModal();
});

function create(name, origin) {
	var header = createHeader();
	
	$.ajax({
		headers: header,
		method : "POST",
		url : "/springdemo/api/whisky/",
		contentType: "application/json",
		data : JSON.stringify({
			name : name,
			origin : origin
		})
	}).done(function() {
		load();
	});
}

function remove(id) {
	var header = createHeader();
	
	$.ajax({
		headers: header,
		method : "DELETE",
		url : "/springdemo/api/whisky/" + id
	}).done(function() {
		load();
	});
}

function update(id, name, origin) {
	var header = createHeader();
	
	$.ajax({
		headers: header,
		method : "PUT",
		url : "/springdemo/api/whisky/" + id,
		contentType: "application/json",
		data : JSON.stringify({
			name : name,
			origin : origin
		})
	}).done(function() {
		load();
	});
}

function load() {
	$("#content").children().remove();
	$.getJSON("/springdemo/api/whisky/", function(data) {
		$.each(data, function(key, val) {
			$(
					"<tr><td>"
					+ val.id
					+ "</td><td>"
					+ val.name
					+ "</td><td>"
					+ val.origin
					+ "</td>"
					+ "<td>"
					+ "<button data-action='edit' class='btn btn-primary btn-sm product-edit' "
					+ "data-toggle='modal' "
					+ "data-target='#productModal' "
					+ "data-name='"
					+ val.name
					+ "' "
					+ "data-origin='"
					+ val.origin
					+ "' "
					+ "data-id='"
					+ val.id
					+ "'>"
					+ "<span class='glyphicon glyphicon-pencil'></span>"
					+ "</button>"
					+ "&nbsp;"
					+ "<button class='btn btn-danger btn-sm product-delete' data-id='"
					+ val.id
					+ "'>"
					+ "   <span class='glyphicon glyphicon-minus'></span>"
					+ "</button>"
					+ "</td>" + "</tr>")
			.appendTo("#content");
		});
		initCallbacks();
	});
}

function createHeader() {
	var token = $("meta[name='_csrf']").attr("content");
	var header = $("meta[name='_csrf_header']").attr("content");
	
	return {[header]: token};
}

function initCallbacks() {
	$(".product-delete").unbind().click(function() {
		var id = $(this).data("id");
		remove(id);
	});
}

function initModal() {
	$("#productModal").on('show.bs.modal', function(event) {
		var button = $(event.relatedTarget);
		var action = button.data('action');
		var id = button.data('id');
		var productAction = $("#productAction");
		productAction.unbind();
		var modal = $(this);
		if (action === "add") {
			modal.find('.modal-title').text("Add a bottle");
			modal.find('#product-name').val("");
			modal.find('#product-origin').val("");
			productAction.click(function() {
				create($("#product-name").val(), $("#product-origin").val());
				$('#productModal').modal('toggle');
			});
		} else {
			modal.find('.modal-title').text("Edit a bottle");
			modal.find('#product-name').val(button.data("name"));
			modal.find('#product-origin').val(button.data("origin"));
			productAction.click(function() {
				update(id, $("#product-name").val(), $("#product-origin").val());
				$('#productModal').modal('toggle');
			});
		}
	})
}

function ajaxLogout1() {
var header = createHeader();
	
	$.ajax({
		headers: header,
		method : "POST",
		url : "/springdemo/logout"
	}).done(function() {
	});
}
