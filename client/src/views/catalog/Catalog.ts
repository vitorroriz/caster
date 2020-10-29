import { Component, Vue } from "vue-property-decorator";
import { SERVER_URL, SERVER_PORT } from "../../util/constants";
import CatalogItem from "../../components/CatalogItem.vue";

type videoItem = {videoId: string; videoUrl: string};
@Component({
    components: {
        CatalogItem
    }
})
export default class Catalog extends Vue {
    private title = "Caster Catalog"; 
    private videoList: videoItem[] = [];

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

    private getVideoUrl(fileName: string) {
        return `${SERVER_URL}:${SERVER_PORT}/${fileName}` 
    }

    public async mounted(): Promise<void> {
        const videos = await this.requestVideoList();
        videos.forEach((video, index) => {
            this.videoList.push({videoId: `${video}:${index}`, videoUrl: this.getVideoUrl(video)});
        });
        console.log(this.videoList);
    }
}