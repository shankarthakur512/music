const music = new Audio('1.mp3')
const songs = [
    {
        id: "1",
       songName :`Jee Karda <br>
       <div class="subtitle">Alan walker</div>`,
       poster: `https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/srch_believe_A10320WT032327674J.jpg`
    },
     {
        id: "2",
       songName :`Angrezi Beat<br>
       <div class="subtitle">Honey singh - champagne Talk</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/5060197225025/1619473827/srch_believe_A10320WT039006651B.jpg`
    },
    {
        id: "3",
       songName :`keshariya <br>
       <div class="subtitle">Arjit - singh</div>`,
       poster: `https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/A10301A0004860278F_20220717060457662/1658030708/srch_sonymusic_A10328E0010427685D.jpg`
    },
    {
        id:"4",
       songName :`Deva Deva<br>
       <div class="subtitle"> Arjit singh</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/update/A10301A0004876317Z_20220812190921770/1660325418/srch_sonymusic_A10328E0010456458R.jpg`
    },
    {
        id: "5",
       songName :` shree ram janki<br>
       <div class="subtitle"> lakha singh lakhvir</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_saregama/music/8907210334432/1649162708/srch_saregama_INH102205510.jpg`
    },
    {
        id: "6",
       songName :` phir bhi thujko chahunga<br>
       <div class="subtitle"> </div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1492518399/srch_zeemusic_ZMC00493-02.jpg`
    },
    {
        id: "7",
       songName :`thuje kitna chahne lage hum<br>
       <div class="subtitle">kabir singh</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20230410123504260/3617058853105/1681125034257/resources/3617058853105.jpg`
    },
    {
        id: "8",
       songName :` Dil cheez tujhe dedi <br>
       <div class="subtitle"> parabase-dil cheez dedi</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616845308231/1646920515/srch_believe_A10320WT042897828T.jpg`
    },
    {
        id: "9",
       songName :`nayio lagda <br>
       <div class="subtitle"> palak muchhal</div>`,
       poster:'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2023-02/11/10-13/ZMC06348.jpg'},
       {
        id: "10",
       songName :` Dil cheez tujhe dedi <br>
       <div class="subtitle"> parabase-dil cheez dedi</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616845308231/1646920515/srch_believe_A10320WT042897828T.jpg`
    },
    {
        id: "11",
       songName :`Jee Karda <br>
       <div class="subtitle">Alan walker</div>`,
       poster: `https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/srch_believe_A10320WT032327674J.jpg`
    },
     {
        id: "12",
       songName :`Angrezi Beat<br>
       <div class="subtitle">Honey singh - champagne Talk</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/5060197225025/1619473827/srch_believe_A10320WT039006651B.jpg`
    },
    {
        id: "13",
       songName :`keshariya <br>
       <div class="subtitle">Arjit - singh</div>`,
       poster: `https://img.wynk.in/unsafe/250x250/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/A10301A0004860278F_20220717060457662/1658030708/srch_sonymusic_A10328E0010427685D.jpg`
    },
    {
        id:"14",
       songName :`Deva Deva<br>
       <div class="subtitle"> Arjit singh</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_sonymusic/music/update/A10301A0004876317Z_20220812190921770/1660325418/srch_sonymusic_A10328E0010456458R.jpg`
    },
    {
        id: "15",
       songName :` shree ram janki<br>
       <div class="subtitle"> lakha singh lakhvir</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_saregama/music/8907210334432/1649162708/srch_saregama_INH102205510.jpg`
    },
    {
        id: "16",
       songName :` phir bhi thujko chahunga<br>
       <div class="subtitle"> </div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1492518399/srch_zeemusic_ZMC00493-02.jpg`
    },
    {
        id: "17",
       songName :`thuje kitna chahne lage hum<br>
       <div class="subtitle">kabir singh</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/20230410123504260/3617058853105/1681125034257/resources/3617058853105.jpg`
    },
    {
        id: "18",
       songName :` Dil cheez tujhe dedi <br>
       <div class="subtitle"> parabase-dil cheez dedi</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616845308231/1646920515/srch_believe_A10320WT042897828T.jpg`
    },
    {
        id: "19",
       songName :`nayio lagda <br>
       <div class="subtitle"> palak muchhal</div>`,
       poster:'https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3.ap-south-1.amazonaws.com/wynk-music-cms/srch_zeemusic/2023-02/11/10-13/ZMC06348.jpg'},
       {
        id: "20",
       songName :` Dil cheez tujhe dedi <br>
       <div class="subtitle"> parabase-dil cheez dedi</div>`,
       poster: `https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_believe/music/3616845308231/1646920515/srch_believe_A10320WT042897828T.jpg`
    }, 
]

Array.from(document.getElementsByClassName('songitem')).forEach((e , i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});
let masterplay = document.getElementById('masterplay');
let wave = document.getElementById('wave');
masterplay.addEventListener('click', () => {
if (music.paused || music.currentTime  <= 0){
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
}else if(music.played || music.currentTime >= 0){
    music.pause();
    wave.classList.remove('active1');
    masterplay.classList.remove('bi-pause-fill');
    masterplay.classList.add('bi-play-fill');
}
})

let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let popsong = document.getElementsByClassName('popsong')[0];

