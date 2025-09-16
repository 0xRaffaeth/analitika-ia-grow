<?php get_header(); ?>

<!-- Hero Section -->
<section id="hero" class="hero-section" style="position: relative; min-height: 100vh; display: flex; align-items: center; justify-content: center; overflow: hidden; background: var(--gradient-hero); margin-top: 80px;">
    <!-- Background Image with Overlay -->
    <div style="position: absolute; inset: 0; z-index: 0;">
        <div style="position: absolute; inset: 0; background: var(--gradient-hero); opacity: 0.9;"></div>
    </div>

    <!-- Floating Elements -->
    <div class="animate-float" style="position: absolute; top: 5rem; left: 2.5rem;">
        <div style="width: 4rem; height: 4rem; background: hsl(var(--secondary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
            <span style="color: hsl(var(--secondary)); font-size: 2rem;">🎯</span>
        </div>
    </div>
    <div class="animate-float" style="position: absolute; top: 8rem; right: 4rem; animation-delay: 2s;">
        <div style="width: 3rem; height: 3rem; background: hsl(var(--primary-light) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
            <span style="color: hsl(var(--primary-light)); font-size: 1.5rem;">📈</span>
        </div>
    </div>
    <div class="animate-float" style="position: absolute; bottom: 8rem; left: 5rem; animation-delay: 4s;">
        <div style="width: 3.5rem; height: 3.5rem; background: hsl(var(--secondary-light) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(4px);">
            <span style="color: hsl(var(--secondary-light)); font-size: 1.75rem;">⚡</span>
        </div>
    </div>

    <!-- Main Content -->
    <div style="position: relative; z-index: 10; text-align: center; padding: 0 1.5rem;" class="container">
        <div style="max-width: 4xl; margin: 0 auto;">
            <!-- Badge -->
            <div class="badge badge-white" style="margin-bottom: 2rem;">
                <span style="font-size: 1.25rem;">⚡</span>
                <span>Especialistas em Tráfego Pago + IA</span>
            </div>

            <!-- Headline -->
            <h1 style="font-size: clamp(2.5rem, 8vw, 4.5rem); font-weight: 900; color: white; margin-bottom: 1.5rem; line-height: 1.1;">
                Mais clientes,
                <span class="text-gradient-secondary animate-pulse-soft">
                    menos esforço
                </span>
            </h1>

            <!-- Subtitle -->
            <p style="font-size: clamp(1.125rem, 3vw, 1.5rem); color: rgba(255, 255, 255, 0.9); margin-bottom: 2rem; max-width: 48rem; margin-left: auto; margin-right: auto; line-height: 1.6;">
                Tráfego pago e automações com <strong>inteligência artificial</strong> para o seu negócio crescer de forma escalável e previsível
            </p>

            <!-- CTAs -->
            <div style="display: flex; flex-direction: column; gap: 1rem; justify-content: center; align-items: center; margin-bottom: 3rem;">
                <a href="#contact" class="btn btn-cta" style="display: inline-flex; align-items: center; gap: 0.5rem;">
                    Fale com um especialista
                    <span>→</span>
                </a>
                <a href="#about" class="btn btn-outline">
                    <span>▶</span>
                    Ver como funciona
                </a>
            </div>

            <!-- Social Proof -->
            <div class="stats">
                <div class="stat">
                    <div class="stat-value">+200%</div>
                    <div class="stat-label">ROI médio</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat">
                    <div class="stat-value">150+</div>
                    <div class="stat-label">Clientes ativos</div>
                </div>
                <div class="stat-divider"></div>
                <div class="stat">
                    <div class="stat-value">R$ 50M+</div>
                    <div class="stat-label">Gerenciado em ads</div>
                </div>
            </div>
        </div>
    </div>

    <!-- Scroll Indicator -->
    <div style="position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); animation: bounce 2s infinite;">
        <div style="width: 1.5rem; height: 2.5rem; border: 2px solid rgba(255, 255, 255, 0.5); border-radius: 1.25rem; display: flex; justify-content: center;">
            <div style="width: 4px; height: 12px; background: rgba(255, 255, 255, 0.7); border-radius: 2px; margin-top: 8px; animation: pulse 2s infinite;"></div>
        </div>
    </div>
</section>

