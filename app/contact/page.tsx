"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Something went wrong")
      }

      setSuccess(true)
      setForm({ name: "", email: "", message: "" })
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.15, duration: 0.6 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <motion.section
      className="max-w-3xl mx-auto px-6 py-24"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8"
        variants={itemVariants}
      >
        Contact Us
      </motion.h1>

      <motion.p
        className="text-center text-zinc-600 dark:text-zinc-400 mb-12"
        variants={itemVariants}
      >
        Have questions or feedback? Send us a message and we’ll get back to you soon.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        variants={itemVariants}
      >
        <motion.div variants={itemVariants}>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <label className="block mb-2 font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full border border-zinc-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>

        {error && (
          <motion.p
            className="text-red-600"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {error}
          </motion.p>
        )}
        {success && (
          <motion.p
            className="text-green-600"
            variants={itemVariants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Message sent successfully!
          </motion.p>
        )}

        <motion.button
          type="submit"
          disabled={loading}
          className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {loading ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.section>
  )
}
