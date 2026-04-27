import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = process.env.PORT || 3005;

  // API Placeholder para futuros servicios de AntartidaLabs
  app.get('/api/health', (req, res) => {
    res.json({ status: 'active', workforce: 'synthetic' });
  });

  if (process.env.NODE_ENV !== 'production') {
    // Middleware de Vite para desarrollo
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Servir archivos estáticos en producción
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 AntartidaLabs server running on http://localhost:${PORT}`);
  });
}

startServer();
