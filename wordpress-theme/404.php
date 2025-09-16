<?php get_header(); ?>

<main style="margin-top: 80px; padding: 5rem 0;">
    <div class="container">
        <div style="text-align: center; max-width: 600px; margin: 0 auto;">
            <div style="font-size: 8rem; font-weight: 900; color: hsl(var(--primary)); margin-bottom: 1rem; line-height: 1;">
                404
            </div>
            
            <h1 style="font-size: 3rem; font-weight: 900; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                Página não encontrada
            </h1>
            
            <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); margin-bottom: 3rem; line-height: 1.6;">
                Ops! Parece que a página que você está procurando não existe mais ou foi movida para outro lugar.
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 1rem; align-items: center; margin-bottom: 3rem;">
                <a href="<?php echo home_url(); ?>" class="btn btn-cta">
                    <span>🏠</span>
                    Voltar ao início
                </a>
                
                <a href="javascript:history.back()" class="btn btn-outline" style="background: transparent; color: hsl(var(--foreground)); border: 1px solid hsl(var(--border));">
                    <span>←</span>
                    Página anterior
                </a>
            </div>
            
            <!-- Search Form -->
            <div style="background: hsl(var(--muted) / 0.3); padding: 2rem; border-radius: var(--radius); margin-bottom: 2rem;">
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem;">
                    Tente buscar pelo conteúdo:
                </h3>
                <?php get_search_form(); ?>
            </div>
            
            <!-- Popular Links -->
            <div style="text-align: left;">
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; text-align: center;">
                    Links úteis:
                </h3>
                <div class="grid grid-cols-2" style="gap: 1rem;">
                    <a href="#about" style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; background: var(--gradient-card); border-radius: var(--radius); text-decoration: none; color: hsl(var(--foreground)); transition: var(--transition-smooth);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <span>🏢</span>
                        <span>Sobre nós</span>
                    </a>
                    <a href="#services" style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; background: var(--gradient-card); border-radius: var(--radius); text-decoration: none; color: hsl(var(--foreground)); transition: var(--transition-smooth);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <span>⚡</span>
                        <span>Serviços</span>
                    </a>
                    <a href="#contact" style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; background: var(--gradient-card); border-radius: var(--radius); text-decoration: none; color: hsl(var(--foreground)); transition: var(--transition-smooth);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <span>📞</span>
                        <span>Contato</span>
                    </a>
                    <a href="#blog" style="display: flex; align-items: center; gap: 0.5rem; padding: 1rem; background: var(--gradient-card); border-radius: var(--radius); text-decoration: none; color: hsl(var(--foreground)); transition: var(--transition-smooth);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                        <span>📝</span>
                        <span>Blog</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>