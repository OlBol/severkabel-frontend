block( 'pockemon' )(
  content()( ( node, ctx ) => ( {
    content: [
      {
        elem: 'name',
        content: ctx.name,
      },
      {
        elem: 'slot',
        content: ctx.slot,
      },
      {
        block: 'image',
        mix: { block: 'pockemon', elem: 'image' },
        url: ctx.url,
        title: 'Все подробности на bem.info',
      },
    ],
  } )
  ) );
