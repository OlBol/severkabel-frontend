block( 'page' ).mod( 'route', 'thanks' )( {
  route: node => {
    const pockemonData = node.data.api[ 0 ].data.abilities;

    return [
      {
        content: [
          pockemonData.map( item => ( {
            block: 'pockemon',
            name: item.ability.name,
            url: item.ability.url,
            slot: item.slot,
          } ) ),
          {
            elem: 'layout',
          },
        ],
      },
    ]
  },
} );
