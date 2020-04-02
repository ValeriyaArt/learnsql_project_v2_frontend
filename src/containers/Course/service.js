import BaseService from "../../service/base-service";

class CourseService extends BaseService{
    getCourseInfo(id){
        return this.get(`/api/course/${id}/`);
    }
}

export default CourseService;