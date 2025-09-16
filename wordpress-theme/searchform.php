<form role="search" method="get" action="<?php echo home_url('/'); ?>" style="display: flex; gap: 0.5rem; max-width: 400px; margin: 0 auto;">
    <input 
        type="search" 
        placeholder="O que você está procurando?" 
        value="<?php echo get_search_query(); ?>" 
        name="s" 
        style="flex: 1; padding: 0.75rem 1rem; border: 1px solid hsl(var(--border)); border-radius: var(--radius); background: hsl(var(--background)); color: hsl(var(--foreground)); font-size: 1rem;"
    />
    <button 
        type="submit" 
        class="btn btn-primary"
        style="padding: 0.75rem 1.5rem; white-space: nowrap;"
    >
        <span>🔍</span>
        Buscar
    </button>
</form>