<!-- About Section -->
<section id="about" class="section-muted">
    <div class="container">
        <div class="grid grid-cols-2" style="align-items: center;">
            <!-- Left Content -->
            <div>
                <div class="badge badge-primary">
                    <span>🏆</span>
                    <span>Sobre a Analitika</span>
                </div>

                <h2 style="margin-bottom: 1.5rem;">
                    Especialistas em
                    <span class="text-gradient-hero">
                        crescimento digital
                    </span>
                </h2>

                <div style="display: flex; flex-direction: column; gap: 1.5rem; font-size: 1.125rem; color: hsl(var(--muted-foreground)); line-height: 1.6;">
                    <p>
                        A <strong style="color: hsl(var(--foreground));">Analitika Agency</strong> nasceu da necessidade de 
                        oferecer soluções realmente eficazes para pequenos negócios e e-commerces que 
                        buscam crescimento acelerado e sustentável.
                    </p>

                    <p>
                        Combinamos <strong style="color: hsl(var(--primary));">expertise em tráfego pago</strong> com 
                        o poder da <strong style="color: hsl(var(--secondary));">inteligência artificial</strong> para 
                        criar estratégias que não apenas geram leads, mas transformam visitantes em 
                        clientes fiéis.
                    </p>

                    <p>
                        Nossa missão é democratizar o acesso às melhores práticas de marketing digital, 
                        oferecendo tecnologia de ponta e estratégias personalizadas para empresas de 
                        todos os tamanhos.
                    </p>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-3" style="gap: 1.5rem; margin-top: 3rem; padding-top: 2rem; border-top: 1px solid hsl(var(--border));">
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 900; color: hsl(var(--primary)); margin-bottom: 0.5rem;">5+</div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">Anos de experiência</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 900; color: hsl(var(--secondary)); margin-bottom: 0.5rem;">150+</div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">Clientes atendidos</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 900; color: hsl(var(--primary)); margin-bottom: 0.5rem;">98%</div>
                        <div style="font-size: 0.875rem; color: hsl(var(--muted-foreground));">Taxa de satisfação</div>
                    </div>
                </div>
            </div>

            <!-- Right Content - Differentials -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
                <!-- IA Integrada -->
                <div class="card">
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: var(--gradient-primary); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: white; font-size: 1.5rem;">🤖</span>
                        </div>
                        <div>
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                                IA Integrada
                            </h3>
                            <p style="color: hsl(var(--muted-foreground)); line-height: 1.6; margin: 0;">
                                Usamos inteligência artificial para otimizar campanhas em tempo real e automatizar processos complexos.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Foco em ROI -->
                <div class="card">
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: var(--gradient-primary); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: white; font-size: 1.5rem;">🎯</span>
                        </div>
                        <div>
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                                Foco em ROI
                            </h3>
                            <p style="color: hsl(var(--muted-foreground)); line-height: 1.6; margin: 0;">
                                Cada real investido é monitorado. Nosso objetivo é sempre maximizar seu retorno sobre investimento.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Crescimento Escalável -->
                <div class="card">
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: var(--gradient-primary); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: white; font-size: 1.5rem;">📈</span>
                        </div>
                        <div>
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                                Crescimento Escalável
                            </h3>
                            <p style="color: hsl(var(--muted-foreground)); line-height: 1.6; margin: 0;">
                                Estratégias que crescem junto com seu negócio, preparadas para suportar expansão acelerada.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Suporte Dedicado -->
                <div class="card">
                    <div style="display: flex; align-items: flex-start; gap: 1rem;">
                        <div style="width: 3rem; height: 3rem; background: var(--gradient-primary); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: white; font-size: 1.5rem;">👥</span>
                        </div>
                        <div>
                            <h3 style="font-size: 1.25rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                                Suporte Dedicado
                            </h3>
                            <p style="color: hsl(var(--muted-foreground)); line-height: 1.6; margin: 0;">
                                Time especializado disponível para você, com comunicação transparente e relatórios detalhados.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services">
    <div class="container">
        <!-- Header -->
        <div style="text-align: center; margin-bottom: 4rem;">
            <div class="badge badge-primary">
                <span>⚡</span>
                <span>Nossos Serviços</span>
            </div>
            <h2 style="margin-bottom: 1.5rem;">
                Soluções completas para
                <span class="text-gradient-secondary">
                    acelerar suas vendas
                </span>
            </h2>
            <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); max-width: 48rem; margin: 0 auto;">
                Combinamos as melhores estratégias de tráfego pago com automações inteligentes 
                para gerar mais leads qualificados e aumentar suas conversões
            </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-3">
            <!-- Gestão de Tráfego Pago -->
            <div class="card" style="position: relative; overflow: hidden;">
                <div style="width: 4rem; height: 4rem; background: var(--gradient-primary); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                    <span style="color: white; font-size: 2rem;">🎯</span>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                    Gestão de Tráfego Pago
                </h3>
                <div style="display: inline-block; background: hsl(var(--secondary) / 0.2); color: hsl(var(--secondary)); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 500; margin-bottom: 1rem;">
                    Até 3x mais conversões
                </div>
                <p style="color: hsl(var(--muted-foreground)); line-height: 1.6; margin-bottom: 1.5rem;">
                    Google Ads, Meta Ads e TikTok Ads otimizados com IA para maximizar seu ROI e reduzir custos de aquisição.
                </p>

                <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Campanhas otimizadas com IA</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Análise preditiva de performance</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Segmentação inteligente</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Relatórios em tempo real</span>
                    </li>
                </ul>

                <a href="#contact" class="btn" style="width: 100%; justify-content: center; background: transparent; color: hsl(var(--foreground)); border: 1px solid hsl(var(--border));">
                    Saiba mais
                    <span>→</span>
                </a>
            </div>

            <!-- Automações com IA -->
            <div class="card" style="position: relative; overflow: hidden;">
                <div style="width: 4rem; height: 4rem; background: var(--gradient-primary); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                    <span style="color: white; font-size: 2rem;">🤖</span>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                    Automações com IA
                </h3>
                <div style="display: inline-block; background: hsl(var(--secondary) / 0.2); color: hsl(var(--secondary)); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 500; margin-bottom: 1rem;">
                    80% menos tempo manual
                </div>
                <p style="color: hsl(var(--muted-foreground)); line-height: 1.6; margin-bottom: 1.5rem;">
                    Chatbots inteligentes, automação de vendas e atendimento personalizado para escalar seu negócio 24/7.
                </p>

                <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Chatbots conversacionais</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Qualificação automática de leads</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Follow-up personalizado</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Integração com CRM</span>
                    </li>
                </ul>

                <a href="#contact" class="btn" style="width: 100%; justify-content: center; background: transparent; color: hsl(var(--foreground)); border: 1px solid hsl(var(--border));">
                    Saiba mais
                    <span>→</span>
                </a>
            </div>

            <!-- Consultoria Estratégica -->
            <div class="card" style="position: relative; overflow: hidden;">
                <div style="width: 4rem; height: 4rem; background: var(--gradient-primary); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; margin-bottom: 1rem;">
                    <span style="color: white; font-size: 2rem;">👥</span>
                </div>
                <h3 style="font-size: 1.5rem; font-weight: 700; color: hsl(var(--foreground)); margin-bottom: 0.5rem;">
                    Consultoria Estratégica
                </h3>
                <div style="display: inline-block; background: hsl(var(--secondary) / 0.2); color: hsl(var(--secondary)); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; font-weight: 500; margin-bottom: 1rem;">
                    Estratégia sob medida
                </div>
                <p style="color: hsl(var(--muted-foreground)); line-height: 1.6; margin-bottom: 1.5rem;">
                    Estratégias personalizadas baseadas em dados para acelerar o crescimento do seu negócio digital.
                </p>

                <ul style="list-style: none; padding: 0; margin: 0 0 1.5rem 0; display: flex; flex-direction: column; gap: 0.75rem;">
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Auditoria completa</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Planejamento estratégico</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Mentoria especializada</span>
                    </li>
                    <li style="display: flex; align-items: center; gap: 0.75rem;">
                        <div style="width: 1.25rem; height: 1.25rem; background: hsl(var(--primary) / 0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                            <span style="color: hsl(var(--primary)); font-size: 0.75rem;">📈</span>
                        </div>
                        <span style="color: hsl(var(--foreground));">Acompanhamento semanal</span>
                    </li>
                </ul>

                <a href="#contact" class="btn" style="width: 100%; justify-content: center; background: transparent; color: hsl(var(--foreground)); border: 1px solid hsl(var(--border));">
                    Saiba mais
                    <span>→</span>
                </a>
            </div>
        </div>

        <!-- CTA -->
        <div style="text-align: center; margin-top: 4rem;">
            <a href="#contact" class="btn btn-cta">
                Quero uma proposta personalizada
                <span>→</span>
            </a>
        </div>
    </div>
