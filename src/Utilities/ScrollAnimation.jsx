import { motion } from "framer-motion";

export function DownReveal({ children, className = '' }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

export function Reveal({ children, className = '' }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

export function UpReveal({ children, className = '' }) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
}