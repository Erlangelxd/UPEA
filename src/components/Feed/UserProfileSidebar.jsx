
import React from 'react';

function UserProfileSidebar({ user }) {
  return (
    <aside className="sidebar">
      <h3>Perfil</h3>
      <div className="card">
        <div className="profile-image-container">
          <img  alt="Profile avatar" class="profile-image" src="https://svgcrown.com/file/spiderman/5.png" />
          {/* Overlay for changing photo */}
          <div className="profile-image-upload">
            <label htmlFor="profile-upload" className="cursor-pointer">
              Cambiar foto
            </label>
            <input id="profile-upload" type="file" className="hidden" accept="image/*" />
          </div>
        </div>
        <p>{user.name}</p>
        <p>Carrera: {user.career}</p>
        <p>Semestre: {user.semester}</p>
        {/* Add button to update semester if needed */}
      </div>
    </aside>
  );
}

export default UserProfileSidebar;
