export class BRRFEndpoints {
    private baseURL = 'http://localhost:52190/api/';
    // private baseURL ='http://brrfapis.sesatsolutions.loc/api/';

    generateUrl(endpoint: any) {
        return this.baseURL + endpoint;
    }

    GET_SURVEY(): string {
        return this.generateUrl('getsurvey');
    }

    APPROVE_SURVEY(): string {
        return this.generateUrl('approvesurvey');
    }
}