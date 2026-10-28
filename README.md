# 🍾 Celebre & Encante - Site Completo de Eventos & Buffet

Site profissional, responsivo e interativo para empresa de buffet, decoração e organização de eventos completos (festas infantis, casamentos, aniversários, churrascos e eventos corporativos).

---

## 🚀 Como Rodar Localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🌐 Publicação no GitHub Pages

O projeto já está 100% configurado para rodar estático no GitHub Pages com todas as animações, imagens e interatividades funcionando.

### Método 1: Automático via GitHub Actions (Recomendado)

1. Adicione o seu repositório remoto (se ainda não adicionou):
   ```bash
   git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPOSITORIO.git
   ```

2. Envie o código para o GitHub:
   ```bash
   git push -u origin main
   ```

3. No GitHub:
   - Acesse o seu repositório no navegador.
   - Vá em **Settings** > **Pages**.
   - Em **Build and deployment** > **Source**, selecione: **GitHub Actions**.
   - Pronto! O workflow `.github/workflows/deploy.yml` fará o build e publicação automaticamente.

---

### Método 2: Publicação Direta via `gh-pages`

Se preferir publicar diretamente pela linha de comando:

```bash
npm run deploy
```

No GitHub:
- Em **Settings** > **Pages** > **Build and deployment** > **Source**, selecione: **Deploy from a branch**.
- Selecione a branch `gh-pages` e a pasta `/ (root)`.
