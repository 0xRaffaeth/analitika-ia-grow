# Tema WordPress - Analitika Agency

Este é um tema WordPress personalizado baseado no design moderno da Analitika Agency, uma agência de marketing digital especializada em tráfego pago e automações com IA.

## 🎨 Design System

O tema utiliza um design system moderno com:
- **Cores principais**: Azul corporativo (#4F93FF) e Laranja vibrante (#FF6A3A)
- **Tipografia**: Inter (Google Fonts)
- **Gradientes**: Combinações harmoniosas de azul e laranja
- **Animações**: Transições suaves e efeitos hover elegantes
- **Responsividade**: Design totalmente adaptável para mobile, tablet e desktop

## 📁 Estrutura dos Arquivos

### Arquivos Principais
- `style.css` - Estilos principais com design system completo
- `functions.php` - Funções do tema e configurações
- `index.php` - Template padrão
- `front-page.php` - Página inicial personalizada
- `header.php` - Cabeçalho do site
- `footer.php` - Rodapé do site

### Templates Específicos
- `page.php` - Template para páginas
- `single.php` - Template para posts individuais
- `404.php` - Página de erro 404
- `searchform.php` - Formulário de busca

## 🚀 Instalação

1. **Download dos arquivos**: Baixe todos os arquivos do tema
2. **Criação da pasta**: Crie uma pasta chamada `analitika-agency` em `/wp-content/themes/`
3. **Upload**: Faça upload de todos os arquivos para a pasta criada
4. **Ativação**: No admin do WordPress, vá em Aparência > Temas e ative o tema "Analitika Agency"

## ⚙️ Configuração Inicial

### 1. Logo Personalizado
- Vá em **Personalizar > Identidade do Site**
- Faça upload do logo da sua agência
- Recomendado: 300x85px (PNG com fundo transparente)

### 2. Menus
- Vá em **Aparência > Menus**
- Crie um menu principal com os links:
  - Início (#hero)
  - Sobre (#about)
  - Serviços (#services)
  - Contato (#contact)
- Atribua ao local "Menu Principal"

### 3. Página Inicial
- Vá em **Configurações > Leitura**
- Selecione "Uma página estática"
- Escolha a página "Início" como página inicial

### 4. Widgets (Opcional)
- Vá em **Aparência > Widgets** para configurar sidebars

## 🎯 Funcionalidades

### Seções da Página Inicial
1. **Hero Section**: Banner principal com CTA
2. **About Section**: Sobre a agência com diferenciais
3. **Services Section**: Cards dos serviços oferecidos
4. **Contact Section**: Formulário de contato e oferta especial

### Recursos Inclusos
- ⚡ Design responsivo e moderno
- 🎨 Sistema de cores profissional
- 🚀 Animações CSS suaves
- 📱 Mobile-first approach
- 🔍 SEO otimizado
- ♿ Acessibilidade básica
- 📝 Blog integrado
- 💬 Área de comentários
- 🔍 Sistema de busca

## 🛠️ Personalização

### Cores
Edite as variáveis CSS no arquivo `style.css`:
```css
:root {
    --primary: 217 91% 60%;      /* Azul principal */
    --secondary: 25 95% 53%;     /* Laranja secundário */
    /* ... outras variáveis */
}
```

### Conteúdo
- **Textos**: Edite o arquivo `front-page.php`
- **Imagens**: Substitua as imagens na pasta `/assets/`
- **Links**: Atualize os links de contato no `footer.php`

### Funcionalidades Extras
Para adicionar formulários de contato, recomendamos:
- **Contact Form 7** (plugin gratuito)
- **Gravity Forms** (plugin premium)

## 📊 SEO e Performance

### Otimizações Incluídas
- Meta tags otimizadas
- Estrutura HTML semântica
- Carregamento otimizado de fontes
- CSS e JS minificados
- Imagens responsivas

### Plugins Recomendados
- **Yoast SEO** - Otimização para motores de busca
- **W3 Total Cache** - Cache e performance
- **Smush** - Otimização de imagens
- **Contact Form 7** - Formulários de contato

## 🎨 Customização de Cores

### Variáveis CSS Disponíveis
```css
/* Cores principais */
--primary: 217 91% 60%;
--primary-light: 217 91% 70%;
--primary-dark: 217 91% 50%;

--secondary: 25 95% 53%;
--secondary-light: 25 95% 63%;
--secondary-dark: 25 95% 43%;

/* Gradientes */
--gradient-hero: linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(25 95% 53%) 100%);
--gradient-primary: linear-gradient(135deg, hsl(217 91% 60%) 0%, hsl(217 91% 70%) 100%);
--gradient-secondary: linear-gradient(135deg, hsl(25 95% 53%) 0%, hsl(25 95% 63%) 100%);
```

## 📱 Responsividade

O tema é totalmente responsivo e se adapta a:
- 📱 **Mobile**: 320px - 768px
- 📟 **Tablet**: 768px - 1024px
- 💻 **Desktop**: 1024px+
- 🖥️ **Large Desktop**: 1440px+

## 🔧 Suporte e Atualizações

### Como Obter Suporte
- Para dúvidas técnicas, consulte a documentação do WordPress
- Para customizações específicas, considere contratar um desenvolvedor WordPress

### Backup Importante
- Sempre faça backup do site antes de fazer alterações
- Use plugins como **UpdraftPlus** para backups automáticos

## 📝 Changelog

### Versão 1.0
- Lançamento inicial do tema
- Design system completo
- Todas as seções principais implementadas
- Responsividade completa
- SEO básico otimizado

## 📜 Licença

Este tema foi desenvolvido especificamente para a Analitika Agency. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para agências de marketing digital que querem impressionar seus clientes desde o primeiro clique.**