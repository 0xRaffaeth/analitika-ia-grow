<?php
// Função para enfileirar estilos e scripts
function analitika_enqueue_assets() {
    // Enfileirar o CSS principal
    wp_enqueue_style('analitika-style', get_stylesheet_uri());
    
    // Enfileirar fontes do Google
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap', false);
}
add_action('wp_enqueue_scripts', 'analitika_enqueue_assets');

// Suporte a recursos do tema
function analitika_theme_support() {
    // Adicionar suporte a título dinâmico
    add_theme_support('title-tag');
    
    // Adicionar suporte a logo personalizado
    add_theme_support('custom-logo', array(
        'height'      => 85,
        'width'       => 300,
        'flex-height' => true,
        'flex-width'  => true,
    ));
    
    // Adicionar suporte a imagens destacadas
    add_theme_support('post-thumbnails');
    
    // Adicionar suporte a menus
    add_theme_support('menus');
    
    // Adicionar suporte a HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
}
add_action('after_setup_theme', 'analitika_theme_support');

// Registrar menus
function analitika_register_menus() {
    register_nav_menus(array(
        'primary' => 'Menu Principal',
        'footer'  => 'Menu do Rodapé',
    ));
}
add_action('init', 'analitika_register_menus');

// Customizar excerpt
function analitika_excerpt_length($length) {
    return 30;
}
add_filter('excerpt_length', 'analitika_excerpt_length');

function analitika_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'analitika_excerpt_more');

// Registrar sidebars/widgets
function analitika_widgets_init() {
    register_sidebar(array(
        'name'          => 'Sidebar Principal',
        'id'            => 'main-sidebar',
        'description'   => 'Adicione widgets aqui.',
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h3 class="widget-title">',
        'after_title'   => '</h3>',
    ));
    
    register_sidebar(array(
        'name'          => 'Footer Widgets',
        'id'            => 'footer-widgets',
        'description'   => 'Widgets para o rodapé.',
        'before_widget' => '<div id="%1$s" class="footer-widget %2$s">',
        'after_widget'  => '</div>',
        'before_title'  => '<h4 class="footer-widget-title">',
        'after_title'   => '</h4>',
    ));
}
add_action('widgets_init', 'analitika_widgets_init');

// Customizar o login do WordPress
function analitika_login_styles() {
    wp_enqueue_style('analitika-login', get_template_directory_uri() . '/style.css');
}
add_action('login_enqueue_scripts', 'analitika_login_styles');

// Adicionar classes CSS customizadas ao body
function analitika_body_classes($classes) {
    if (is_front_page()) {
        $classes[] = 'front-page';
    }
    return $classes;
}
add_filter('body_class', 'analitika_body_classes');

// Remover versão do WordPress do head (segurança)
remove_action('wp_head', 'wp_generator');

// Otimizações de performance
function analitika_remove_wp_block_library_css() {
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('wc-blocks-style');
}
add_action('wp_enqueue_scripts', 'analitika_remove_wp_block_library_css', 100);

// Funcionalidade para limpar o header
remove_action('wp_head', 'rsd_link');
remove_action('wp_head', 'wlwmanifest_link');
remove_action('wp_head', 'wp_shortlink_wp_head');

// Adicionar suporte a campos customizados
function analitika_add_custom_fields() {
    if (function_exists('acf_add_local_field_group')) {
        acf_add_local_field_group(array(
            'key' => 'group_hero_section',
            'title' => 'Seção Hero',
            'fields' => array(
                array(
                    'key' => 'field_hero_title',
                    'label' => 'Título Principal',
                    'name' => 'hero_title',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_hero_subtitle',
                    'label' => 'Subtítulo',
                    'name' => 'hero_subtitle',
                    'type' => 'textarea',
                ),
                array(
                    'key' => 'field_hero_cta_text',
                    'label' => 'Texto do Botão CTA',
                    'name' => 'hero_cta_text',
                    'type' => 'text',
                ),
                array(
                    'key' => 'field_hero_cta_url',
                    'label' => 'URL do Botão CTA',
                    'name' => 'hero_cta_url',
                    'type' => 'url',
                ),
            ),
            'location' => array(
                array(
                    array(
                        'param' => 'page_template',
                        'operator' => '==',
                        'value' => 'front-page.php',
                    ),
                ),
            ),
        ));
    }
}
add_action('init', 'analitika_add_custom_fields');

// Hook de ativação do tema
function analitika_theme_activation() {
    // Criar página inicial se não existir
    if (!get_page_by_title('Início')) {
        wp_insert_post(array(
            'post_title'   => 'Início',
            'post_content' => 'Página inicial da Analitika Agency',
            'post_status'  => 'publish',
            'post_type'    => 'page',
        ));
    }
    
    // Definir página inicial como front page
    $front_page = get_page_by_title('Início');
    if ($front_page) {
        update_option('show_on_front', 'page');
        update_option('page_on_front', $front_page->ID);
    }
}
add_action('after_switch_theme', 'analitika_theme_activation');
?>