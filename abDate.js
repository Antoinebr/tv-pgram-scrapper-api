Date.prototype.addHours = function(hours){
    var dat = new Date(this.valueOf() + hours * 60 * 60 * 1000 );
    return dat;
}

Date.prototype.addMinutes = function(minutes){
    var dat = new Date(this.valueOf() + minutes * 60 * 1000 );
    return dat;
}
