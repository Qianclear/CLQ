function init(){
	console.log(123);
}
//延迟加载，为了防止读取界面节点时界面未加载完成
setTimeout("init()",500)