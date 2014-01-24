 var httpObject = null;
 
// Get the HTTP Object
    function getHTTPObjectForBrowser(){
            if (window.ActiveXObject)
                return new ActiveXObject("Microsoft.XMLHTTP");
            else if (window.XMLHttpRequest) return new XMLHttpRequest();
            else {
                alert("Browser does not support AJAX...........");
            return null;
    }
   }
// Change the value of the outputText field
    function setAjaxOutput(){
        if(httpObject.readyState == 4){
            document.getElementById('intValueDiv').innerHTML = httpObject.responseText;
        }
    }
// Implement business logic
        function doAjaxCall(){
            httpObject = getHTTPObjectForBrowser();
            if (httpObject != null) {
                httpObject.open("GET", "callAJax.action?intValue="+document.getElementById('intValueId').value, true);
            httpObject.send(null);
            httpObject.onreadystatechange = setAjaxOutput;
        }
    }
