"use client";

import React, { useEffect, useState } from "react";

type Course = {
  course_id: string;
  course_name: string;
  course_desc: string;
};

const Page = () => {
  const [courseListing, setCourseListing] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/listing");

        if (!res.ok) {
          throw new Error("Failed to fetch courses.");
        }

        const data = await res.json();
        setCourseListing(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="w-10/12 flex justify-center items-center flex-col">
      <div className="text-2xl font-sans font-semibold mb-4">Course List</div>
      <div className="w-full flex flex-wrap justify-between bg-black text-white p-2 rounded-md mb-3">
        <div>Course Id</div>
        <div>Course Name</div>
        <div>Course Description</div>
      </div>
      {courseListing.map((course) => (
        <div
          key={course.course_id}
          className="w-full flex flex-wrap justify-between bg-gray-100 text-black p-2 rounded-md mb-3">
          <div>{course.course_id}</div>
          <div>{course.course_name}</div>
          <div>{course.course_desc}</div>
        </div>
      ))}
    </div>
  );
};

export default Page;
