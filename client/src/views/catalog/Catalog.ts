import Hls from 'hls.js';
import { Component, Vue } from "vue-property-decorator";
import { SERVER_URL } from "../../util/constants";
// import * as hls from "node_modules/hls.js";
// import * as Hls from "node_modules/hls";
// import hls = require('hls.js');
// import * as Hls from "node_modules/hls.js";
// import Hls from "node_modules/@types/hls.js/index";
// import h
// import * from "node_modules/hls.js";
interface FileList {
    fileName: string;
}

@Component
export default class Catalog extends Vue {
    private title = "Caster Catalog"; 

    private async getFileList(): Promise<FileList[]> {
        try {
            const response = await fetch(`${SERVER_URL}/ls`); 
            const body = await response.json();
            return body;
        } catch (exception) {
            console.log(exception);
            return [];
        }
    }

    private attachVideo(url: string, targetId: string) {
        const video = document.getElementById(targetId) as HTMLMediaElement;
        if(Hls.isSupported()) {
            const video = document.getElementById(targetId) as HTMLMediaElement;
            if(!video) {
                return;
            }
            const hls = new Hls();
            hls.attachMedia(video);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            console.log("video and hls.js are now bound together !");
            // video.play();
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.addEventListener('loadedmetadata', function() {
            video.play();
        });
  }


    }

    public async mounted(): Promise<void> {
        // console.log(SERVER_URL);
        console.log(await this.getFileList());
        const appleSample = 'http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8';
        const akamaiSample = 'https://cph-p2p-msl.akamaized.net/hls/live/2000341/test/master.m3u8';
        const hlsSample = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
        this.attachVideo(hlsSample, 'video');
    }
}