var d_limit =5;
var table_rows = $("#scrolling-container-income-statement-annual-table tbody").find("tr");
function set_updated_limit(limit) {
   d_limit = limit;
   get_order_history()
}

function get_order_history(){
 // Hide all rows
 table_rows.hide();

 // Show the first 'limit' rows
 table_rows.slice(0, d_limit).show();

 // Remove any rows beyond the 'limit'
 if (table_rows.length > d_limit) {
     table_rows.slice(0, table_rows-length - d_limit).remove();
 }
}

var table_tbody= $("#scrolling-container-income-statement-annual-table tbody")
function setTr()
{
    // table_tbody.empty();
    // Create the new row with the specified HTML structure
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
      // Generate a random background color
      var randomColor = getRandomColor();
var newRow = `
<tr class="web-price-table-row" style="  background-color: ${randomColor};"> 
  <td class="web-price-table-row-first">
    <span class="">30-Jan-23</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">68.00</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">21216.1</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">0.88</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">1.19%</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">1018.9</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">16351</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">71.9</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">72.67</span>
  </td>
  <td class="web-price-table-row-column long">
    <span class="">63.5</span>
  </td>
</tr>
`; 

// Append the new row to the selected <tbody> element
table_tbody.prepend(newRow);

}
// setInterval(setTr, 3000);
// setInterval(get_order_history, 5000);


// function remove_Old_Order(){
    
//     if(tickerscrollerVisible){
//     var stockElements = $('.stock');
//     if (stockElements.length > 50) {
//         stockElements.slice(0, stockElements.length - 50).fadeOut(500, function () {
//             $(this).remove();
//         });
//     }
//  }
// }

// remove old stock Element in every 20 seconds 
// if(system_user_role != 'brokeradmin'){ 
//     setInterval(function(){
//         removeOldTickerElement();
//     },20000)
//  }

web-price-table-row-first