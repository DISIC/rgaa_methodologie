"use strict";

var header = document.getElementById("configbtn");
var btnToCreate = document.querySelector("[data-button]");
btnToCreate = btnToCreate.getAttribute("data-button");

var config = {
	"tool" : ["wat","webdev"],
	"level" : ["A","AA","AAA"],
}

function CreateBtn(btn) {//constructeur
	this.text = btn;
	this.show = "Activer le support ";
	this.hide = "Masquer le support ";
	this.id = "btn-"+btn;
	this.nameClass = btn;
}

CreateBtn.prototype = {//prototype

	"createnode" : function() {
		var elt = document.createElement("button");
		elt.id = this.id;
		var text = document.createTextNode(this.text.toUpperCase());
		elt.appendChild(text);
		elt.title = this.hide+this.text;
		btngroup.appendChild(elt);
	},


	"togglecontent" : function(){
		var btnbloc = document.getElementById(this.id);
		var bloc = document.getElementsByClassName(btn.nameClass);
		btnbloc.addEventListener("click",function(){
			btnbloc.classList.toggle("is-inactive");
			if(btnbloc.classList.contains("is-inactive")){
				btn.createCookie(this.id,'1','180');
				this.title = this.title.replace(btn.hide,btn.show);
			}
			else{
				btn.eraseCookie(this.id,'','-1');
				this.title = this.title.replace(btn.show,btn.hide);
			}
			for(i=0;i<bloc.length;i++){
				bloc[i].classList.toggle("is-hidden");
			}
		})
	},

	"createCookie" : function( name, value, days) {
		if ( days ) {
			var datetime = new Date();
			datetime.setTime( datetime.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
			var expires = "; expires=" + datetime.toGMTString();
		}
		else var expires = "";
		document.cookie = name + "=" + value + expires + "; path=/";
	},

	"eraseCookie" : function (name) {
		btn.createCookie( name , "", -1 );
	},
}


function readCookie() {
	var nameEQ = name + "=1";
	var ca = document.cookie.split( ';' );
	for(var i = 0; i < ca.length; i++ ) {
		var c = ca[i];
		while ( c.charAt(0) == ' ' ) c = c.substring( 1, c.length );
		if ( c.indexOf( nameEQ ) == 0 ) return c.substring( nameEQ.length, c.length );
			
		for (var prop in config){	
			for (var e=0, d=config[prop].length ; e<d ;  e++){
				if(c==("btn-"+config[prop][e]+"=1")){
					var btncache = document.getElementById("btn-"+config[prop][e]);
					btncache.classList.toggle("is-inactive");
					btncache.title = btncache.title.replace(btn.hide,btn.show);
					var bloccache = document.getElementsByClassName(config[prop][e]);
					for(d=0;d<bloccache.length;d++){
						bloccache[d].classList.toggle("is-hidden");
					}
				}
			}
		}
	}
};

for (var prop in config){

	if(btnToCreate.contains(prop)){
		var btngroup = document.createElement('div');
		btngroup.className = "btn-group btn-tool clear";
		header.appendChild(btngroup);
		for (var i=0, c=config[prop].length ; i<c ;  i++){
			var btn = new CreateBtn(config[prop][i]);
			btn.createnode();
			btn.togglecontent();
		}
	}
}

var cookieR = (function(){
	readCookie();
})();
