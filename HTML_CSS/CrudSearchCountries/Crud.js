var app = new function(){
    this.el = document.getElementById('countries');
    this.countries = ['Sweden', 'Germany','Ireland', 'Norway', 'Denmark', 'England', 'Spain', 'Finland', 'Luxemburg',
'Scotland', 'Portugal', 'Italy', 'Australia', 'Thailand', 'Lichenstein','USA', 'Canada', 'Mexico', 'Peru'];
}
this.Count = function(data) { 
var variable = document.getElementById('counter');
var name = 'country';              
if(data){
    if(data > 1){
        name = 'countries';
    }
        el.innerHTML = data + ' ' + name;
}else{
        el.innerHTML = 'No ' + name;
    }

};

this.FetchAll = function() {
    var data = '';
    if (this.countries.length > 0){
        for (i = 0; i < this.countries.length; i++)
        data += '<tr>';
        data += '<td>' + this.countries[i] + '</td>';
        data += '</tr>';
    }
}
this.Count(this.countries.length);
return this.el.innerHTML = data;

app.FetchAll();
