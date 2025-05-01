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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <motion.div
        className="content p-6 bg-white rounded-md shadow-md w-full max-w-md" // Añadido max-w-md y p-6
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Registro de Usuario</h2> {/* Centrado del título */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4"> {/* Formulario en columna con espacio */}
          <div className="flex flex-col items-center mb-4"> {/* Centrado de la imagen */}
            {formData.fotoPreview ? (
              <img src={formData.fotoPreview} alt="Preview" className="profile-image rounded-full w-24 h-24 object-cover" />
            ) : (
              <img  alt="Default profile" className="profile-image rounded-full w-24 h-24 object-cover" src="https://svgcrown.com/file/spiderman/5.png" />
            )}
            <label className="profile-image-upload mt-2 cursor-pointer text-sm text-gray-600">
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
            <label className="form-label block text-gray-700 text-sm font-bold mb-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            whileHover={{ scale: 1.01 }}
          >
            <label className="form-label block text-gray-700 text-sm font-bold mb-2">Edad</label>
            <input
              type="number"
              name="edad"
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.edad}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            whileHover={{ scale: 1.01 }}
          >
            <label className="form-label block text-gray-700 text-sm font-bold mb-2">Correo</label>
            <input
              type="email"
              name="correo"
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            whileHover={{ scale: 1.01 }}
          >
            <label className="form-label block text-gray-700 text-sm font-bold mb-2">Carrera</label>
            <input
              type="text"
              name="carrera"
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.carrera}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.div
            className="form-group"
            whileHover={{ scale: 1.01 }}
          >
            <label className="form-label block text-gray-700 text-sm font-bold mb-2">Semestre</label>
            <input
              type="number"
              name="semestre"
              className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={formData.semestre}
              onChange={handleChange}
              required
            />
          </motion.div>

          <motion.button
            type="submit"
            className="btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Registrarse
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

export default Register;