'use client';
import { motion } from 'framer-motion';
import { Menu, Home, FileText, Settings } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <>
      {/* Botón de abrir/cerrar el Sidebar, fuera del contenedor del sidebar */}
      <button
        onClick={toggleSidebar}
        className="fixed top-3 left-5 z-50 bg-blue-600 text-white p-2 rounded-md shadow-lg"
      >
        <Menu size={24} />
      </button>

      {/* Capa oscura cuando el Sidebar está abierto */}
      {isOpen && (
        <div
          onClick={toggleSidebar} // Opción de cerrar el sidebar cuando se hace clic en el fondo oscuro
          className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-40"
        />
      )}

      {/* Sidebar que se despliega */}
      <motion.div
        initial={{ x: -250 }}
        animate={{ x: isOpen ? 0 : -250 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 h-full w-60 bg-gray-900 text-white shadow-lg z-50 flex flex-col py-6 px-4"
      >
        <h2 className="text-xl font-bold text-center mb-4">Dashboard</h2>

        <nav className="flex flex-col gap-6">
          <SidebarItem icon={<Home size={20} />} text="Inicio" />
          <SidebarItem icon={<FileText size={20} />} text="Eventos" />
          <SidebarItem icon={<Settings size={20} />} text="Configuración" />
        </nav>
      </motion.div>
    </>
  );
}

function SidebarItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-md cursor-pointer hover:bg-blue-500 transition">
      {icon}
      <span>{text}</span>
    </div>
  );
}
