$("#register").click(function() {
  $("#registerForm").toggle();
  $("#welcome").toggle();
  $("#bioLine2").toggle();
  $("#bio").toggle();
  $("#app-header").css("background-image","url(img.jpg)");
  $("#app-header").css("background-position","center");
  $("#app-header").css("background-size","260px");
  $("#app-header").css("background-repeat","no-repeat");
  $("#app-header").css("background-color","#F2F2F2");
  $("#app-header").css("color","rgba(255,0,0,0.1)");
  // $("label").css("color","white");
});

$("#login").click(function() {
  $("#logInForm").toggle();
  $("#welcome").toggle();
  $("#bioLine2").toggle();
  $("#bio").toggle();
  $("#app-header").css("background-image","src:../styles/img.jpg");
  $("#app-header").css("background-position","center");
  $("#app-header").css("background-size","260px");
  $("#app-header").css("background-repeat","no-repeat");
  $("#app-header").css("background-color","#F2F2F2");
  $("#app-header").css("color","rgba(255,0,0,0.1)");
});

$("#goBack_login").click(function() {
  $("#welcome").toggle();
  $("#logInForm").toggle();
  $("#bioLine2").toggle();
  $("#bio").toggle();
  $("form").css("background-color","white");
  $("label").css("color","black");
  $("body").css("background-color","white");
  $("#app-header").css("background-image","none");
  $("#app-header").css("background-color","#E7DBC5");
  $("#app-header").css("color","#BE2F31");
});

$("#goBack_register").click(function() {
  $("#welcome").toggle();
  $("#registerForm").toggle();
  $("#bioLine2").toggle();
  $("#bio").toggle();
  $("form").css("background-color","white");
  $("label").css("color","black");
  $("body").css("background-color","white");
  $("#app-header").css("background-image","none");
  $("#app-header").css("background-color","#E7DBC5");
  $("#app-header").css("color","#BE2F31");
});

$("#login_submit").click(function() {
  $("#dataField").toggle();
  $("#logInForm").toggle();
  $("form").css("background-color","white");
  $("label").css("color","black");
  $("body").css("background-color","white");
});

$("#register_submit").click(function() {
  $("#dataField").toggle();
  $("#registerForm").toggle();
  $("form").css("background-color","white");
  $("label").css("color","black");
  $("body").css("background-color","white");
});

$("#complaint_submit").click(function() {
  $("#complaintForm")[0].reset();
});

$("#task_submit").click(function() {
  $("#task_form")[0].reset();
});

