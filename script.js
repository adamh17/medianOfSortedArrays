function getData(){
    var list1 = document.getElementById('list1').value;
    var list2 = document.getElementById('list2').value;

    var arr1 = []
    var arr2 = []

    for(var num in list1){
        arr1.push(parseInt(num));
    }

    for(var num in list2){
        arr1.push(parseInt(num));
    }
    
    var merged = arr1.concat(arr2);
    merged = merged.sort();
    console.log(typeof(merged))
    
    if(merged.length % 2 === 1){
        
        var answer = merged[merged.length/2];
        document.getElementById('answer').innerHTML = "The median is: " + answer;
    }else{
        
        right = merged[merged.length/2];
        left = merged[(merged.length)-1];
        var answer = (left+right)/2;
        document.getElementById('answer').innerHTML = "The median is: " + answer;
    }
}
