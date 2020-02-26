block( 'logo' ).elem( 'icon' ).replace()( node => {
  node.data.api.settings.logo = '';

  return {
    block: 'image',
    mix: { block: node.block, elem: node.elem },

  // url: node._urlFor( node.data.api.settings.logo ).url(),
  }
} );
