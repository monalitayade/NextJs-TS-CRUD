// export default AddData;

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const AddData = () => {
  const [formData, setFormData] = useState({
    course_id: "",
    course_name: "",
    course_desc: "",
  });
  const [error, setError] = useState<string | null>(null); // Error state
  const router = useRouter(); // Navigation hook

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null); // Reset error state before submission

    // Field-wise validation
    // if (!formData.course_id.trim()) {
    //   setError("Course ID is required.");
    //   return;
    // }

    // if (!formData.course_name.trim()) {
    //   setError("Course Name is required.");
    //   return;
    // }

    // if (!formData.course_desc.trim()) {
    //   setError("Course Description is required.");
    //   return;
    // }

    try {
      const res = await fetch("/api/listing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const { message } = await res.json();

        console.log("error msg", message);

        throw new Error(message);
      }

      setFormData({ course_id: "", course_name: "", course_desc: "" }); // Reset form
      router.push("/"); // Redirect to the home page
    } catch (err: any) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="w-full flex justify-center items-center my-5">
      <form
        className="w-1/2 flex flex-col border-[1px] border-gray-500 rounded-lg pb-4"
        onSubmit={handleSubmit}>
        <div className="w-full flex bg-black text-center justify-center text-white font-sans font-bold rounded-t-lg py-3 mb-2">
          Add Course Data
        </div>

        <div className="w-full flex flex-col font-sans px-5 mb-3">
          <label htmlFor="course_id" className="mb-3">
            Course Id
          </label>
          <input
            type="text"
            id="course_id"
            value={formData.course_id}
            onChange={handleChange}
            className="border-[1px] border-gray-500 py-1 px-2 rounded-md"
          />
          {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}
        </div>
        <div className="w-full flex flex-col font-sans px-5 mb-3">
          <label htmlFor="course_name" className="mb-3">
            Course Name
          </label>
          <input
            type="text"
            id="course_name"
            value={formData.course_name}
            onChange={handleChange}
            className="border-[1px] border-gray-500 py-1 px-2 rounded-md"
          />
          {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}
        </div>
        <div className="w-full flex flex-col font-sans px-5 mb-3">
          <label htmlFor="course_desc" className="mb-3">
            Course Description
          </label>
          <input
            type="text"
            id="course_desc"
            value={formData.course_desc}
            onChange={handleChange}
            className="border-[1px] border-gray-500 py-1 px-2 rounded-md"
          />
          {/* {error && <div className="text-red-500 text-sm">{error}</div>} */}
        </div>
        {error && (
          <div className="text-red-500 text-sm mb-3 px-5 text-center">
            {error}
          </div>
        )}
        <button
          type="submit"
          className="bg-black text-white px-3 py-2 rounded-md mx-auto">
          Add Course
        </button>
      </form>
    </div>
  );
};

export default AddData;
