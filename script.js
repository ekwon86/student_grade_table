/**
 * Define all global variables here
 */
var studentObj = {};

/**
 *
 * student_array - global array to hold student objects
 * @type {Array}
 */
var student_array = [];

/**
 * inputIds - id's of the elements that are used to add students
 * @type {string[]}
 */


/**
 * addClicked - Event Handler when user clicks the add button
 */
function addClicked() {
    addStudentToDom();
}

/**
 * cancelClicked - Event Handler when user clicks the cancel button, should clear out student form
 */
function cancelClicked() {
    $('#studentName').val('');
    $('#course').val('');
    $('#studentGrade').val('');
}

/**
 * addStudent - creates a student objects based on input fields in the form and adds the object to global student array
 *
 * @return undefined
 */



function addStudent () {
    function studentObj() {
        this.name = $('#studentName').val();
        this.course = $('#course').val();
        this.grade = $('#studentGrade').val();
    }
    student_array.push(studentObj);
}



/**
 * clearAddStudentForm - clears out the form values based on inputIds variable
 */
function clearAddStudentForm () {

}
/**
 * calculateAverage - loop through the global student array and calculate average grade and return that value
 * @returns {number}
 */
function calculateAverage() {
    var total = 0;
    for (var i=0; i<student_array.grade.length; i++) {
        total += student_array.grade[i];
    }
    var avg = Math.round(total / student_array.grade.length);
    $('.avgGrade').html(avg);
}

/**
 * updateData - centralized function to update the average and call student list update
 */
function updateData () {
    calculateAverage();
    updateStudentList();
}

/**
 * updateStudentList - loops through global student array and appends each objects data into the student-list-container > list-body
 go through array . wipe out the array and reorder them

 */
function updateStudentList() {
    for (var i = 0; i < student_array.length; i++) {

    }
}

/**
 * addStudentToDom - take in a student object, create html elements from the values and then append the elements
 * into the .student_list tbody
 * @param studentObj
 */
function addStudentToDom(studentObj) {
    var new_tr = $('<tr>');
    var new_td = $('<td>');

    new_tr.append(new_td);
    $('.student-list').append(new_tr);
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
    console.log('The document has been loaded.');
});