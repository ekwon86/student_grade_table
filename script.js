/**
 * Define all global variables here
 */
/**
 *
 * student_array - global array to hold student objects
 * @type {Array}
 */
/**
 * inputIds - id's of the elements that are used to add students
 * @type {string[]}
 */
var student_array = [];

/**
 * addClicked - Event Handler when user clicks the add button
 */
function addClicked() {
    addStudent();
    updateData();
    clearAddStudentForm();
}

/**
 * cancelClicked - Event Handler when user clicks the cancel button, should clear out student form
 */
function cancelClicked() {
    clearAddStudentForm();
}

/**
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 *
 * @return undefined
 */

function addStudent () {
    var new_student = {
        name: $("#studentName").val(),
        course: $("#course").val(),
        grade: parseInt($("#studentGrade").val())
    };
    student_array.push(new_student);

    $.ajax({
        method: 'POST',
        data: {
            api_key: 'g2LoUMOOrU',
            name:new_student.name,
            course:new_student.course,
            grade:new_student.grade
        },
        dataType: 'json',
        url: 'http://s-apis.learningfuze.com/sgt/create',
        success: function(result) {
            console.log(result);
        },
        error:
            console.log('There was an error.')
    })
}

/**
 * clearAddStudentForm - clears out the form values based on inputIds variable
 */
function clearAddStudentForm () {
    $('#studentName').val('');
    $('#course').val('');
    $('#studentGrade').val('');
}
/**
 * calculateAverage - loop through the global student array and calculate average grade and return that value
 * @returns {number}
 */
function calculateAverage() {
    var total = 0;
    for (var i=0; i<student_array.length; i++) {
        total += student_array[i].grade;
    }
    var avg = parseInt(total / student_array.length);
    return avg;
}

/**
 * updateData - centralized function to update the average and call student list update
 */
function updateData () {
    updateStudentList();
    // var avg_grade = $('.avgGrade');
    // if (avg_grade >= 90 && avg_grade <= 100) {
    //     $(".avgGrade").addClass('label label-primary');
    // }
    // else if (avg_grade >= 80 && avg_grade <= 89) {
    //     $(".avgGrade").addClass('label label-info');
    // }
    // else if (avg_grade >= 70 && avg_grade <= 79) {
    //     $(".avgGrade").addClass('label label-success');
    // }
    // else if (avg_grade >= 60 && avg_grade <= 69) {
    //     $(".avgGrade").addClass('label label-warning');
    // }
    // else {
    //     $(".avgGrade").addClass('label label-danger');
    // }
    $(".avgGrade").text(calculateAverage());
}

/**
 * updateStudentList - loops through global student array and appends each objects data into the student-list-container > list-body
 go through array . wipe out the array and reorder them

 */
function updateStudentList() {
    $('tbody').html('');
    for (var i = 0; i < student_array.length; i++) {
        addStudentToDom(student_array[i]);
    }
}

/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 */

function addStudentToDom(studentObj) {
    var student_name = $("<td>").text(studentObj.name);
    var student_course = $("<td>").text(studentObj.course);
    var student_grade = $("<td>").text(studentObj.grade);
    var del = $("<td>");
    var del_button = $("<button>").text('Delete').addClass('btn btn-danger').attr('data-id', studentObj.id);

    var row = $("<tr>");
    $(del).append(del_button);
    $(row).append(student_name, student_course, student_grade, del);
    $("tbody").append(row);
}

/**
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */
function reset () {
    student_array = [];
    $('tbody').html('<h3>User Info Unavailable</h3>');
}

function removeStudent(student){
    console.log("student in remove student function ", student);
    var td = $(student).parent();
    console.log("td in remove student function ", td);
    var row = $(td).parent();
    console.log("row in remove student function ", row);
    var index1 = $(row).index();
    student_array.splice(index1, 1);
    updateStudentList();
    updateData();
}

function retrieve_data() {
    $.ajax({
        method: 'POST',
        data: {
            api_key: 'g2LoUMOOrU'
        },
        dataType: 'json',
        url: 'http://s-apis.learningfuze.com/sgt/get',
        success: function(result) {
            console.log(result);
            student_array = result.data;
            updateData();
        },
        error:
            console.log('There was an error.')
    });
}

/**
 * Listen for the document to load and reset the data to the initial state
 */
$(document).ready(function(){
    reset();

    $('tbody').on('click', '.btn', function() {
        removeStudent(this);
        $.ajax({
            method: 'POST',
            datatype: 'json',
            url: 'http://s-apis.learningfuze.com/sgt/delete',
            data: {
                api_key: 'g2LoUMOOrU',
                student_id: $(this).attr('data-id')
            },
            success: function(result) {
                console.log('Successfully Deleted', result);
            },
            error: function(result) {
                console.log('There was an error', result);
            }
        });
        updateData();
    });
    updateData();
    retrieve_data();

    $('.btn-info').click(function() {
        retrieve_data();
    });
    
});


