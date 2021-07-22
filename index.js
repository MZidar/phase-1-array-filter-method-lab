
function findMatching(array, string)
{return array.filter(function (str) {return str.toLowerCase() === string.toLowerCase(); });
}




function fuzzyMatch(array, string)
{
    let a = string.length;
    return array.filter(function (str) {return str.slice(0,a) === string; });
}

function matchName(array, string)
{
    return array.filter(function (str) {return str.name === string; });
}