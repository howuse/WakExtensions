<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript">
$(function(){
	
	$("#introForm").submit(function(){
	 
	var formInput=$(this).serialize();
	 
	$.getJSON('ajaxWeb/sayHi.action', formInput,function(data) {
	 
	$('.result').html('' + data.greeting + '');
	 
	 
	return false;
	 
	});
	 
	})
</script>
</head>
<body>
<form action="" id="introForm"><label for="name">Enter Your Name</label>
            <input name="name">
            <input type="submit">
 </form>
</body>
</html>
