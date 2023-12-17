import FetchMethods from '../FetchMethods';
import Urls from '../Url';
const { get, post } = FetchMethods;

const UserServices = {
    createUser: (params) => {
        return post(Urls.user(), params);
    },
    login: (params) => {
        return post(Urls.login(), params)
    }
};
export default UserServices;
