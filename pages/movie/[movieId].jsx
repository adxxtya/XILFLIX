import React, { useEffect } from 'react'
import Script from 'next/script';
import Navbar from '../../components/Essentials/Navbar';


function index() {      

    useEffect(() => {
    var el = document.getElementById('player');
    window.webtor = window.webtor || [];
    window.webtor.push({
        id: 'player',
        magnet: 'magnet:?xt=urn:btih:fa6ae58ef1199897f71f3dde332ebe4b5fb346c9&dn=one.of.us.is.lying.s02e07.multi.1080p.web.x264-stringerbell%5Beztv.re%5D.mkv%5Beztv.re%5D&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A80&tr=udp%3A%2F%2Fglotorrents.pw%3A6969%2Fannounce&tr=udp%3A%2F%2Ftracker.opentrackr.org%3A1337%2Fannounce&tr=udp%3A%2F%2Fexodus.desync.com%3A6969',
        title: 'Example Movie',
        width: '400px',
        subtitles: [
            // {
            //     srclang: 'en',
            //     label: 'SHQIP',
            //     src: 'https://dl.dropboxusercontent.com/s/afsiiiw705h3vkk/Ava.2020.HDRip.srt?dl=0',
            //     default: true,
            // },
        ],
        width: '100%',
        height: '100%',
        features: {
            autoSubtitles: true,
            continue:      false,
            // title:       false,
            // p2pProgress: false,
            // subtitles:   false,
            settings:      false,
            // fullscreen:  false,
            // playpause:   false,
            // currentTime: false,
            // timeline:    false,
            // duration:    false,
            // volume:      false,
            // chromecast:  false,
        },
        on: function(e) {
            if (e.name == window.webtor.TORRENT_FETCHED) {
                console.log('Torrent fetched!', e.data.files);

                var p = e.player;
                var files = document.getElementById('files');
                for (const f of e.data.files) {
                    if (!f.name.endsWith('.mp4')) continue;
                    var a = document.createElement('a');
                    a.setAttribute('href', f.path);
                    a.innerText = f.name;
                    files.appendChild(a);
                    a.addEventListener('click', function(e) {
                        e.preventDefault();
                        p.open(e.target.getAttribute('href'));
                        return false;
                    });
                }
            }
            if (e.name == window.webtor.TORRENT_ERROR) {
                console.log('Torrent error!')
            }
            if (e.name == window.webtor.INITED) {
                var p = e.player;
                document.getElementById('play').addEventListener('click', function(ev) {
                    p.play();
                });
                document.getElementById('pause').addEventListener('click', function(ev) {
                    p.pause();
                });
                document.getElementById('moveto1min').addEventListener('click', function(ev) {
                    p.setPosition(60);
                });
                document.getElementById('movetostart').addEventListener('click', function(ev) {
                    p.setPosition(0);
                });
            }
            // if (e.name == window.webtor.PLAYER_STATUS) {
            //     document.getElementById('player-status').innerHTML = e.data;
            // }
            // if (e.name == window.webtor.OPEN) {
            //     console.log(e.data);
            // }
            // if (e.name == window.webtor.CURRENT_TIME) {
            //     document.getElementById('current-time').innerHTML = parseInt(e.data);
            // }
            // if (e.name == window.webtor.DURATION) {
            //     document.getElementById('duration').innerHTML = parseInt(e.data);
            // }
            // if (e.name == window.webtor.OPEN_SUBTITLES) {
            //     console.log(e.data);
            // }
        },
    });
   
  }, [])
  return (
    <>
    <Script src="https://cdn.jsdelivr.net/npm/@webtor/embed-sdk-js/dist/index.min.js"
        strategy="lazyOnload"
        async
        onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />

    <div className='min-h-screen text-white bg-gradient-to-b from-[#000000] to-[#434343]'>
    <Navbar />
         {/* <div id="controls"> */}
        {/* <span class="control">
            Player status: <span id="player-status">NONE</span>
            </span>
            <span class="control">
            Current time: <span id="current-time">0</span> sec
            </span>
            <span class="duration">
            Duration: <span id="duration">0</span> sec
            </span>
        </div> */}


    <div id="player" className='h-[75vh] m-8'></div>
    <div id="files"></div> 
    <div className='flex flex-col justify-center items-center -mt-5 m-2'>
        Now You Can Save The Media In Your Device!!  
        <div id="download" className='cursor-pointer hover:text-zinc-200'> Click here to <u>download</u></div>
  </div>


    <div className='flex justify-center items-center gap-x-6 '>
<button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Server 1
  </span>
</button>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Server 2
  </span>
</button>
{/* <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Red to Yellow
      </span>
      </button>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
      <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Purple to blue
      </span>
    </button> */}


  </div>

    </div>
        <span class="control">
            External controls*: 
            <button id="play"></button>
            <button id="pause"></button>
            <button id="moveto1min"></button>
            <button id="movetostart"></button>
        </span>

    
    
    </>
  )
  
}



export default index