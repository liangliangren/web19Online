exports.getMime=function(extname){
	switch(extname){
		case '.html':
		return 'text/html';
		case ".css":
		return "text/css";
		case ".js":
		return "text/javascript";
		case ".json":
		return "text/json";
		default:
		return 'text/html';
	}
}
