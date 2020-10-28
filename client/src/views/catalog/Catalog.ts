import Hls from 'hls.js';
import { Component, Vue } from "vue-property-decorator";
import { SERVER_URL, SERVER_PORT } from "../../util/constants";

@Component
export default class Catalog extends Vue {
    private title = "Caster Catalog"; 
    private mainVideoId = "main-video";

    private async requestVideoList(): Promise<string[]> {
        try {
            const response = await fetch(`${SERVER_URL}:${SERVER_PORT}/ls`); 
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
            console.log("video and hls.js are now bound together!");
            });

        } else if (video.canPlayType('application/vnd.apple.mpegurl')){
            video.src = url;
            video.addEventListener('loadedmetadata', function() {
                console.log("Meta loaded.");
            });
        }
    }

    private getVideoUrl(fileName: string) {
        return `${SERVER_URL}:${SERVER_PORT}/${fileName}` 
    }

    public async mounted(): Promise<void> {
        const videos = await this.requestVideoList();
        this.attachVideo(this.getVideoUrl(videos[0]), this.mainVideoId);
        console.log(await this.requestVideoList());
    }
}