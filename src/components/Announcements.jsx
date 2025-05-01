
import React from 'react';
import { motion } from 'framer-motion';
import { Bell, Calendar, Clock } from 'lucide-react';

function Announcements() {
  const announcements = [
    {
      id: 1,
      title: "Inscripciones Abiertas",
      content: "Las inscripciones para el próximo semestre están abiertas. No olvides revisar las fechas importantes y los requisitos necesarios.",
      date: "24/04/2025",
      time: "09:00",
      priority: "high"
    },
    {
      id: 2,
      title: "Cambio de Horarios",
      content: "Se han actualizado los horarios de las siguientes materias: Cálculo Avanzado, Programación Web, Bases de Datos. Por favor verifica tu nuevo horario.",
      date: "23/04/2025",
      time: "14:30",
      priority: "medium"
    },
    {
      id: 3,
      title: "Becas Disponibles",
      content: "Nueva convocatoria de becas para estudiantes de alto rendimiento. Las aplicaciones cierran el 30 de abril.",
      date: "22/04/2025",
      time: "11:15",
      priority: "high"
    }
  ];

  return (
    <motion.div 
      className="content"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="announcements-header">
        <h2>Anuncios Importantes</h2>
        <Bell size={24} />
      </div>
      
      <motion.div 
        className="announcements-grid"
        variants={{
          show: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {announcements.map((announcement, index) => (
          <motion.div 
            key={announcement.id}
            className={`card announcement-card ${announcement.priority}`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{announcement.title}</h3>
            <p className="announcement-content">{announcement.content}</p>
            
            <div className="announcement-meta">
              <div className="meta-item">
                <Calendar size={16} />
                <span>{announcement.date}</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{announcement.time}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Announcements;
