import { GetCoursesQueryResult } from "@/sanity.types";

interface CourseCardProps {
  course: GetCoursesQueryResult[number];
  progress?: number;
  href: string;
}

function CourseCard({course, progress, href}: CourseCardProps) {
  return <div>CourseCard</div>;
}
export default CourseCard;
