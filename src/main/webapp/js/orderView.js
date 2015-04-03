function getUrlParameters(){
	var urlParameters = '&gridname=Orders' +
						 '&id=Orders' +  orderId +
						 '&customerId=' + $('#customerId option:selected').val();
						
	return urlParameters;
}
					
function validateOrder(){
	return true;
}
					
function processOrder(mode){
	var url = 'order.htm?' + mode + '=true';
	var urlParameters = getUrlParameters();
	$.getJSON(url + urlParameters,
		function(result){
	    	if (result.success == true){
	    		$('#Orders_dialog').empty();
	    		$('#Orders_dialog').text('Entry has been processed successfully');
	    		$('#Orders_dialog').dialog({
	    			title: 'Success',
	    			modal: true,
	    			buttons: {
		    			'Ok': function() {
		    				$('#Orders_grid').trigger('reloadGrid');
							$(this).dialog('close');
							$('#order_dialog').dialog('destroy');
						}
					}
				});
			}
			else{
				var errors = '';
				for (var i = 0; i < result.message.length; i++) {
					errors +=  result.message[i] + ' ';
				}
				$('#Orders_dialog').empty();
				$('#Orders_dialog').text(errors);
				$('#Orders_dialog').dialog({
					title: 'Failed',
					modal: true,
					buttons: {
						'Ok': function() {
							$(this).dialog('close');
						}
					}
				});
			}
		}
	);
}
					
function addRowOrders(){
	var id = 'order_dialog';
	var url = 'order.htm?load=true&id=Orders0&gridname=Orders';
	var title = 'Edit Order';
	openOkCancelDialog(id, url, true, title, true, false, 1000, onOkAddOrderDialog, null);
}
					
function editRowOrders(){
	var rowId = $('#Orders_grid').jqGrid('getGridParam','selrow');
	if( rowId != null ){
		var id = 'order_dialog';
		var url = 'order.htm?load=true&id=' + rowId + '&gridname=Orders';
		var title = 'Edit Order';
		openOkCancelDialog(id, url, true, title, true, false, 1000, onOkEditOrderDialog, null);
	}
	else{
		$( '#Orders_dialogSelectRow' ).dialog();
	}
}

function onOkAddOrderDialog(dialog) {
	var status = false;
	status = validateOrder();
	if (status == true){
		processOrder('add');
	}
}

function onOkEditOrderDialog(dialog) {
	var status = false;
	status = validateOrder();
	if (status == true){
		processOrder('edit');
	}
}