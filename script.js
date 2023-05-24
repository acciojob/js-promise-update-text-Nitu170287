//your JS code here. If required.
const output = document.getElementById("output") ;

let prom = new Promise((resolve, reject)=>{
	setTimeout(()=>{
	output.innerText = "Hello, world!" 	;
		resolve();
	},1000);
})