import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { UserRound, Mail, Calendar, User } from "lucide-react";

const Profile = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-light-stone to-soft-lime py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-10 relative overflow-hidden">

        {/* Header Avatar */}
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 rounded-full bg-soft-blue text-white flex items-center justify-center shadow-lg">
            <UserRound size={80} />
          </div>
        </div>

        {/* Info User */}
        <h2 className="text-3xl font-butler font-bold text-center text-cocoa mb-2">
          Welcome, {currentUser?.displayName || "Fashion Lover"}!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          This is your Clovera profile
        </p>

        <div className="grid sm:grid-cols-2 gap-6 text-gray-700">
          <div className="flex items-start gap-4">
            <Mail className="text-terra-cotta mt-1" />
            <div>
              <p className="text-sm font-medium">Email</p>
              <p className="text-base">{currentUser?.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <User className="text-terra-cotta mt-1" />
            <div>
              <p className="text-sm font-medium">ID</p>
              <p className="text-base break-all">{currentUser?.uid}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Calendar className="text-terra-cotta mt-1" />
            <div>
              <p className="text-sm font-medium">Created At</p>
              <p className="text-base">
                {currentUser?.metadata?.creationTime
                  ? new Date(currentUser.metadata.creationTime).toLocaleDateString()
                  : "-"}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <User className="text-terra-cotta mt-1" />
            <div>
              <p className="text-sm font-medium">Display Name</p>
              <p className="text-base">{currentUser?.displayName || "Not set"}</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/home" className="btn-secondary">
            Back to Home
          </Link>
          <button
            onClick={handleLogout}
            className="btn-primary bg-terra-cotta hover:bg-opacity-90 text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
