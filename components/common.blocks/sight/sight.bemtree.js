block( 'sight' )(
  content()( ( node, ctx ) => {
    let titleImageCropped = '';
    const article = ctx.item;
    const lang = node.config.langs[ 0 ];

    if ( article.image ) {
      titleImageCropped = node._urlFor( article.image )
        .url();
    }

    return {
      content: [
        ( titleImageCropped || {} ) && {
          block: 'image',
          mix: { block: 'sight', elem: 'image' },
          url: titleImageCropped || '',
          alt: article.title[ lang ],
        },
        ( ( ( article || {} ).title || {} )[ lang ] || {} ) && {
          elem: 'title',
          title: article.title[ lang ],
        },
        ( ( ( article || {} ).description || {} )[ lang ] || {} ) && {
          elem: 'description',
          description: article.description ? article.description[ lang ] : '',
        },
        {
          block: 'link',
          content: lang && 'Посмотреть',
          to: '',
        },
      ],
    }
  }
  ) );

