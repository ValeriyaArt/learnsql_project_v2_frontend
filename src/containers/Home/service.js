import BaseService from "../../service/base-service";

class SignInService extends BaseService{
    joinCourse(id){

    }
    getCourses(){
        return this.get('api/course')
    }
    getMyCourses(){
        return this.get('api/student-course')
    }
}

export default SignInService;