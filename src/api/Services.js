import FetchMethods from './FetchMethods';
import Urls from './Url';
const { get, post } = FetchMethods;

const VideoServices = {
  getAllVideos: (params) => {
    return get(Urls.video() + params);
  },
  createVideo: params => {
    return post(Urls.video(), params);
  },
};
export default VideoServices;
