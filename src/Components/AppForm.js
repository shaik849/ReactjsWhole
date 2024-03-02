import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

async function postImage({ image, description }) {
  const formData = new FormData();
  formData.append('image', image);
  formData.append('description', description);

  const result = await axios.post('http://localhost:3000/api/', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return result.data;
}

const AppForm = () => {
  const [imgData, setImgData] = useState([]);
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:3000/api/');
      setImgData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const submit = async (event) => {
    event.preventDefault();
  
    try {
      setLoading(true);
      const result = await postImage({ image: file, description });
      setImgData([result.image]);
      setFile("");
      setDescription('');
    } catch (error) {
      console.error('Error submitting image:', error);
    } finally {
      setLoading(false);
    }
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };

  const deleteImg = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:3000/api/${id}`);
      // Trigger alert after successful deletion
      alert('Image deleted successfully!');
      // Refresh the data after deletion
      fetchData();
    } catch (error) {
      console.error('Error deleting image:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [loading]); // Update the data when loading state changes

  return (
    <div className="p-10">
      <form onSubmit={submit}>
        <input onChange={fileSelected} type="file" accept="image/*" />
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10 m-2">
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900"
              placeholder=" "
            />
            <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
              Username
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
        {loading && <div>Loading...</div>}
      </form>
      {imgData?.data ? (
        imgData?.data.map((data) => (
          <div key={data?._id} className="flex items-center justify-center my-4">
            <img
              src={data?.imageUrl}
              className="max-w-[200px] h-[400px]"
              alt={`Image ${data?._id}`}
            />
            <div>
              <button
                type="button"
                className="bg-red-500 rounded-lg p-2 m-2"
                onClick={() => deleteImg(data?._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        // Render something when imgData.data is empty
        <h1>No data available</h1>
      )}
    </div>
  );
};

export default AppForm;
