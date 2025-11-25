// Function for fetching data from content.json

async function dataFetcher() {
    try {
        const jsonContent = await fetch( '/assets/data/content.json' );
        const dataObj = await jsonContent.json();
        return dataObj.data
    } catch( error ) {
        console.warn( `😒 Nope: ${error}` );
    }
}


