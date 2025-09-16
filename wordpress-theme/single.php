<?php get_header(); ?>

<main style="margin-top: 80px; padding: 3rem 0;">
    <div class="container">
        <?php if (have_posts()) : ?>
            <?php while (have_posts()) : the_post(); ?>
                <article>
                    <header style="text-align: center; margin-bottom: 3rem;">
                        <div class="badge badge-primary" style="margin-bottom: 1rem;">
                            <span>📝</span>
                            <span><?php echo get_the_category_list(', '); ?></span>
                        </div>
                        
                        <h1 style="font-size: 3rem; font-weight: 900; color: hsl(var(--foreground)); margin-bottom: 1rem;">
                            <?php the_title(); ?>
                        </h1>
                        
                        <div style="display: flex; justify-content: center; align-items: center; gap: 2rem; color: hsl(var(--muted-foreground)); font-size: 0.875rem;">
                            <span>Por <?php the_author(); ?></span>
                            <span>•</span>
                            <span><?php echo get_the_date('d/m/Y'); ?></span>
                            <span>•</span>
                            <span><?php echo do_shortcode('[rt_reading_time]'); ?> min de leitura</span>
                        </div>
                        
                        <?php if (has_post_thumbnail()) : ?>
                            <div style="margin: 2rem 0;">
                                <?php the_post_thumbnail('large', array('style' => 'max-width: 100%; height: auto; border-radius: var(--radius); box-shadow: var(--shadow-soft);')); ?>
                            </div>
                        <?php endif; ?>
                    </header>

                    <div class="content" style="max-width: 800px; margin: 0 auto; font-size: 1.125rem; line-height: 1.8; color: hsl(var(--muted-foreground));">
                        <?php the_content(); ?>
                    </div>

                    <footer style="max-width: 800px; margin: 3rem auto 0; padding-top: 2rem; border-top: 1px solid hsl(var(--border));">
                        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
                            <div style="display: flex; align-items: center; gap: 1rem;">
                                <span style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">Compartilhar:</span>
                                <div style="display: flex; gap: 0.5rem;">
                                    <a href="https://www.facebook.com/sharer/sharer.php?u=<?php the_permalink(); ?>" target="_blank" class="btn" style="padding: 0.5rem; background: hsl(var(--primary) / 0.1); color: hsl(var(--primary));">
                                        📘
                                    </a>
                                    <a href="https://twitter.com/intent/tweet?url=<?php the_permalink(); ?>&text=<?php the_title(); ?>" target="_blank" class="btn" style="padding: 0.5rem; background: hsl(var(--primary) / 0.1); color: hsl(var(--primary));">
                                        🐦
                                    </a>
                                    <a href="https://www.linkedin.com/sharing/share-offsite/?url=<?php the_permalink(); ?>" target="_blank" class="btn" style="padding: 0.5rem; background: hsl(var(--primary) / 0.1); color: hsl(var(--primary));">
                                        💼
                                    </a>
                                </div>
                            </div>
                            
                            <?php if (get_the_tags()) : ?>
                                <div style="display: flex; align-items: center; gap: 0.5rem; flex-wrap: wrap;">
                                    <span style="color: hsl(var(--muted-foreground)); font-size: 0.875rem;">Tags:</span>
                                    <?php foreach (get_the_tags() as $tag) : ?>
                                        <span style="background: hsl(var(--muted)); color: hsl(var(--muted-foreground)); padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.75rem;">
                                            <?php echo $tag->name; ?>
                                        </span>
                                    <?php endforeach; ?>
                                </div>
                            <?php endif; ?>
                        </div>
                    </footer>
                </article>

                <?php if (comments_open() || get_comments_number()) : ?>
                    <div style="max-width: 800px; margin: 3rem auto 0;">
                        <?php comments_template(); ?>
                    </div>
                <?php endif; ?>

            <?php endwhile; ?>
        <?php else : ?>
            <div style="text-align: center; padding: 4rem 0;">
                <h1>Post não encontrado</h1>
                <p>Desculpe, o post que você está procurando não existe.</p>
                <a href="<?php echo home_url(); ?>" class="btn btn-primary" style="margin-top: 2rem;">
                    Voltar ao início
                </a>
            </div>
        <?php endif; ?>
    </div>
</main>

<?php get_footer(); ?>