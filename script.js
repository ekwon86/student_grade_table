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
var studentName = $("#studentName");
var course = $("#course");
var studentGrade = $("#studentGrade");
var tableBody = $("tbody");

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
        grade: Math.round($("#studentGrade").val())
        };
        studentArray.push(new_student);
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
        total += student_array.grade[i];
    }
    return Math.round(total / student_array.length);

}

/**
 * updateData - centralized function to update the average and call student list update
 */
function updateData () {
    var avg = calculateAverage();
    $(".avgGrade").text(avg);
    updateStudentList();
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
    
}


/**
 * reset - resets the application to initial state. Global variables reset, DOM get reset to initial load state
 */
function reset(){

}

/**
 * Listen for the document to load and reset the data to the initial state
 */
$(document).ready(function(){
 
});