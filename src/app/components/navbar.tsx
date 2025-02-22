'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { User, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setTimeout(() => {
      router.push('/login');
    }, 500);

    //setIsProfileOpen(false); // Cerrar el menú desplegable
  };

  return (
    <motion.nav
      style={{ zIndex: 1 }}
      className="fixed top-0 right-0 h-16 bg-white shadow-md flex items-center justify-end px-6"
      animate={{ width: '100%' }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <button
          onClick={() => setIsProfileOpen(!isProfileOpen)}
          className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white focus:outline-none"
        >
          <User size={20} />
        </button>

        {/* Menú desplegable utilizando Frame Motion */}
        <AnimatePresence>
          {isProfileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg"
            >
              <div className="p-4">
                <p className="text-gray-800 font-semibold">Perfil</p>
                <button
                  onClick={handleLogout}
                  className="mt-2 w-full text-left text-red-600 hover:text-red-800 flex items-center gap-2"
                >
                  <LogOut size={16} />
                  Cerrar sesión
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
