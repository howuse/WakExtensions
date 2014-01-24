<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="s" uri="/struts-tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<script type='text/javascript' src="${pageContext.request.contextPath}/js/script.js"></script>
<center>
            <h1>
                Use Ajax in Struts2
            </h1>
        </center>
        <div id="intValueDiv" style="color: red;font-weight: bold"></div>
        Please Enter the Integer value :
        <s:textfield value="" id="intValueId" name="intValue" theme="simple"
            onblur="doAjaxCall();"></s:textfield>
        <br />
   
        <s:submit value="submit" align="left" action="ol" onclick="doAjaxCall();"></s:submit>
</body>
</html>
