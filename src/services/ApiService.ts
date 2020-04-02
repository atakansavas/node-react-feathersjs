import Api from '../models/Api.model';

export class ApiService {

    static ApiList(): Api[] {
        const apiList: Api[] = [
            { apiId: 1, apiName: "Api1" },
            { apiId: 2, apiName: "THOR" },
            { apiId: 3, apiName: "KARABAG" },
            { apiId: 4, apiName: "DEVAMKE" },
            { apiId: 5, apiName: "BULENT" },
            { apiId: 6, apiName: "SERTTAS" },
            { apiId: 7, apiName: "HAKAN" },
            { apiId: 8, apiName: "HAM" },
            { apiId: 9, apiName: "SOKELEK" }
        ]

        return apiList;
    }

    static GetApiName(apiId: number): Api {
        return this.ApiList().filter(api => api.apiId == apiId)[0];
    }
}
