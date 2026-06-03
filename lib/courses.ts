import{ supabase } from "./supabase";
import { Course } from "../types";
export async function getCourses(): Promise<{courses:Course[]|null, error:String | null}> {
    try{
        const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: true });
        if (error) {
            return { courses: null, error: error.message };
        }
        return { courses: data, error: null }
    } catch (error) {
        return { courses: null, error: "An unexpected error occurred" };
    }
}