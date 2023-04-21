
var source = "music/Song1.mp3"
var audio = document.createElement("audio");
//
audio.autoplay = true;
//
audio.load()
audio.addEventListener("load", function() { 
    audio.play(); 
}, true);
audio.src = source;


(function ( $ ) {
 
    $.fn.typewriter = function( options ) {

        var settings = $.extend({
            text: $(this).attr("tw-text"),
            delay: 150,
            waitingTime: 1000,
            cursor: false,
            hide: 0,
        }, options );

        var item = $(this); //Our element
        var i = 0;          //Current char index

        //Function for adding char
        function startType() {
            //If cursor is enabled, we're adding our class.
            if (i==0 && settings.cursor==true) {
                item.addClass("tw-cursor");
            }
            //This is where the magic happens
            if (i<settings.text.length) {
                item.append(settings.text.charAt(i));
                i++;
                //Call function again
                setTimeout( startType, settings.delay );
            }
            //If the whole text appears, we're removing our class.
            else {
                item.removeClass("tw-cursor");
                //Hide element if it necessary.
                if (settings.hide>0) {
                    setTimeout( function() {
                        item.fadeOut();
                    }, settings.hide );
                }
            }
        }

        //Call our function for the first time.
        setTimeout( startType, settings.waitingTime );
        
    };
 
}( jQuery ));4


    $(document).ready(function(){
        $("#intro1").typewriter({
            text: "For those of You, who will know...",
            waitingTime: 1000,
            delay: 100,
            hide: 15000,
            cursor: true,
        });
        $("#intro2").typewriter({
            text: "Looking behind the Scene...",
            waitingTime: 4500,
            delay: 100,
            cursor: true,
            hide: 13000,
        });
        $("#intro3").typewriter({
            text: "The Concept and Idea behind this Democratic Investigative Discussion Platform...",
            waitingTime: 8000,
            delay: 100,
            cursor: true,
            hide: 4000,
        });

        $("#intro4").typewriter({
            text: "Hello all together!",
            waitingTime: 23500,
            delay: 100,
            hide: 11000,
            cursor: true,
        });
        $("#intro5").typewriter({
            text: "Why we are here today with our Project?",
            waitingTime: 26000,
            delay: 100,
            cursor: true,
            hide: 6000,
        });
        $("#intro6").typewriter({
            text: "We are worried about the Situation...",
            waitingTime: 30500,
            delay: 100,
            cursor: true,
            hide: 2000,
        });


        $("#intro7").typewriter({
            text: "Analysating the Situation in Germany today ...",
            waitingTime: 39500,
            delay: 100,
            hide: 10000,
            cursor: true,
        });
        $("#intro8").typewriter({
            text: "the communication and commenting Situation and culture is critical ...",
            waitingTime: 45000,
            delay: 100,
            cursor: true,
            hide: 2500,
        });

        $("#intro9").typewriter({
            text: "some people say their is a lot of censorship,",
            waitingTime: 57000,
            delay: 100,
            cursor: true,
            hide: 8000,
        });
        $("#intro10").typewriter({
            text: "kind of dictatorship in Newspapers avoiding Freespeech...",
            waitingTime: 62000,
            delay: 100,
            cursor: true,
            hide: 2000,
        });


        $("#intro11").typewriter({
            text: "others say their is a lot of Fakenews, Discrimination, Racism and Hatespeech...",
            waitingTime: 71000,
            delay: 100,
            cursor: true,
            hide: 11000,
        });
        $("#intro12").typewriter({
            text: "in Newspapers and Discussion Boards and their comments and much more...",
            waitingTime: 80000,
            delay: 100,
            cursor: true,
            hide: 3000,
        });


        $("#intro13").typewriter({
            text: "And the investigative Journalism is much reduced...",
            waitingTime: 92000,
            delay: 100,
            cursor: true,
            hide: 3000,
        });


        $("#intro14").typewriter({
            text: "Which side is the side to believe?",
            waitingTime: 102000,
            delay: 100,
            cursor: true,
            hide: 7000,
        });
        $("#intro15").typewriter({
            text: "Which side claims to be right?",
            waitingTime: 106000,
            delay: 100,
            cursor: true,
            hide: 3000,
        });

        $("#intro16").typewriter({
            text: "Therefore, we have created the :",
            waitingTime: 114000,
            delay: 100,
            cursor: true,
            hide: 8500,
        });
        $("#intro17").typewriter({
            text: "Democratic Civil Investigative Platform (D.C.I.P.) :",
            waitingTime: 119000,
            delay: 100,
            cursor: true,
            hide: 2500,
        });


        $("#intro18").typewriter({
            text: "With awesome Features like :",
            waitingTime: 128000,
            delay: 100,
            cursor: true,
            hide: 49000,
        });
        $("#intro19").typewriter({
            text: "?",
            waitingTime: 130000,
            delay: 100,
            cursor: true,
            hide: 47000,
        });

        $("#intro20").typewriter({
            text: "- Reanimation of investigative Journalism ...",
            waitingTime: 132000,
            delay: 100,
            cursor: true,
            hide: 25000,
        });
        $("#intro21").typewriter({
            text: "- by trustful Resources from investigative Journalists and Civil Persons.",
            waitingTime: 138000,
            delay: 100,
            cursor: true,
            hide: 21000,
        });

        $("#intro22").typewriter({
            text: "- With End to End Security and Encryption !",
            waitingTime: 142500,
            delay: 100,
            cursor: true,
            hide: 18500,
        });
        $("#intro23").typewriter({
            text: "- An unique Archive, never seen before in that way ...",
            waitingTime: 147000,
            delay: 100,
            cursor: true,
            hide: 16500,
        });
        
        $("#intro24").typewriter({
            text: "- easily accessed , researched and used !",
            waitingTime: 151500,
            delay: 100,
            cursor: true,
            hide: 14500,
        });
        $("#intro25").typewriter({
            text: "- easily accessed from everywhere, many factor proofed and secure!",
            waitingTime: 154000,
            delay: 100,
            cursor: true,
            hide: 13500,
        });

        $("#intro26").typewriter({
            text: "- easy communication between Persons, who has the same topics and interest...",
            waitingTime: 157000,
            delay: 100,
            cursor: true,
            hide: 11000,
        });
        $("#intro27").typewriter({
            text: "- Respectful and Topic related Comments...",
            waitingTime: 163000,
            delay: 100,
            cursor: true,
            hide: 10000,
        });

        $("#intro28").typewriter({
            text: "- Mostly free of Hatespeech, Fakenews, Discrimination, Racism.",
            waitingTime: 165000,
            delay: 100,
            cursor: true,
            hide: 3000,
        });
        $("#intro29").typewriter({
            text: "- very intuitive, self-explanatory and easy to use ...",
            waitingTime: 170000,
            delay: 100,
            cursor: true,
            hide: 2000,
        });

        $("#intro30").typewriter({
            text: "Additional Features :",
            waitingTime: 181000,
            delay: 100,
            cursor: true,
            hide: 20000,
        });
        $("#intro31").typewriter({
            text: "!",
            waitingTime: 182000,
            delay: 100,
            cursor: true,
            hide: 15000,
        });

        $("#intro33").typewriter({
            text: "- Implimented AI",
            waitingTime: 184000,
            delay: 100,
            cursor: true,
            hide: 12000,
        });
        $("#intro34").typewriter({
            text: "- Implemented NLP",
            waitingTime: 186000,
            delay: 100,
            cursor: true,
            hide: 11000,
        });
        
        $("#intro35").typewriter({
            text: "- Implemented BadWord - Keyword Filters",
            waitingTime: 188000,
            delay: 100,
            cursor: true,
            hide: 9000,
        });
        $("#intro36").typewriter({
            text: "- Moderated Structure by Mods and Admins",
            waitingTime: 191000,
            delay: 100,
            cursor: true,
            hide: 7000,
        });

        $("#intro37").typewriter({
            text: "and many, many more Features to come...",
            waitingTime: 194000,
            delay: 100,
            cursor: true,
            hide: 6000,
        });
        $("#intro38").typewriter({
            text: "What can I do to improve this ?",
            waitingTime: 206000,
            delay: 100,
            cursor: true,
            hide: 6500,
        });

        $("#intro39").typewriter({
            text: "Subscribe our Newsletter and stay tuned ...",
            waitingTime: 210000,
            delay: 100,
            cursor: true,
            hide: 3200,
        });
        $("#intro40").typewriter({
            text: "and wait for the latest News and added Feature to come ...",
            waitingTime: 215000,
            delay: 100,
            cursor: true,
            hide: 2800,
        });

        $("#intro41").typewriter({
            text: " ",
            waitingTime: 222000,
            delay: 100,
            cursor: true,
            hide: 6000,
        });
        $("#intro42").typewriter({
            text: "Thanks for Watching !!!",
            waitingTime: 225000,
            delay: 100,
            cursor: true,
            hide: 6000,
        });





    });

