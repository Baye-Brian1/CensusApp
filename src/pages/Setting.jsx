import { useContext, useState } from "react";
import { CensusContext } from "../context/CensusContext";

const Settings = () => {
  const [profile, setProfile] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+237 670 12 34 56",
    role: "Administrator",
    region: "Bamenda",
    language: "English"
  });

  const handleChange = e => setProfile({...profile, [e.target.name]: e.target.value});
  const handleSave = () => alert("Profile updated!");

  return (
    <div className="p-6 flex-1">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border p-4 flex flex-col items-center">
          <div className="w-24 h-24 bg-gray-300 flex items-center justify-center text-white text-xl">JD</div>
          <button className="mt-2 bg-black text-white px-4 py-2" onClick={()=>alert("Update photo")}>Update Photo</button>
        </div>

        <div className="border p-4 flex flex-col space-y-2">
          <label>Full Name</label>
          <input name="fullName" value={profile.fullName} onChange={handleChange} className="border p-2"/>
          <label>Email</label>
          <input name="email" value={profile.email} onChange={handleChange} className="border p-2"/>
          <label>Phone</label>
          <input name="phone" value={profile.phone} onChange={handleChange} className="border p-2"/>
          <label>Role</label>
          <input name="role" value={profile.role} onChange={handleChange} className="border p-2"/>
          <label>Region</label>
          <input name="region" value={profile.region} onChange={handleChange} className="border p-2"/>
          <label>Language</label>
          <input name="language" value={profile.language} onChange={handleChange} className="border p-2"/>
          <button className="mt-4 bg-black text-white px-4 py-2" onClick={handleSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;