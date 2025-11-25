
async function dataFetcher() {
    try {
        const jsonContent = await fetch( '/assets/data/content.json' );
        // console.log( foobar );
        const data = await jsonContent.json();
        return data;
    } catch( error ) {
        console.warn( `😒 Nope: ${error}` );
    }
}

let data = dataFetcher();