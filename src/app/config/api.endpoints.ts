import { environment } from './../../environments/environment';
export class ApiEndpoints {
    public static get API_ENDPOINT() { return environment.production; }

    public static get GET_NOTIFICATIONS() { return this.API_ENDPOINT + '/notifications/getAll'; }
    public static get GET_NAVIGATION() { return this.API_ENDPOINT + '/navigation/get'; }
}
