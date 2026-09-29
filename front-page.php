<?php get_header(); ?>

<div class="container mx-auto my-24">

    <?php get_template_part( 'template-parts/content-front', get_post_format() ); ?>

</div>

<?php
get_footer();