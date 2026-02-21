# Instruções de Deploy na Vercel

## Opção 1: Deploy Automático via Git Integration (Recomendado)

1. Acesse https://vercel.com/new
2. Clique em "Import Git Repository"
3. Conecte o repositório: https://github.com/Vicenteiague/gmnchecklist
4. Configure o projeto:
   - **Framework**: Vite
   - **Build Command**: `pnpm run build`
   - **Output Directory**: `dist/public`
   - **Node Version**: 22.x
5. Clique em "Deploy"

## Opção 2: Reconectar Projeto Existente

O projeto "checklistgmn" já existe na Vercel. Para reconectá-lo ao novo repositório:

1. Acesse https://vercel.com/projects
2. Selecione o projeto "checklistgmn"
3. Vá para "Settings" > "Git"
4. Desconecte o repositório antigo
5. Conecte o novo repositório: https://github.com/Vicenteiague/gmnchecklist
6. Clique em "Redeploy"

## URLs Disponíveis

- **Domínio principal**: https://checklistgmn.vercel.app
- **URL de deployment**: https://checklistgmn-jqfqp2ovu-vicente-s-projects-e2590f15.vercel.app
- **Repositório**: https://github.com/Vicenteiague/gmnchecklist

## Configuração do Projeto

O arquivo `vercel.json` contém as configurações necessárias:

```json
{
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist/public",
  "framework": "vite",
  "nodeVersion": "22.x"
}
```

## Build Local

Para fazer build localmente:

```bash
pnpm install
pnpm run build
```

Os arquivos de build estarão em `dist/public/`
