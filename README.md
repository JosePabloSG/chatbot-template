# 🤖 Chatbot Template with Next.js and OpenAI

Una plantilla moderna y fácil de usar para crear tu propio chatbot utilizando Next.js 14, OpenAI y Bun.

## ✨ Características

- 🚀 Next.js 15 con App Router
- 💬 Integración con OpenAI API
- 🎨 UI moderna con Tailwind CSS y Shadcn/ui
- 🔄 Gestión de estado con React Query
- ⚡ Bun como gestor de paquetes y runtime
- 🌐 API Routes para comunicación segura
- 📱 Diseño responsivo

## 📁 Estructura del Proyecto

```
├── app/                  # Directorio principal de Next.js
│   ├── api/             # API routes
│   └── page.tsx         # Página principal
├── components/          # Componentes React
│   ├── chat-assistant/  # Componentes del chatbot
│   └── ui/             # Componentes de UI reutilizables
├── config/             # Configuración de OpenAI
├── hooks/              # Custom hooks
└── providers/          # Providers de la aplicación
```

## 🚀 Comenzando

### Prerrequisitos

- [Bun](https://bun.sh/) instalado en tu sistema
- Una [API Key de OpenAI](https://platform.openai.com/api-keys)
- [Node.js](https://nodejs.org/) (versión 18 o superior)

### Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
cd chatbot-template
```

2. Instala las dependencias:
```bash
bun install
```

3. Configura las variables de entorno:
   - Crea un archivo `.env.local` en la raíz del proyecto
   - Añade tu API key de OpenAI:
```env
OPENAI_API_KEY=tu-api-key-aquí
```

4. Inicia el servidor de desarrollo:
```bash
bun dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## ⚙️ Configuración

### OpenAI SDK
El proyecto utiliza el SDK oficial de OpenAI. La configuración se encuentra en `config/openai.config.ts`. Puedes ajustar los parámetros del modelo según tus necesidades:

```typescript
// Ejemplo de configuración
export const openAIConfig = {
  model: "gpt-3.5-turbo",
  temperature: 0.7,
  max_tokens: 500
};
```

## 🛠️ Personalización

Puedes personalizar el chatbot modificando:
- Los estilos en `app/globals.css`
- Los componentes del chat en `components/chat-assistant`
- La lógica de la API en `app/api/open-ai/route.ts`

## 📚 Recursos Útiles

- [Documentación de OpenAI](https://platform.openai.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Bun Documentation](https://bun.sh/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para sugerencias y mejoras.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo LICENSE para más detalles.
