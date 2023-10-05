var table_tbody = $("#scrolling-container-income-statement-annual-table tbody");
var selectedLimit = 5; // Default selected limit

function set_updated_limit(value) {
  selectedLimit = parseInt(value);
}

function setTr() {
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

  // Remove excess rows if there are more than the selected limit
  console.log(selectedLimit)
  var excessRows = table_tbody.find("tr").slice(selectedLimit - 1);
  excessRows.remove();

  // Append the new row to the selected <tbody> element
  table_tbody.prepend(newRow);
}

setInterval(setTr, 3000);
