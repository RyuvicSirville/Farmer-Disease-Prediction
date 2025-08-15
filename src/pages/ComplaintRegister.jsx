import React, { useState } from "react";
import { FaDog, FaLeaf, FaUpload, FaPhone } from "react-icons/fa";
import Header from "../componets/Header";
import Footer from "../componets/Footer";
const ComplaintRegister = () => {
  const [complaintType, setComplaintType] = useState("");
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [issueType, setIssueType] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleComplaintTypeSelect = (type) => {
    setComplaintType(type);
    setErrors({});
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter(
      (file) =>
        file.type.startsWith("image/") && file.size <= 5 * 1024 * 1024 // 5MB limit
    );

    if (validFiles.length !== files.length) {
      setErrors({
        ...errors,
        images: "Please upload only images under 5MB each.",
      });
    } else {
      setErrors({ ...errors, images: "" });
    }

    setImages([...images, ...validFiles]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const newErrors = {};
    if (!complaintType) newErrors.complaintType = "Please select a complaint type.";
    if (images.length === 0) newErrors.images = "Please upload at least one image.";
    if (!description.trim()) newErrors.description = "Please provide a description.";
    if (!issueType) newErrors.issueType = "Please select an issue type.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
      alert("Complaint registered successfully!");
      setComplaintType("");
      setImages([]);
      setDescription("");
      setIssueType("");
    }, 2000);
  };

  return (
    <div>
        <Header/>
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-lg overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Complaint Register</h2>
          
          {!complaintType && (
            <div className="flex justify-center space-x-6 mb-8">
              <button
                onClick={() => handleComplaintTypeSelect("animal")}
                className="flex items-center justify-center px-5 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 transition-all duration-200"
              >
                <FaDog className="mr-3" />
                Animal
              </button>
              <button
                onClick={() => handleComplaintTypeSelect("plant")}
                className="flex items-center justify-center px-5 py-3 border border-transparent text-lg font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 transition-all duration-200"
              >
                <FaLeaf className="mr-3" />
                Plant
              </button>
            </div>
          )}

          {errors.complaintType && (
            <p className="text-red-600 text-sm italic mb-4">{errors.complaintType}</p>
          )}

          {complaintType && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="images" className="block text-sm font-medium text-gray-700">
                  Upload Images
                </label>
                <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed border-gray-300 rounded-xl">
                  <div className="space-y-1 text-center">
                    <FaUpload className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="images"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload files</span>
                        <input
                          id="images"
                          name="images"
                          type="file"
                          multiple
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-2">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 5MB</p>
                  </div>
                </div>
                {errors.images && (
                  <p className="text-red-600 text-sm italic mt-2">{errors.images}</p>
                )}
                {images.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-4">
                    {images.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={URL.createObjectURL(image)}
                          alt={`Uploaded ${index + 1}`}
                          className="h-20 w-20 object-cover rounded-lg shadow-md"
                        />
                        <button
                          type="button"
                          onClick={() => setImages(images.filter((_, i) => i !== index))}
                          className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-1 text-xs"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="mt-2 block w-full shadow-sm border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="Describe the issue in detail"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                {errors.description && (
                  <p className="text-red-600 text-sm italic mt-2">{errors.description}</p>
                )}
              </div>

              <div>
                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                  Issue Type
                </label>
                <select
                  id="issueType"
                  name="issueType"
                  className="mt-2 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value={issueType}
                  onChange={(e) => setIssueType(e.target.value)}
                >
                  <option value="">Select an issue type</option>
                  <option value="health">Health</option>
                  <option value="behavior">Behavior</option>
                  <option value="other">Other</option>
                </select>
                {errors.issueType && (
                  <p className="text-red-600 text-sm italic mt-2">{errors.issueType}</p>
                )}
              </div>

              <div className="flex justify-between items-center">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 transition-all duration-200"
                  onClick={() => alert(`Calling ${complaintType === "animal" ? "Vet" : "Plant Specialist"}...`)}
                >
                  <FaPhone className="mr-2" />
                  Call {complaintType === "animal" ? "Vet" : "Plant Specialist"}
                </button>
                <button
                  type="submit"
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white ${isLoading ? 'bg-gray-500 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-500'} transition-all duration-200`}
                  disabled={isLoading}
                >
                  {isLoading ? "Submitting..." : "Submit Complaint"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
   
    </div>
  );
};

export default ComplaintRegister;
