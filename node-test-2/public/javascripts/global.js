var userListData = [];

$(document).ready(function() {

    populateTable();

});

function populateTable() {

    var tableContent = "";

    $.getJSON('users/userlist', function(data) {

        $.each(data, function() {
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowuser" rel="' + this.username + '">' + this.usernam + '</a></td>';
            tableContent += '<td>' + this.email + '</td>';
            tableContent += '<td><a href="#" class="linkdeleteuser" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        $('#userlist table tbody').html(tableContent);
    });
};