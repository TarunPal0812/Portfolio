import { Ghost } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-6"
      >
        <div className="flex justify-center">
          <div className="p-6 rounded-full bg-violet-100">
            <Ghost className="h-12 w-12 text-violet-600" />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>

        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition duration-300"
        >
          Go Home
        </Link>
      </motion.div>
    </section>
  );
};

export default NotFound;
