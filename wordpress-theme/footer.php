<footer style="background-color: hsl(var(--foreground)); color: hsl(var(--background)); position: relative;">
    <!-- Main Footer -->
    <div class="container" style="padding: 4rem 1.5rem;">
        <div class="grid grid-cols-4" style="gap: 2rem;">
            <!-- Company Info -->
            <div style="grid-column: span 2;">
                <div style="margin-bottom: 1.5rem;">
                    <?php if (has_custom_logo()) : ?>
                        <?php the_custom_logo(); ?>
                    <?php else : ?>
                        <h3 style="color: hsl(var(--background)); margin-bottom: 0.5rem;"><?php bloginfo('name'); ?></h3>
                    <?php endif; ?>
                    <p style="color: rgba(255, 255, 255, 0.8); line-height: 1.6; max-width: 400px;">
                        Especialistas em tráfego pago e automações com inteligência artificial 
                        para acelerar o crescimento de pequenos negócios e e-commerces.
                    </p>
                </div>

                <!-- Contact Info -->
                <div style="display: flex; flex-direction: column; gap: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 2.5rem; height: 2.5rem; background: hsl(var(--primary) / 0.2); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
                            <span style="color: hsl(var(--primary));">✉</span>
                        </div>
                        <div>
                            <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem; margin: 0;">Email</p>
                            <p style="color: hsl(var(--background)); font-weight: 500; margin: 0;">contato@analitikaagency.com</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 2.5rem; height: 2.5rem; background: hsl(var(--secondary) / 0.2); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
                            <span style="color: hsl(var(--secondary));">📱</span>
                        </div>
                        <div>
                            <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem; margin: 0;">WhatsApp</p>
                            <p style="color: hsl(var(--background)); font-weight: 500; margin: 0;">(11) 99999-9999</p>
                        </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="width: 2.5rem; height: 2.5rem; background: hsl(var(--primary) / 0.2); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center;">
                            <span style="color: hsl(var(--primary));">📍</span>
                        </div>
                        <div>
                            <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem; margin: 0;">Localização</p>
                            <p style="color: hsl(var(--background)); font-weight: 500; margin: 0;">São Paulo, SP</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Services Links -->
            <div>
                <h4 style="color: hsl(var(--background)); margin-bottom: 1.5rem; font-size: 1.25rem;">Serviços</h4>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li><a href="#services" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Google Ads</a></li>
                    <li><a href="#services" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Meta Ads</a></li>
                    <li><a href="#services" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">TikTok Ads</a></li>
                    <li><a href="#services" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Automações com IA</a></li>
                    <li><a href="#services" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Consultoria Estratégica</a></li>
                </ul>
            </div>

            <!-- Company Links -->
            <div>
                <h4 style="color: hsl(var(--background)); margin-bottom: 1.5rem; font-size: 1.25rem;">Empresa</h4>
                <ul style="list-style: none; padding: 0; margin: 0 0 2rem 0; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li><a href="#about" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Sobre nós</a></li>
                    <li><a href="#testimonials" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Cases de sucesso</a></li>
                    <li><a href="#contact" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Contato</a></li>
                    <li><a href="#blog" style="color: rgba(255, 255, 255, 0.8); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.8)'">Blog</a></li>
                </ul>

                <!-- Social Media -->
                <div>
                    <h5 style="color: hsl(var(--background)); font-weight: 600; margin-bottom: 1rem;">Redes Sociais</h5>
                    <div style="display: flex; gap: 0.75rem;">
                        <a href="#" style="width: 2.5rem; height: 2.5rem; background: var(--gradient-primary); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; transition: var(--transition-smooth); text-decoration: none;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            <span style="color: white;">📷</span>
                        </a>
                        <a href="#" style="width: 2.5rem; height: 2.5rem; background: var(--gradient-primary); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; transition: var(--transition-smooth); text-decoration: none;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            <span style="color: white;">💼</span>
                        </a>
                        <a href="#" style="width: 2.5rem; height: 2.5rem; background: var(--gradient-primary); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; transition: var(--transition-smooth); text-decoration: none;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">
                            <span style="color: white;">📺</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bottom Footer -->
    <div style="border-top: 1px solid rgba(255, 255, 255, 0.2);">
        <div class="container" style="padding: 1.5rem; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
            <p style="color: rgba(255, 255, 255, 0.6); font-size: 0.875rem; margin: 0;">
                © <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. Todos os direitos reservados.
            </p>
            <div style="display: flex; gap: 1.5rem; font-size: 0.875rem;">
                <a href="#" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.6)'">
                    Política de Privacidade
                </a>
                <a href="#" style="color: rgba(255, 255, 255, 0.6); text-decoration: none; transition: var(--transition-smooth);" onmouseover="this.style.color='hsl(var(--secondary))'" onmouseout="this.style.color='rgba(255, 255, 255, 0.6)'">
                    Termos de Uso
                </a>
            </div>
        </div>
    </div>

    <!-- Scroll to Top Button -->
    <button onclick="scrollToTop()" class="back-to-top" style="position: fixed; bottom: 2rem; right: 2rem; z-index: 1000; width: 3rem; height: 3rem; border-radius: 50%; background: var(--gradient-secondary); color: white; border: none; cursor: pointer; box-shadow: var(--shadow-glow); transition: var(--transition-smooth);" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
        ↑
    </button>
</footer>

<script>
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<?php wp_footer(); ?>
</body>
</html>