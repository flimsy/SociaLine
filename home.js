// $(document).ready(function(){
//     $("#tweet").click(function(){
//         $("#essay1").show();
        
//     });
// });


// function addtweet() {
//     var x = document.getElementById("tweet");
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

function addtweet(){
    var tweet = React.createClass({
        render: function() {
            return(
                <h2> Hellow world </h2>
            );
        }
    })
}