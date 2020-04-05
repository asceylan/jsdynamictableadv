function edit_r(rn) {
    document.getElementById("edit_b" + rn).style.display = "none";
    document.getElementById("save_b" + rn).style.display = "block";

    var Movie = document.getElementById("Movie_row" + rn);
    var Imdb = document.getElementById("Imdb_row" + rn);


    var Movie_data = Movie.innerHTML;
    var Imdb_data = Imdb.innerHTML;


    Movie.innerHTML = "<input type='text' id='Movie_text" + rn + "' value='" + Movie_data + "'>";
    Imdb.innerHTML = "<input type='number' step='0.01' id='Imdb_text" + rn + "' value='" + Imdb_data + "'>";

}

function save_r(rn) {
    var Movie_val = document.getElementById("Movie_text" + rn).value;
    var Imdb_val = document.getElementById("Imdb_text" + rn).value;

    document.getElementById("Movie_row" + rn).innerHTML = Movie_val;
    document.getElementById("Imdb_row" + rn).innerHTML = Imdb_val;


    document.getElementById("edit_b" + rn).style.display = "block";
    document.getElementById("save_b" + rn).style.display = "none";
    document.getElementById("edit_b" + rn).style.visibility = 'visible';

}

function delete_r(rn) {
    document.getElementById("row" + rn + "").outerHTML = "";
}

function add_row() {

    var table = document.getElementById("data_table");
    var table_lenght = (table.rows.length);
    var row = table.insertRow(table_lenght).outerHTML = "\
            <tr id='row"+ table_lenght + "'>\
                <td id='Movie_row"+ table_lenght + "'><input type='text' id='Movie_text" + table_lenght + "' placeholder='SpiderMan'></td>\
                    <td id='Imdb_row"+ table_lenght + "'><input type='number' id='Imdb_text" + table_lenght + "' step='0.01' placeholder='6.78'><td>\
                        <td><input type='button' id='edit_b"+ table_lenght + "' value='Edit' class='edit' onclick='edit_r(" + table_lenght + ")'>\
                            <input type='button' id='save_b" + table_lenght + "' value='Save' class='save' onclick='save_r(" + table_lenght + ")'>\
                                <input type='button' value='Delete' class='delete' onclick='delete_r(" + table_lenght + ")'></td>\
                                    </tr>\
";
    document.getElementById("edit_b" + table_lenght).style.visibility = 'hidden';
}