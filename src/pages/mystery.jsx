import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const Mystery = () => {
  return (
    <Layout>
      <div style={{ paddingTop: "15rem" }}>
        <motion.h1
          animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          Mystery
        </motion.h1>
      </div>
    </Layout>
  );
};

export default Mystery;
