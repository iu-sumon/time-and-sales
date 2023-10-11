$(document).ready(function() {
  $("#margin_client_select").select2({ 
      placeholder: "Select Client Code",
      allowClear: false
  });
  $("#margin_client").val($("#margin_client_select").children("option:selected").val());
  
  $("#margin_client_select").on("change", function(e) {
      var selected_client_code = $(this).val();
      $("#margin_client").val(selected_client_code);
  });

  $("#client_group_select").select2({ 
      placeholder: "Select Client Group",
      allowClear: false
  });
  $("#client_group").val($("#client_group_select").children("option:selected").val());
  
  $("#client_group_select").on("change", function(e) {
      var selected_client_code = $(this).val();
      $("#client_group").val(selected_client_code);
  });
})



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

// setInterval(setTr, 3000);

function setupPagination(tableId, rowsPerPage) {
  const table = document.getElementById(tableId);
  const tableRows = table.querySelectorAll('tbody tr');
  const pagination = document.getElementById('pagination');
  const prevPageButton = document.createElement('a');
  const nextPageButton = document.createElement('a');

  let currentPage = 1;
  const maxRows = rowsPerPage;

  // Calculate the number of pages
  const totalPages = Math.ceil(tableRows.length / maxRows);

  // Function to display the table rows for the current page
  function displayRows() {
    const start = (currentPage - 1) * maxRows;
    const end = start + maxRows;

    tableRows.forEach((row, index) => {
      if (index >= start && index < end) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });

    updatePaginationLinks();
  }

  // Function to update the pagination links
  function updatePaginationLinks() {
    // Generate pagination links
    const pageLinks = [];

    for (let i = 1; i <= totalPages; i++) {
      pageLinks.push(`<a href="#" class="${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</a>`);
    }

    pagination.innerHTML = '';
    pagination.appendChild(prevPageButton);
    pagination.innerHTML += pageLinks.join('');
    pagination.appendChild(nextPageButton);

    // Hide the "Previous" button on the first page
    if (currentPage === 1) {
      prevPageButton.style.display = 'none';
    } else {
      prevPageButton.style.display = 'inline';
    }

    // Hide the "Next" button on the last page
    if (currentPage === totalPages) {
      nextPageButton.style.display = 'none';
    } else {
      nextPageButton.style.display = 'inline';
    }
  }

  // Initialize with the first page
  displayRows();

  // Handle page link click event
  pagination.addEventListener('click', (e) => {
 
    if (e.target.tagName === 'A') {
      currentPage = parseInt(e.target.getAttribute('data-page'), 10);
      displayRows();
    }
  });

  // Handle previous page button click
  prevPageButton.href = '#';
  prevPageButton.innerHTML = '&laquo;';
  prevPageButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      displayRows();
    }
  });

  // Handle next page button click
  nextPageButton.href = '#';
  nextPageButton.innerHTML = '&raquo;';
  nextPageButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      displayRows();
    }
  })
  
  // Initially hide the "Previous" button
  prevPageButton.style.display = 'none';
}

setupPagination('group-client-table', 10);