pop_song_right.addEventListener('click',() =>{
    popsong.scrollLeft += 330;
})
pop_song_left.addEventListener('click',() =>{
    popsong.scrollLeft -= 330;
})

let popular_artist_left = document.getElementById('popular_artist_left');
let popular_artist_right = document.getElementById('popular_artist_right');
let items = document.getElementsByClassName('items')[0];




popular_artist_right.addEventListener('click',() =>{
    items.scrollLeft += 330;
})
popular_artist_left.addEventListener('click',() =>{
    items.scrollLeft -= 330;
})
let title = document.getElementById('title');

const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songitem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105 , .0)';
    })
}
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playlistplay')).forEach((el)=>{
        if (music.paused || music.currentTime  <= 0){ el.classList.add('bi-play-circle-fill');
    el.classList.remove('bi-pause-circle-fill');}
    else if(music.played || music.currentTime >= 0){
        el.classList.add('bi-pause-circle-fill');
    el.classList.remove('bi-play-circle-fill');
    }


    })
}


let index = 0;
let download = document.getElementById("download");
Array.from(document.getElementsByClassName('playlistplay')).forEach((e)=> {
e.addEventListener('click', (el)=>{
    index = el.target.id;
    music.src = `${index}.mp3`;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    download.href = `${index}.mp3`;
    let songtitles = songs.filter((els) => {
        return els.id == index;
    });
    songtitles.forEach(elss =>{
        let{songName} = elss;
        title.innerHTML = songName;
        download.setAttribute('download' , songName)

    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105 , .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');

})
})
let currentend = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementById('dot');
music.addEventListener('timeupdate', () =>{
let music_curr = music.currentTime;
let music_dur = music.duration;
//console.log(music_dur);
let min2 = Math.floor(music_curr / 60);
let sec2 = Math.floor(music_curr % 60);
let min1 = Math.floor( music_dur / 60);
let sec1 = Math.floor( music_dur % 60);
// console.log(sec1);
currentend.innerText = `${min1 - min2}:${sec1 - sec2}`;
let progressbar = parseInt((music_curr / music_dur) * 100);
seek.value = progressbar;
console.log(seek.value);
let seekbar = seek.value;
bar2.style.width = `${seekbar}%`;
dot.style.left = `${seekbar}%`;

})

seek.addEventListener('change' , () =>{
    music.currentTime = seek.value * music.duration /  100;
});
let volicon = document.getElementById('volicon');
let vol = document.getElementById('vol');
let volbar = document.getElementsByClassName('volbar')[0];
let voldot = document.getElementById('voldot');

vol.addEventListener('change' ,() =>{
 if(vol.value == 0){
 volicon.classList.remove('bi-volume-up-fill');
 volicon.classList.remove('bi-volume-down-fill');
 volicon.classList.add('bi-volume-mute-fill');
 }
 if(vol.value > 0){
    volicon.classList.remove('bi-volume-up-fill');
    volicon.classList.add('bi-volume-down-fill');
    volicon.classList.remove('bi-volume-mute-fill');
 }
 if(vol.value > 50){
    volicon.classList.add('bi-volume-up-fill');
    volicon.classList.remove('bi-volume-down-fill');
    volicon.classList.remove('bi-volume-mute-fill');
 }
 let vol_a = vol.value;
 volbar.style.width = `${vol_a}%`;
 voldot.style.left = `${vol_a}%`;
 music.volume = vol_a / 100;
})
let back = document.getElementById('back');
let next = document.getElementById('next');
back.addEventListener('click' ,()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songitem')).length;
    }
    music.src = `${index}.mp3`;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    let songtitles = songs.filter((els) => {
        return els.id == index;
    });
    songtitles.forEach(elss =>{
        let{songName} = elss;
        title.innerHTML = songName;

    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105 , .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
})
next.addEventListener('click' ,()=>{
    index++;
    if(index > Array.from(document.getElementsByClassName('songitem')).length){
        index = 1;
    }
    music.src = `${index}.mp3`;
    music.play();
    wave.classList.add('active1');
    masterplay.classList.remove('bi-play-fill');
    masterplay.classList.add('bi-pause-fill');
    let songtitles = songs.filter((els) => {
        return els.id == index;
    });
    songtitles.forEach(elss =>{
        let{songName} = elss;
        title.innerHTML = songName;

    });
    makeAllBackground();
    Array.from(document.getElementsByClassName('songitem'))[index - 1].style.background = 'rgb(105, 105, 105 , .1)';
    makeAllplays();
    el.target.classList.add('bi-pause-circle-fill');
    el.target.classList.remove('bi-play-circle-fill');
})
let shuffle = document.getElementsByClassName('shuffle')[0];
shuffle.addEventListener('click' , ()=>{
    let a = shuffle.innerHTML;
switch (a) {
    case next :
        shuffle.classList.add('bi-arrow-repeat');
        shuffle.classList.remove('bi-music-note-beamed');
        shuffle.classList.remove('bi-shuffle');
        shuffle.innerHTML = 'repeat'
        break;
    case repeat :
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random'
            break;
     case random :
       shuffle.classList.remove('bi-arrow-repeat');
       shuffle.classList.add('bi-music-note-beamed');
       shuffle.classList.add('bi-shuffle');
       shuffle.innerHTML = 'next'
        break;
    }
})



