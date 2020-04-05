import BaseService from "../../service/base-service";

class CourseService extends BaseService{
    getCourseTasks(id){
        return this.get(`/api/individualroutetasks/${id}/`);
    }
    getCourseTask(id){
        return this.get(`/api/tasks/${id}/`);
    }
    getCourseMethodical(id){
        return this.get(`/api/course/${id}/`);
    }
    getCourseStatistics(id){
        return this.get(`/api/course/${id}/`);
    }
    completeTask(courseId, themeId, taskId, answer){
        const formData = new FormData();

        formData.append('solution', answer);

        return this.completeTask(`/api/student-course/${courseId}/theme/${themeId}/set-of-tasks/${taskId}/task/${taskId}`, formData);
    }
}

export default CourseService;