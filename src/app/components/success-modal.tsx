import { motion } from "framer-motion";

export default function SuccessModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm w-full"
      >
        <div className="flex flex-col items-center">
          <div className="bg-green-500 text-white rounded-full w-16 h-16 flex items-center justify-center mb-4 shadow-lg">
            <span className="text-3xl">✔️</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Registro Exitoso!</h3>
          <p className="text-gray-600 mb-4">Serás redirigido a la página de inicio de sesión...</p>
          {/* Barra de carga */}
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}