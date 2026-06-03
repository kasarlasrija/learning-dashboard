import { supabase } from "./supabase"
import { Course } from "@/types"

export async function getCourses(): Promise<{ courses: Course[] | null; error: string | null }> {
  try {
    const { data, error } = await supabase
      .from("courses")
      .select("*")
      .order("created_at", { ascending: true })

    if (error) {
      return { courses: null, error: String(error.message) }
    }

    return { courses: data, error: null }

  } catch (err) {
    return { courses: null, error: String("Something went wrong. Please try again.") }
  }
}