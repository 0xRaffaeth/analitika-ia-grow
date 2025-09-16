<?php get_header(); ?>

<main style="margin-top: 80px; padding: 3rem 0;">
    <div class="container">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article>
                    <header style="text-align: center; margin-bottom: 3rem;">
                        <h1 style="font-size: 3rem; font-weight: 900; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                            <?php the_title(); ?>
                        </h1>
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin-bottom: 2rem;">
                                <?php the_post_thumbnail('large', array('style' => 'max-width: 100%; height: auto; border-radius: var(--radius);')); ?>
                            </div>
                        <?php endif; ?>
                    </header>

                    <div class="content" style="max-width: 800px; margin: 0 auto; font-size: 1.125rem; line-height: 1.8; color: hsl(var(--muted-foreground));">
                        <?php the_content(); ?>
                    </div>
                </article>
            <?php endwhile; ?>
        <?php else : ?>
            <div style="text-align: center; padding: 4rem 0;">
                <h1>Página não encontrada</h1>
                <p>Desculpe, a página que você está procurando não existe.</p>
                <a href="<?php echo home_url(); ?>" class="btn btn-primary" style="margin-top: 2rem;">
                    Voltar ao início
                </a>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>