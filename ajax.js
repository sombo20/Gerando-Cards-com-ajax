var ajax = new XMLHttpRequest()
ajax.onreadystatechange = function(){
	if(ajax.readyState===4 && ajax.status===200){
		var res=JSON.parse(ajax.responseText)     

		for(var i=0;i<res.length;i++){    
			var img = document.querySelector("img").src="https://picsum.photos/200/300?random"+i
			var title = document.querySelector("h2").innerHTML = res[i].title;
			var texto = document.querySelector("p").innerHTML = res[i].body;
		}
	}
}

ajax.open("GET","https://jsonplaceholder.typicode.com/posts")
ajax.send()
