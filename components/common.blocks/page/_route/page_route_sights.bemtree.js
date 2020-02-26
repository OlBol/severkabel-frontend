// block( 'page' ).mod( 'route', 'sights' )( {
//   content: {
//     block: 'sight',
//   }
// });

block( 'page' ).mod( 'route', 'sights' )( {
  route: node => {
    const articles = node.data.api[ 0 ].data.result;

    return [
      {
        block: 'page',
        elem: 'wrapper',
        content: articles.map( item => ( {
          block: 'sight',
          item,
        }
        ) ),
      },
    ]
  },
} );
