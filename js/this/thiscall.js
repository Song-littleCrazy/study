debugger;   //用debugger进行测试
function foo() {
    console.log( this.a );
}

var obj = {
    a:2
};

var bar = function() {
    foo.call( obj );
};

bar();
setTimeout(bar, 100);

bar.call(global);