</section>

<!-- Contact Section -->
<section id="contact" class="section-muted">
    <div class="container">
        <div style="text-align: center; margin-bottom: 4rem;">
            <div class="badge badge-primary">
                <span>🚀</span>
                <span>Oferta Especial</span>
            </div>
            <h2 style="margin-bottom: 1.5rem;">
                Agende uma reunião gratuita e
                <span class="text-gradient-secondary">
                    dobre suas vendas
                </span>
            </h2>
            <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); max-width: 48rem; margin: 0 auto;">
                Descubra como nossos clientes aumentaram suas vendas em até 300% em apenas 90 dias
            </p>
        </div>

        <div class="grid grid-cols-3" style="margin-bottom: 3rem;">
            <div style="text-align: center;">
                <div style="width: 4rem; height: 4rem; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                    <span style="color: white; font-size: 1.5rem;">🔍</span>
                </div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Auditoria Gratuita</h3>
                <p style="color: hsl(var(--muted-foreground));">Análise completa das suas campanhas atuais</p>
            </div>
            <div style="text-align: center;">
                <div style="width: 4rem; height: 4rem; background: var(--gradient-secondary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                    <span style="color: white; font-size: 1.5rem;">📋</span>
                </div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Estratégia Personalizada</h3>
                <p style="color: hsl(var(--muted-foreground));">Plano sob medida para o seu negócio</p>
            </div>
            <div style="text-align: center;">
                <div style="width: 4rem; height: 4rem; background: var(--gradient-primary); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
                    <span style="color: white; font-size: 1.5rem;">🎯</span>
                </div>
                <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.5rem;">Próximos Passos</h3>
                <p style="color: hsl(var(--muted-foreground));">Roadmap claro para implementação</p>
            </div>
        </div>

        <div style="text-align: center;">
            <a href="#" class="btn btn-cta" style="margin-bottom: 1rem;">
                Agendar reunião gratuita
                <span>→</span>
            </a>
            <p style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">
                ⏰ Oferta limitada para os primeiros 5 clientes
            </p>
        </div>
    </div>
</section>

<?php get_footer(); ?>