import { Component, Vue, Prop } from "vue-property-decorator";
import Hls from 'hls.js';

@Component
export default class CatalogItem extends Vue {
    @Prop(String)
    public videoId!: string;

    @Prop(String)
    public videoUrl!: string;

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

    public async mounted(): Promise<void> {
        await this.attachVideo(this.videoUrl, this.videoId);
    }

}