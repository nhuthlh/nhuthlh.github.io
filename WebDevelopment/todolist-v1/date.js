module.exports.getDate = getDate;

function getDate() {
    var today = new Date();
    var currentDay = today.getDay();
    var options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
 
    var day = today.toLocaleDateString("en-US", options);
    return day;
}