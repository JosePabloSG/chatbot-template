"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, Layers, Lightbulb, Wallet, BarChart3, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import CryptoLogos from "@/components/crypto-logos"
import FeatureCard from "@/components/feature-card"
import ConceptCard from "@/components/concept-card"

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] }
}

const stats = [
  { number: "100+", text: "Conceptos explicados" },
  { number: "50+", text: "Criptomonedas" },
  { number: "20+", text: "Blockchains" },
  { number: "10K+", text: "Usuarios" }
]

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-emerald-500" />,
    title: "Conceptos básicos",
    description: "Aprende los fundamentos de las criptomonedas, blockchain y los términos más importantes del ecosistema."
  },
  {
    icon: <Wallet className="h-10 w-10 text-cyan-500" />,
    title: "Wallets y seguridad",
    description: "Descubre los diferentes tipos de wallets, cómo funcionan y las mejores prácticas de seguridad."
  },
  {
    icon: <ArrowUpDown className="h-10 w-10 text-emerald-500" />,
    title: "Exchanges y trading",
    description: "Entiende cómo funcionan los exchanges, tipos de órdenes y conceptos básicos de trading."
  },
  {
    icon: <Layers className="h-10 w-10 text-cyan-500" />,
    title: "Redes blockchain",
    description: "Explora las diferentes redes blockchain, sus características y casos de uso específicos."
  },
  {
    icon: <Image src="/logos/btc.svg" alt="Bitcoin" width={40} height={40} className="text-emerald-500" />,
    title: "Principales criptomonedas",
    description: "Conoce en detalle Bitcoin, Ethereum, Solana y otras criptomonedas importantes del mercado."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-cyan-500" />,
    title: "Tecnologías emergentes",
    description: "Mantente al día con DeFi, NFTs, Web3 y otras tecnologías emergentes en el espacio cripto."
  }
]

const concepts = [
  {
    title: "¿Qué es un Exchange?",
    description: "Un exchange de criptomonedas es una plataforma que permite a los usuarios comprar, vender e intercambiar criptomonedas por otras monedas digitales o dinero fiat. Existen exchanges centralizados (CEX) como Binance o Coinbase, y descentralizados (DEX) como Uniswap.",
    icon: <ArrowUpDown className="h-6 w-6 text-emerald-500" />
  },
  {
    title: "¿Qué es un Wallet?",
    description: "Un wallet o monedero de criptomonedas es una herramienta que te permite almacenar, enviar y recibir criptomonedas. Contiene tus claves privadas, que son necesarias para acceder y gestionar tus activos digitales en la blockchain.",
    icon: <Wallet className="h-6 w-6 text-cyan-500" />
  },
  {
    title: "Tipos de Wallets",
    description: "Existen varios tipos de wallets: Hot wallets (conectados a internet) como wallets de software y exchanges; Cold wallets (sin conexión a internet) como hardware wallets y paper wallets; y custodial wallets (gestionados por terceros) vs non-custodial (control total del usuario).",
    icon: <Wallet className="h-6 w-6 text-emerald-500" />
  },
  {
    title: "Redes Blockchain",
    description: "Las redes blockchain son sistemas distribuidos que mantienen un registro inmutable de transacciones. Cada blockchain tiene características únicas: Bitcoin se centra en ser dinero digital, Ethereum permite contratos inteligentes, Solana ofrece alta velocidad, y existen muchas otras con diferentes enfoques y tecnologías.",
    icon: <Layers className="h-6 w-6 text-cyan-500" />
  },
  {
    title: "DeFi (Finanzas Descentralizadas)",
    description: "DeFi se refiere a aplicaciones financieras construidas sobre redes blockchain que eliminan intermediarios tradicionales. Incluye préstamos, intercambios descentralizados, staking, yield farming y otros servicios financieros que operan de manera transparente y sin permisos.",
    icon: <BarChart3 className="h-6 w-6 text-emerald-500" />
  },
  {
    title: "NFTs (Tokens No Fungibles)",
    description: "Los NFTs son activos digitales únicos que representan la propiedad de un item específico. A diferencia de las criptomonedas como Bitcoin, cada NFT tiene un valor único y no puede ser intercambiado de manera equivalente. Se utilizan para arte digital, coleccionables, gaming y más.",
    icon: <Image src="/logos/eth.svg" alt="Ethereum" width={24} height={24} className="text-cyan-500" />
  }
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0 opacity-20">
          <CryptoLogos />
        </div>

        <div className="container mx-auto relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeInUp}
              className="inline-block rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 px-4 py-1 text-sm font-medium mb-8"
            >
              Tu guía en el mundo cripto
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6"
            >
              Aprende sobre{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                criptomonedas
              </span>{" "}
              de manera sencilla
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300 mb-8"
            >
              Descubre conceptos, tecnologías y términos del mundo cripto con nuestro asistente virtual educativo.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.p
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.1
                  }}
                  className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400"
                >
                  {stat.number}
                </motion.p>
                <p className="text-gray-400 mt-2">{stat.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Aprende todo sobre el mundo cripto</h2>
            <p className="text-xl text-gray-400">
              Nuestro asistente virtual educativo te ayuda a entender los conceptos fundamentales de las criptomonedas y
              la tecnología blockchain.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Concepts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/30">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Conceptos clave que aprenderás</h2>
            <p className="text-xl text-gray-400">
              Nuestro asistente virtual te explica de manera clara y sencilla los conceptos más importantes del
              ecosistema cripto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concepts.map((concept, index) => (
              <ConceptCard
                key={concept.title}
                {...concept}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900 to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="container mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Comienza tu viaje en el mundo cripto</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Únete a miles de usuarios que ya están aprendiendo sobre criptomonedas con nuestro asistente virtual
            educativo.
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-950">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row justify-between items-center"
          >
            <div className="flex items-center mb-6 md:mb-0">
              <div className="flex space-x-2">
                <Image src="/logos/btc.svg" alt="Bitcoin" width={24} height={24} />
                <Image src="/logos/eth.svg" alt="Ethereum" width={24} height={24} />
                <Image src="/logos/sol.svg" alt="Solana" width={24} height={24} />
              </div>
              <span className="ml-3 text-xl font-bold">CryptoEdu</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Inicio
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Conceptos
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Recursos
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Contacto
              </Link>
            </div>
          </motion.div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} CryptoEdu. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
