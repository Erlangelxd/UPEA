
import React, { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

function Register() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    correo: '',
    carrera: '',
    semestre: '',
    foto: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Registro exitoso",
      description: "Tu cuenta ha sido creada correctamente"
    });
  };

  const handleChange = (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          fotoPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <motion.div 
      className="content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="profile-image-container">
          {formData.fotoPreview ? (
            <img src={formData.fotoPreview} alt="Preview" className="profile-image" />
          ) : (
            <img  alt="Default profile" className="profile-image" src="https://images.unsplash.com/photo-1652841190565-b96e0acbae17" />
          )}
          <label className="profile-image-upload">
            <input
              type="file"
              name="foto"
              onChange={(e) => {
                handleChange(e);
                handleImagePreview(e);
              }}
              accept="image/*"
              style={{ display: 'none' }}
            />
            Cambiar foto
          </label>
        </div>

        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.01 }}
        >
          <label className="form-label">Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-input"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </motion.div>
        
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.01 }}
        >
          <label className="form-label">Edad</label>
          <input
            type="number"
            name="edad"
            className="form-input"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </motion.div>
        
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.01 }}
        >
          <label className="form-label">Correo</label>
          <input
            type="email"
            name="correo"
            className="form-input"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </motion.div>
        
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.01 }}
        >
          <label className="form-label">Carrera</label>
          <input
            type="text"
            name="carrera"
            className="form-input"
            value={formData.carrera}
            onChange={handleChange}
            required
          />
        </motion.div>
        
        <motion.div 
          className="form-group"
          whileHover={{ scale: 1.01 }}
        >
          <label className="form-label">Semestre</label>
          <input
            type="number"
            name="semestre"
            className="form-input"
            value={formData.semestre}
            onChange={handleChange}
            required
          />
        </motion.div>
        
        <motion.button 
          type="submit" 
          className="btn btn-primary"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Registrarse
        </motion.button>
      </form>
    </motion.div>
  );
}

export default Register;
