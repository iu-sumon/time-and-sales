var table_tbody = $("#scrolling-container-income-statement-annual-table tbody");
var selectedLimit = 5; // Default selected limit

function set_updated_limit(value) {
  selectedLimit = parseInt(value);
}

// Get the <select> element by its class name
// var selectElement = document.querySelector('.order_terminal_limit');

// // Get the selected value of the <select> element
// var selectedValue = selectElement.value;

// // Log the selected value to the console
// console.log(selectedValue);


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
    <tr class="web-price-table-row" style="  background-color: ${randomColor}; color: #fff !important"> 
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
  table_tbody.prepend(newRow);

  console.log(selectedLimit)
  var excessRows = table_tbody.find("tr").slice(selectedLimit);
  excessRows.remove();

  // Append the new row to the selected <tbody> element
}

setInterval(setTr, 3000);
