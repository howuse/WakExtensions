/* Copyright (c) 4D, 2012
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in
* all copies or substantial portions of the Software.
*
* The Software shall be used for Good, not Evil.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
* THE SOFTWARE.
*/

var
	actions;
actions = {};


/*
 * STEP 1. Make function name of YOUR_ACTION
 * 
 */
actions.jsHeader = function jsHeader() {
	"use strict";
	
	/*
	 *  STEP 2. The definition of YOUR_ACTION here
	 * 
	 */
	 
	 comment();
	
	return true;
};


/*
 *
 *   ad Js header
 */
 function comment() {
var
comment_snippet;
var
selectedText;
var
new_str;

jsHeader = "/*\n"+
"* This file is part of Wakanda software, licensed by 4D under\n"+
"*  (i) the GNU General Public License version 3 (GNU GPL v3), or\n"+
"*  (ii) the Affero General Public License version 3 (AGPL v3) or\n"+
"*  (iii) a commercial license.\n"+
"* This file remains the exclusive property of 4D and/or its licensors\n"+
"* and is protected by national and international legislations.\n"+
"* In any event, Licensee's compliance with the terms and conditions\n"+
"* of the applicable license constitutes a prerequisite to any use of this file.\n"+
"* Except as otherwise expressly stated in the applicable license,\n"+
"* such license does not include any other license or rights on this file,\n"+
"* 4D's and/or its licensors' trademarks and/or other proprietary rights.\n"+
"* Consequently, no title, copyright or other proprietary rights\n"+
"* other than those specified in the applicable license is granted.\n"+
"*/\n";
var solPath=studio.currentSolution.getSolutionFile().path;
//
var folder = Folder("D:/Dev/Wakanda/First/First");
 var result = [];
 folder.forEachFile(function(file)
 {
	if( file.extension.toLowerCase()=="js") {
	
	
				//someText = someText.replace(/(\r\n|\n|\r)/gm,"");
				result.push(file.path); // store the file path
	 
				//studio.alert(jsHeader.length);//852
				var streamWriter = TextStream(file, "write");
				var streamReader = TextStream(file, "read");
				var readHeader = streamReader.read();//876
				//studio.alert(readHeader);
				if(readHeader.indexOf("Except as otherwise expressly stated in the applicable license")!== -1){
					//studio.alert("contains this header");
				}
				else {
						var tempFile = File(file.path);
						streamWriter.rewind();
						streamWriter.write(jsHeader);
						streamWriter.write(tempFile.toString());// append the message to the end of stream
						streamWriter.close(); 
						streamReader.close();
						//studio.alert("doesn't contain this header");
					  }
				
	 
	 }
 });
 
 //studio.alert(result);
 


};


/*
 *  STEP 3. (optional) Add new action YOUR_ACTION2 here
 *          You should add an entry in manifest.json
 * 
 */
/*
actions.YOUR_ACTION2 = function YOUR_ACTION2() {
	"use strict";
	studio.alert('Define YOUR_ACTION2 here.');
	return true;
};
*/



exports.handleMessage = function handleMessage(message) {
	"use strict";
	var
		actionName;

	actionName = message.action;

	if (!actions.hasOwnProperty(actionName)) {
		studio.alert("I don't know about this message: " + actionName);
		return false;
	}
	actions[actionName](message);
};

