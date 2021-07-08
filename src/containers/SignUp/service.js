import BaseService from "../../service/base-service";

class SignInService extends BaseService{
    getOrganisations() {
        return this.get('/api/student-groups/get_choise_values/?field=organization');
    }

    getPeriods() {
        return this.get('/api/student-groups/get_choise_values/?field=period');
    }

    getGroups({organization, period}) {
        return this.get(`/api/student-groups/?period=${period}&organization=${organization}`);
    }
}

export default SignInService;
export const service = new SignInService()