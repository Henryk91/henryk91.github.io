var currLoc = 'home';
var filping = false;
const isMobile = () => window.matchMedia('(max-width: 700px)').matches

 HideContent = (Id) => {

    var page = ['home', 'about', 'projects', 'contact'];
    if (page.length > 0) {
        var i;
        for (i = 0; i < page.length; i++) {
            if (page[i] !== Id) {
                // document.getElementById(page[i]).style.visibility = "hidden";
                // document.getElementById(page[i]).style.display = "none";
            }
        }
    }
}
 flip = (Id, back = true) => {
    if(filping) return;
    filping = true;
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

    var posSlideOut = (back ? -outerWidth : outerWidth);
    var posSlideIn = (back ? -outerWidth : outerWidth);

    document.getElementById(Id).classList.remove('hidden-page');
    document.getElementById(Id).classList.add('not-hidden-page');
    $newBox.css({ "margin-right": (-posSlideIn) + "px", "margin-left": posSlideIn + "px", "visibility": "unset", "display": "flex", "align-items": "center", "flex-direction": "column" });
    
    $oldBox.animate({ "margin-left": -posSlideOut + "px", "margin-right": posSlideIn + "px" }, 600);
    $newBox.animate({ "margin-left": "", "margin-right": "" },650 , () =>  {
        document.getElementById(currLoc).classList.remove('not-hidden-page');
        document.getElementById(currLoc).classList.add('hidden-page');
        currLoc = Id;
        filping = false;
    });
    
}

directionalFlip = (Id) => {
    if(filping) return;
    var page = ['home', 'about', 'projects', 'contact'];
    var currentIndex = page.findIndex(p => p === currLoc)
    var nextIndex = page.findIndex(p => p === Id)
    flip(Id, currentIndex > nextIndex)
}

$(() => {
    // $('.icon').hover(
    //     () => {
    //         $(this).find('img').css("display", "none");
    //         $(this).find('p').css({ "display": "block", "position": "fixed" });
    //     }, () => {
    //         $(this).find('img').css({ "display": "block" });
    //         $(this).find('p').css("display", "none");
    //     }
    // );
});

 forward = () => {
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
    flip(next, false);
}

 backward = () => {
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
document.onkeydown =  (event) => {
    console.log('event',event);
    switch (event.keyCode) {
        case 37:
            backward();
            break;
        case 39:
            forward();
            break;
    }
};
$(() => {
    if(isMobile()){
        $('body').on('swipeleft', () => {
            forward();
        });
    }
});
$(() => {
    if(isMobile()){
        $('body').on('swiperight', () => {
            backward();
        });
    }
});

loaderToggle =(val) => { 
 $("#loader").toggleClass('loader');
}

 submit = () => {
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
        loaderToggle('show');
        const domainUrl = 'https://note.henryk.co.za/api/email';
        const message = name + '\n' + email + '\n' + msg
        const obj = { board: 't4', email, text: message, delete_password: '1234' };
        $(() => {
            $.post(domainUrl,
            obj,
            () => {
                loaderToggle('hide');
                alert("Message Sent. I will be in touch asap.");
                $('#inputName').val("");
                $('#inputEmail').val("");
                $('#inputMsg').val("");
                flip("home");
            });
        });
    }
}

logUse = () => {
    const domainUrl = 'https://note.henryk.co.za/api/log';
    $(() => {
        $.get(domainUrl,
        () => {console.log('Welcome to my site.')});
    });
}
logUse();
