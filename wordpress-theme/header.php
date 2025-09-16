<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title><?php wp_title('|', true, 'right'); ?><?php bloginfo('name'); ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>

<header class="header" style="position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid hsl(var(--border)); padding: 1rem 0;">
    <div class="container" style="display: flex; justify-content: space-between; align-items: center;">
        <div class="logo">
            <?php if (has_custom_logo()) : ?>
                <?php the_custom_logo(); ?>
            <?php else : ?>
                <a href="<?php echo home_url(); ?>" style="font-size: 1.5rem; font-weight: 900; color: hsl(var(--primary)); text-decoration: none;">
                    <?php bloginfo('name'); ?>
                </a>
            <?php endif; ?>
        </div>
        
        <nav class="main-nav" style="display: flex; gap: 2rem; align-items: center;">
            <?php
            wp_nav_menu(array(
                'theme_location' => 'primary',
                'menu_class' => 'nav-menu',
                'container' => false,
                'fallback_cb' => false,
            ));
            ?>
            <a href="#contact" class="btn btn-cta" style="margin-left: 1rem;">
                Fale Conosco
            </a>
        </nav>
    </div>
</header>

<style>
.nav-menu {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav-menu a {
    color: hsl(var(--foreground));
    text-decoration: none;
    font-weight: 500;
    transition: var(--transition-smooth);
}

.nav-menu a:hover {
    color: hsl(var(--primary));
}

@media (max-width: 768px) {
    .main-nav {
        display: none;
    }
}
</style>