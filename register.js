function registrUser() {

    username = $("#email").val()
    if (username === "") {
        alert("please enter a username");
        return;
    }

    $.get(
        '/register/begin/' + username,
        null,
        function (data) {
            return data
        },
        'json')
        .then((credentialCreationOptions) => {
            // TODO
        });
}