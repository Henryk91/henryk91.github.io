var currLoc = 'home';
function HideContent(Id) {

    var page = ['home', 'about', 'projects', 'contact'];
    if (page.length > 0) {
        var i;
        for (i = 0; i < page.length; i++) {
            if (page[i] !== Id) {
                document.getElementById(page[i]).style.display = "none";
            }
        }
    }
}
function flip(Id) {
    var $oldBox = $("#" + currLoc);
    var $newBox = $("#" + Id);
    var $oldButton = $("#" + currLoc + "But");
    var $newButton = $("#" + Id + "But");
    var outerWidth = $oldBox.outerWidth(true);

    $newButton.css({
        "background": "rgb(94, 164, 255,0.4)",
        "border-radius": "50%",
        "box-shadow": "0 0 60px 1px rgb(94, 164, 255, 0.6)"
    });
    $oldButton.css({
        "background": "",
        "border-radius": "",
        "box-shadow": "",
        "padding": ""
    });

    var posSlideOut = (outerWidth > 0 ? -outerWidth : outerWidth);
    var posSlideIn = (outerWidth > 0 ? -outerWidth : outerWidth);

    if (Id.indexOf('home') == 0) {
        posSlideIn = (posSlideIn * 1.5);
    }

    $oldBox.animate({ "margin-left": "20%", "margin-right": "" }, 300);
    $oldBox.animate({ "margin-left": posSlideOut + "px", "margin-right": -posSlideIn + "px" }, 700, function () {
        $oldBox.css({ "margin-left": "", "margin-right": "", "display": "none" });
        $newBox.css({ "margin-left": (posSlideIn) + "px", "margin-right": -posSlideIn + "px", "display": "block" });
        $newBox.animate({ "margin-left": "", "margin-right": "" }, 600);
    });
    currLoc = Id;
}

$(function () {
    $('.icon').hover(
        function () {
            $(this).find('img').css("display", "none");
            $(this).find('a').css({ "display": "inline-block" });
        }, function () {
            $(this).find('img').css("display", "inline-block");
            $(this).find('a').css("display", "none");
        }
    );
});

function forward() {
    var next = 'about';
    if (currLoc.indexOf('about') == 0) {
        next = 'projects';
    }
    if (currLoc.indexOf('projects') == 0) {
        next = 'contact';
    }
    if (currLoc.indexOf('contact') == 0) {
        next = 'home';
    }
    flip(next);
}

function backward() {
    var next = 'contact';
    if (currLoc.indexOf('about') == 0) {
        next = 'home';
    }
    if (currLoc.indexOf('projects') == 0) {
        next = 'about';
    }
    if (currLoc.indexOf('contact') == 0) {
        next = 'projects';
    }
    flip(next);
}
document.onkeydown = function (event) {
    switch (event.keyCode) {
        case 37:
            backward();
            break;
        case 39:
            forward();
            break;
    }
};

function submit() {
    var name = $('#inputName').val();
    var email = $('#inputEmail').val();
    var msg = $('#inputMsg').val();

    var block = false;

    if (name.length == 0) {
        block = true;
        $('#inputName').css("border-bottom", "red 1px solid");
        $('#inputName').attr("placeholder", "Name Required");
    } else {
        $('#inputName').css("border-bottom", "white 1px solid");
    }

    if (email.length == 0) {
        block = true;
        $('#inputEmail').css("border-bottom", "red 1px solid");
        $('#inputEmail').attr("placeholder", "Email Required");
    } else {
        $('#inputEmail').css("border-bottom", "white 1px solid");
    }

    if (email.indexOf('@') < 0) {
        block = true;
        $('#inputEmail').css("border-bottom", "red 1px solid");
        $('#inputEmail').attr("placeholder", "Valid Email Required");
        $('#inputEmail').val("");
    } else {
        $('#inputEmail').css("border-bottom", "white 1px solid");
    }

    if (msg.length == 0) {
        block = true;
        $('#inputMsg').css("border-bottom", "red 1px solid");
        $('#inputMsg').attr("placeholder", "Message Required");
    } else {
        $('#inputMsg').css("border-bottom", "white 1px solid");
    }
    if (!block) {
        var domainUrl = 'https://fathomless-anchorage-41188.herokuapp.com/post';
        var obj = { name, email, msg };
        Name = 'PortMSG';
        $(function () {
            $.ajax({
                url: domainUrl,
                dataType: 'jsonp',
                data: { obj },
                success: function (data) {
                    var str = JSON.stringify(data);
                    alert("Message Sent. I will be in touch asap.");
                    flip("home");
                },
                jsonpCallback: Name
            });
        });
    }
}