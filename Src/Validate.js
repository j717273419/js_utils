
//cn:表示该对象包含无效的值
//en:Indicates that the object contains an invalid value
var IsEmpty = function (obj) {
    var result = true;
    if (obj !== undefined
        && obj !== null
        && obj !== 'null'
        && obj !== 'undefined'
        && obj !== "" 
		&& !isNaN(obj) 
		&& obj !== "NaN") {
        result = false;
    }
    return result;
}

//cn:表示该对象包含有效的值
//en:Indicates that the object contains a valid value
var iasValue = function (obj) {
    return !IsEmpty(obj)
}
