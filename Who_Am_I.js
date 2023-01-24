



function play_resume()
{
    var music_audio = document.getElementById("who_am_i_page_track");

    if (!music_audio.paused)
    {
        music_audio.pause();
        document.getElementById("music_row_animation").src = "images/anya_anya_forget_music_frame_01.gif";
        document.getElementById("play_button").innerHTML = " PLAY MUSIC ";
    }
    else
    {
        music_audio.play();
        document.getElementById("music_row_animation").src = "images/anya-anya-forger-music.gif";
        document.getElementById("play_button").innerHTML = " STOP MUSIC ";
    }
}