var person = { userID: "", name: "", accessToken: "", picture: "", email: "", age: ""};

    function logIN() {
        FB.login(function (response) {
            if (response.status == "connected") {
                person.userID = response.authResponse.userID;
                person.accessToken = response.authResponse.accessToken;
                FB.api('/me?fields=id,name,age_range,email,picture.type(large)', function (userData) {
                   person.name = userData.name;
                   person.email = userData.email;
                   person.age = userData.age;
                   person.picture = userData.picture.data.url;

                   $.ajax({
                       url: "login.php",
                       method: "POST",
                       data: person,
                       dataType: 'text',
                       success: function (serverResponse) {
                           if (serverResponse == "success")
                           window.location = "index.php";

                       }
                   });
                });
            }
            console.log(response);
        }, {scope: 'public_profile, email'})
    }

  window.fbAsyncInit = function() {
    FB.init({
      appId            : '2578721815503247',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v3.1'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

// var mysql = require("mysql");

// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "",
//   database: "burgers_db"
// });


// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });

// module.exports = connection;

// var random_id = function  () 
// 	{
// 		var id_num = Math.random().toString(9).substr(2,3);
// 		var id_str = Math.random().toString(36).substr(2);
		
// 		return id_num + id_str;
// 	}


// 	//--->create data table > start
// 	var tbl = '';
// 	tbl +='<table class="table table-hover">'

// 		//--->create table header > start
// 		tbl +='<thead>';
// 			tbl +='<tr>';
// 			tbl +='<th>Task Details</th>';
// 			tbl +='<th>Status</th>';
// 			tbl +='<th>Owner</th>';
// 			tbl +='<th>Fee</th>';
// 			tbl +='<th>Options</th>';
// 			tbl +='</tr>';
// 		tbl +='</thead>';
// 		//--->create table header > end

		
// 		//--->create table body > start
// 		tbl +='<tbody>';

// 			//--->create table body rows > start
// 			$.each(connection, function(index, val) 
// 			{
// 				//you can replace with your database row id
// 				var row_id = random_id();

// 				//loop through ajax row data
// 				tbl +='<tr row_id="'+row_id+'">';
// 					tbl +='<td ><div class="row_data" edit_type="click" col_name="#tablecolumn">'+val['fname']+'</div></td>';
// 					tbl +='<td ><div class="row_data" edit_type="click" col_name="#tablecolumn">'+val['lname']+'</div></td>';
// 					tbl +='<td ><div class="row_data" edit_type="click" col_name="#tablecolumn">'+val['email']+'</div></td>';

// 					//--->edit options > start
// 					tbl +='<td>';
					 
// 						tbl +='<span class="btn_edit" > <a href="#" class="btn btn-link " row_id="'+row_id+'" > Edit</a> </span>';

// 						//only show this button if edit button is clicked
// 						tbl +='<span class="btn_save"> <a href="#" class="btn btn-link"  row_id="'+row_id+'"> Save</a> | </span>';
// 						tbl +='<span class="btn_cancel"> <a href="#" class="btn btn-link" row_id="'+row_id+'"> Cancel</a> | </span>';

// 					tbl +='</td>';
// 					//--->edit options > end
					
// 				tbl +='</tr>';
// 			});

// 			//--->create table body rows > end

// 		tbl +='</tbody>';
// 		//--->create table body > end

// 	tbl +='</table>'	
// 	//--->create data table > end

// 	//out put table data
// 	$(document).find('.tbl_user_data').html(tbl);

// 	$(document).find('.btn_save').hide();
// 	$(document).find('.btn_cancel').hide(); 


// 	//--->make div editable > start
// 	$(document).on('click', '.row_data', function(event) 
// 	{
// 		event.preventDefault(); 

// 		if($(this).attr('edit_type') == 'button')
// 		{
// 			return false; 
// 		}

// 		//make div editable
// 		$(this).closest('div').attr('contenteditable', 'true');
// 		//add bg css
// 		$(this).addClass('bg-warning').css('padding','5px');

// 		$(this).focus();
// 	})	
// 	//--->make div editable > end


// 	//--->save single field data > start
// 	$(document).on('focusout', '.row_data', function(event) 
// 	{
// 		event.preventDefault();

// 		if($(this).attr('edit_type') == 'button')
// 		{
// 			return false; 
// 		}

// 		var row_id = $(this).closest('tr').attr('row_id'); 
		
// 		var row_div = $(this)				
// 		.removeClass('bg-warning') //add bg css
// 		.css('padding','')

// 		var col_name = row_div.attr('col_name'); 
// 		var col_val = row_div.html(); 

// 		var arr = {};
// 		arr[col_name] = col_val;

// 		//use the "arr"	object for your ajax call
// 		$.extend(arr, {row_id:row_id});

// 		//out put to show
// 		$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>');
		
// 	})	
// 	//--->save single field data > end

 
// 	//--->button > edit > start	
// 	$(document).on('click', '.btn_edit', function(event) 
// 	{
// 		event.preventDefault();
// 		var tbl_row = $(this).closest('tr');

// 		var row_id = tbl_row.attr('row_id');

// 		tbl_row.find('.btn_save').show();
// 		tbl_row.find('.btn_cancel').show();

// 		//hide edit button
// 		tbl_row.find('.btn_edit').hide(); 

// 		//make the whole row editable
// 		tbl_row.find('.row_data')
// 		.attr('contenteditable', 'true')
// 		.attr('edit_type', 'button')
// 		.addClass('bg-warning')
// 		.css('padding','3px')

// 		//--->add the original entry > start
// 		tbl_row.find('.row_data').each(function(index, val) 
// 		{  
// 			//this will help in case user decided to click on cancel button
// 			$(this).attr('original_entry', $(this).html());
// 		}); 		
// 		//--->add the original entry > end

// 	});
// 	//--->button > edit > end


// 	//--->button > cancel > start	
// 	$(document).on('click', '.btn_cancel', function(event) 
// 	{
// 		event.preventDefault();

// 		var tbl_row = $(this).closest('tr');

// 		var row_id = tbl_row.attr('row_id');

// 		//hide save and cacel buttons
// 		tbl_row.find('.btn_save').hide();
// 		tbl_row.find('.btn_cancel').hide();

// 		//show edit button
// 		tbl_row.find('.btn_edit').show();

// 		//make the whole row editable
// 		tbl_row.find('.row_data')
// 		.attr('edit_type', 'click')
// 		.removeClass('bg-warning')
// 		.css('padding','') 

// 		tbl_row.find('.row_data').each(function(index, val) 
// 		{   
// 			$(this).html( $(this).attr('original_entry') ); 
// 		});  
// 	});
// 	//--->button > cancel > end

	
// 	//--->save whole row entery > start	
// 	$(document).on('click', '.btn_save', function(event) 
// 	{
// 		event.preventDefault();
// 		var tbl_row = $(this).closest('tr');

// 		var row_id = tbl_row.attr('row_id');

		
// 		//hide save and cacel buttons
// 		tbl_row.find('.btn_save').hide();
// 		tbl_row.find('.btn_cancel').hide();

// 		//show edit button
// 		tbl_row.find('.btn_edit').show();


// 		//make the whole row editable
// 		tbl_row.find('.row_data')
// 		.attr('edit_type', 'click')
// 		.removeClass('bg-warning')
// 		.css('padding','') 

// 		//--->get row data > start
// 		var arr = {}; 
// 		tbl_row.find('.row_data').each(function(index, val) 
// 		{   
// 			var col_name = $(this).attr('col_name');  
// 			var col_val  =  $(this).html();
// 			arr[col_name] = col_val;
// 		});
// 		//--->get row data > end

// 		//use the "arr"	object for your ajax call
// 		$.extend(arr, {row_id:row_id});

// 		//out put to show
// 		$('.post_msg').html( '<pre class="bg-success">'+JSON.stringify(arr, null, 2) +'</pre>')
		 

// 	});
// 	//--->save whole row entery > end


// }); 
// </script>

 

// <div class="panel panel-default">
//   <div class="panel-heading"><b> Demo </b> </div>

//   <div class="panel-body">
	
// 	<div class="tbl_user_data"></div>

//   </div>

// </div>

 

// <div class="panel panel-default">
//   <div class="panel-heading"><b>HTML Table Edits/Upates</b> </div>

//   <div class="panel-body">
	
// 	<p>All the changes will be displayed below</p>
// 	<div class="post_msg"> </div>

//   </div>
// </div>