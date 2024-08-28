$("#addButton").click(function(){
    let task = $("#todoInput").val();
    if(task){
        $('#todoList').append(
            `<div class="taskItems">
            <li>${task}</li>
            <button class="deleteButton">
                <img src="./delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" alt="">
            </button>
         </div>`
        );


        $('#todoInput').val('');
    }
})

    $("#todoList").on("click", ".deleteButton", function(){
        $(this).parent().remove();
    });

    $("#todoList").on("click", "li", function(){
        $(this).toggleClass("completed");

    });
