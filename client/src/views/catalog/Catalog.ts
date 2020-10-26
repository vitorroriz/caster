import Hls from 'hls.js';
import { Component, Vue } from "vue-property-decorator";
import { SERVER_URL } from "../../util/constants";
interface FileList {
    fileName: string;
}

@Component
export default class Catalog extends Vue {
    private title = "Caster Catalog"; 
    private mainVideoId = "main-video";

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
            hls.loadSource(url);
            hls.attachMedia(video);
            hls.on(Hls.Events.MEDIA_ATTACHED, function () {
            console.log("video and hls.js are now bound together !");
            });
        } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = url;
            video.addEventListener('loadedmetadata', function() {
            video.play();
        });
  }


    }

    public async mounted(): Promise<void> {
        const hlsSample = 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8';
        this.attachVideo(hlsSample, this.mainVideoId);
    }
}