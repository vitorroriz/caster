import { Component, Vue } from "vue-property-decorator";
import { SERVER_URL } from "../../util/constants";

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

    public async mounted(): Promise<void> {
        console.log(SERVER_URL);
        console.log(await this.getFileList());
    }
}