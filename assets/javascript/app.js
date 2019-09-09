
$("#search").click(function(){
    var searchItem=$("#searchTerm");
    var limit=$("#limit");
    var startYear=$("#startYear");
    var endYear=$("#endYear");
    var apiKey="qI4RzAhO7OerqhKQ6ZHukByZkZOI2zL1";
    var queryURL='';
    //  var searchItem="elections";
    // var limit=6;
    // var startYear='';
    // var endYear='';
    // var apiKey="qI4RzAhO7OerqhKQ6ZHukByZkZOI2zL1";
    // var queryURL='';
    if(startYear===''&& endYear==='')
    {
        queryURL="https://api.nytimes.com/svc/search/v2/articlesearch.json?q="+searchItem+"&api-key="+apiKey;
    }
    else{
        queryURL="https://api.nytimes.com/svc/search/v2/articlesearch.json?begin_date="+startYear+"&end_date="+endYear+"&q="+searchItem+"&api-key="+apiKey;
    }
    $.ajax({
        url:queryURL,
        method:"GET"
    
    }).then(function(response){

        $("#content").text(JSON.parse(JSON.stringify(response)));
    }
    );
}
);

$("#reset").click(function(){
    $("#content").text("");
});

