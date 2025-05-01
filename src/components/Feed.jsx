
import React, { useState, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useToast } from '@/components/ui/use-toast';

// Import refactored components
import UploadForm from '@/components/Feed/UploadForm';
import SearchFilter from '@/components/Feed/SearchFilter';
import PostCard from '@/components/Feed/PostCard';
import UserProfileSidebar from '@/components/Feed/UserProfileSidebar';
import StatsWidget from '@/components/Feed/StatsWidget';

// Example data (replace with API calls in production)
const exampleSubjects = [
  "Cálculo Diferencial", "Álgebra Lineal", "Programación", 
  "Física", "Química", "Estadística"
];
const exampleSemesters = Array.from({ length: 10 }, (_, i) => i + 1);
const examplePosts = [
  { id: 1, title: "Apuntes de Cálculo", description: "Notas sobre límites y derivadas", subject: "Cálculo Diferencial", semester: 1, type: "PDF", date: "2025-04-24" },
  { id: 2, title: "Ejercicios Resueltos", description: "Problemas de matrices", subject: "Álgebra Lineal", semester: 2, type: "PDF", date: "2025-04-23" },
  { id: 3, title: "Guía de Laboratorio", description: "Prácticas de programación", subject: "Programación", semester: 3, type: "DOC", date: "2025-04-22" },
  { id: 4, title: "Resumen Física I", description: "Conceptos clave de mecánica", subject: "Física", semester: 1, type: "PDF", date: "2025-04-21" },
];
const exampleUser = {
  name: "Nombre del Usuario",
  career: "Ingeniería",
  semester: 5,
  // profileImageUrl: "" // Add later if needed
};

function Feed() {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSemester, setFilterSemester] = useState('');
  const [filterSubject, setFilterSubject] = useState('');
  
  // In a real app, posts would likely be managed by a state management library or context
  const [posts, setPosts] = useState(examplePosts); 

  const handleUploadSubmit = (formData) => {
    // Placeholder for actual upload logic (e.g., API call)
    console.log('Uploading:', formData);

    // Simulate adding the new post to the list
    const newPost = {
      id: Date.now(), // Simple unique ID for example
      title: `Nuevo Contenido (${formData.file.name.split('.').pop()})`, // Example title
      description: formData.content,
      subject: formData.selectedSubject,
      semester: parseInt(formData.selectedSemester),
      type: formData.file.name.split('.').pop().toUpperCase(),
      date: new Date().toISOString().split('T')[0],
    };
    setPosts(prevPosts => [newPost, ...prevPosts]);

    toast({
      title: "¡Éxito!",
      description: "Tu contenido ha sido publicado correctamente"
    });
  };

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const lowerSearchTerm = searchTerm.toLowerCase();
      const matchesSearch = post.title.toLowerCase().includes(lowerSearchTerm) ||
                           post.description.toLowerCase().includes(lowerSearchTerm);
      const matchesSemester = !filterSemester || post.semester === parseInt(filterSemester);
      const matchesSubject = !filterSubject || post.subject === filterSubject;
      return matchesSearch && matchesSemester && matchesSubject;
    });
  }, [posts, searchTerm, filterSemester, filterSubject]);

  return (
    <>
      <UserProfileSidebar user={exampleUser} />

      <main className="content">
        <UploadForm 
          subjects={exampleSubjects} 
          semesters={exampleSemesters} 
          onSubmit={handleUploadSubmit} 
        />

        <SearchFilter 
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterSemester={filterSemester}
          setFilterSemester={setFilterSemester}
          filterSubject={filterSubject}
          setFilterSubject={setFilterSubject}
          semesters={exampleSemesters}
          subjects={exampleSubjects}
        />

        {/* Use AnimatePresence for exit animations */}
        <AnimatePresence mode="sync"> 
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index} />
            ))
          ) : (
             <p className="text-center text-gray-500 mt-8">No se encontró contenido con los filtros actuales.</p>
          )}
        </AnimatePresence>
      </main>

      <StatsWidget 
        postCount={posts.length} 
        subjectCount={exampleSubjects.length} 
      />
    </>
  );
}

export default Feed;

