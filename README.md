# IMBOX - Site Imobiliário Estático

**Site 100% estático para GitHub Pages**

## 🚀 Deploy no GitHub Pages

1. Faça upload de todos os arquivos para um repositório GitHub
2. Ative o GitHub Pages nas configurações do repositório
3. Selecione a branch principal como fonte
4. Seu site estará disponível em: `https://seu-usuario.github.io/seu-repositorio/`

## 📁 Estrutura

```
/
├── index.html              # Página principal
├── property-1.html        # Detalhes imóvel 1
├── property-2.html        # Detalhes imóvel 2
├── property-3.html        # Detalhes imóvel 3
├── property-4.html        # Detalhes imóvel 4
├── property-5.html        # Detalhes imóvel 5
├── property-6.html        # Detalhes imóvel 6
├── sitemap.xml            # Sitemap SEO
├── robots.txt             # Configuração de crawlers
├── css/
│   └── style.css          # Estilos CSS
└── js/
    ├── data.js            # Dados dos imóveis
    └── main.js            # Lógica JavaScript
```

## ✨ Funcionalidades

- ✅ Site 100% estático (HTML/CSS/JS)
- ✅ Compatível com GitHub Pages
- ✅ Design responsivo (mobile/desktop)
- ✅ SEO otimizado
- ✅ Integração WhatsApp
- ✅ Filtros de imóveis (Venda/Aluguel/Rural)
- ✅ Páginas de detalhes
- ✅ Galeria de imagens

## 📝 Como Adicionar Novos Imóveis

1. Edite o arquivo `js/data.js`
2. Adicione um novo objeto no array `properties`
3. Execute o script Python para gerar a nova página de detalhes (ou crie manualmente)
4. Atualize o `sitemap.xml`

## 🌎 Domínio Customizado

Para usar domínio próprio (imbox.com.br):

1. Adicione arquivo `CNAME` na raiz com o conteúdo: `imbox.com.br`
2. Configure os DNS do seu domínio:
   ```
   A     185.199.108.153
   A     185.199.109.153
   A     185.199.110.153
   A     185.199.111.153
   ```

## 📞 Contato

WhatsApp: (19) 97163-6969

---

© 2025 IMBOX - Todos os direitos reservados