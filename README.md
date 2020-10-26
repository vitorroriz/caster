# caster

This project was created so I can learn a bit about **HTTP Live Stream (HLS)**, the **JS/TS HLS library Hls.js** (https://github.com/video-dev/hls.js) and video-on-demand as a whole. Note that this is a work in progress.

**Node Express Server**:

This application will allow you to access your personal videos in all devices on in your local network. Example of usage: your personal videos, or the movies and series you have on your Desktop can be accessed in your TV, mobile or any other device that can launch a browser with certain capabilities.

The idea is to have an express server serving videos (.m3u8) from a local directory in your device. The server will also list, when requested, the available files in the served media directory. At a second iteration the server will not only serve .m3u8 videos but convert mp4 videos such that the user don't have to convert it by him/herself.

Stack: Node.js/Typescript/Express

**Client**:

The client, a Vue app, will display a catalog of the available videos and stream it through HLS/HTML5. It will first request a list of the available items in the catalog and then populate the catalog accordingly.

The template for the Vue application was genearted via vue-cli (https://cli.vuejs.org/).

Stack: Vue/Typescript/Hls.js/Node.js

**Instructions**:

To run client with Node.js:
- `cd client`
- `npm install`
- `npm run serve`

To run server:
- `cd casterserver`
- `npm install`
- `npm start`

Stack: Vue/Typescript/Hls.js/Node.js

**References:**

- **HLS**:
  - https://github.com/video-dev/hls.js
  - https://en.wikipedia.org/wiki/HTTP_Live_Streaming
  - https://medium.com/canal-tech/how-video-streaming-works-on-the-web-an-introduction-7919739f7e1
  - https://qvault.io/2020/07/28/hls-video-streaming-with-node-js-a-tutorial/
- **Express:**
  - https://www.atyantik.com/expressjs-server-with-typescript-part-2-the-novice-programmer/
- **Vue:**
  - https://vuejs.org/
  - https://cli.vuejs.org/
