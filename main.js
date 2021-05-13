name_of_the_student_array = [];

function submit() {

    var display_student_array = [];
    for (var i = 1; i <= 4; i++) {
        var student_name = document.getElementById("name_of_the_student_" + i).value;
        console.log(student_name);
        name_of_the_student_array.push(student_name);
    }
    console.log(name_of_the_student_array);
    var student_array_length = name_of_the_student_array.length;

    for (var j = 0; j < student_array_length; j++) {

        display_student_array.push("<h4> NAME - " + name_of_the_student_array[j] + "</h4>");
        console.log(display_student_array);
    }
    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;
    var remove_comma = display_student_array.join(" ");
    console.log(remove_comma);
    document.getElementById("display_name_without_commas").innerHTML = remove_comma;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {

    var display_student_array_sorting = [];
    name_of_the_student_array.sort();
    var length = name_of_the_student_array.length;
    for (var k = 0; k < length; k++) {

        display_student_array_sorting.push("<h4> NAME - " + name_of_the_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_sort_comma = display_student_array_sorting.join(" ");
    console.log(remove_sort_comma);
    document.getElementById("display_name_without_commas").innerHTML = remove_sort_comma;
}
