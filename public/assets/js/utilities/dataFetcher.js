async function dataFetcher() {
    try {
        const jsonContent = await fetch( '/assets/data/content.json' );
        // console.log( foobar );
        const dataObj = await jsonContent.json();
        return dataObj.data
    } catch( error ) {
        console.warn( `😒 Nope: ${error}` );
    }
}


