var checkedRows = [];
$(document).ready(function() {
  $('.m-check').change(function() {
    var checkboxId = $(this).closest('tr').attr('id');

    if ($(this).prop('checked')) {
      checkedRows.push(checkboxId);
    } else {
      checkedRows = checkedRows.filter(function(id) {
        return id !== checkboxId;
      });
    }
});

});

  $(document).bind('keydown', 'f9', function (e) {
    e.preventDefault();
    checkedRows.forEach(function(rowId) {
      getCheckId(rowId)
      // console.log(rowId);
    });

  });


function getCheckId(id)
{
 console.log(id) 
}