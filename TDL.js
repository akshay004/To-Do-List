$(document).ready(function () {

    $("#myBtn").click(function () {
        var d = $("#plainText").val();
        console.log("data added is : " + d);
        insertTask(d);
    });

    var taskNumber = 0;

    function insertTask(d) {
        if ($("#plainText").val() != '') {
            $("#notCompleted").append('<div id="tasks"  class="' + taskNumber + '">' +
                '<input type="checkbox" value="' + taskNumber + '">' +
                '<label>' + d + '</label>' +
                '</div>');
            $("#plainText").val('');
            console.log("classnumber added is = " + taskNumber);
            console.log("valuenumber added is = " + taskNumber);
            console.log(d);
            taskNumber++;

        }
    }

    $("#cButton").click(function () {

        var arr_id = [];

        $(":checkbox:checked").each(function (i) {
            arr_id[i] = $(this).val();
            console.log("$(this).val() : " + $(this).val());
        })

        if (arr_id.length == 0) {
            alert("atleast check one");
        } else {

            for (var i = 0; i < arr_id.length; i++) {
                var innerData = $("." + arr_id[i]).text();
                var vacNumber = $("." + arr_id[i]).attr('class');
                console.log("innerData is : " + innerData);
                console.log("vacNumber is : " + vacNumber);
                $("." + arr_id[i]).remove();
                completedTask(innerData, vacNumber)
            }
        }

    });

    function completedTask(innerData, vacNumber) {

        console.log("innerData from completedTask is : " + innerData);
        console.log("vacNumber from completedTask is : " + vacNumber);
        $("#Completed").append('<div id="CB" class="' + vacNumber + '">' +
            '<input type="checkbox" value = "' + vacNumber + '">' +
            '<label>' + innerData + '</label>' + '</div>');
    }

    $("#dButton").click(function () {

        var del_id = [];

        $(":checkbox:checked").each(function (i) {
            del_id[i] = $(this).val();
            console.log("$(this).val() : " + $(this).val());
        })

        if (del_id.length == 0) {
            alert("atleast check one");
        } else {

            for (var i = 0; i < del_id.length; i++) {
                var DinnerData = $("." + del_id[i]).text();
                var DvacNumber = $("." + del_id[i]).attr('class');
                console.log("Deleted innerData is : " + DinnerData);
                console.log("Deleted vacNumber is : " + DvacNumber);
                $("." + del_id[i]).remove();

            }
        }
    });










































































});