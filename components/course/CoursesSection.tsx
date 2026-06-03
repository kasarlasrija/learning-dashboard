import {getCourses} from "@/lib/courses";
import CourseGrid from "./CourseGrid"
export default async function CoursesSection() {
    const { courses, error } = await getCourses();
    return <CourseGrid courses={courses} error={error} />
}