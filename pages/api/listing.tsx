import { NextApiRequest, NextApiResponse } from "next";

// In-memory storage for courses
let courses = [
  { course_id: "1", course_name: "React Basics", course_desc: "Learn React" },
  { course_id: "2", course_name: "Next.js", course_desc: "Learn Next.js" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    // Return the list of courses
    res.status(200).json(courses);
  } else if (req.method === "POST") {
    // Add a new course
    const { course_id, course_name, course_desc } = req.body;

    if (!course_id || !course_name || !course_desc) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newCourse = { course_id, course_name, course_desc };
    courses.push(newCourse);
    res.status(201).json(newCourse);
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
