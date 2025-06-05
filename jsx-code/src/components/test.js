
import Papa from 'papaparse';
async function fetchAndParseCsv(csvPath) {
    const fs = await import('fs/promises');
    const csvText = await fs.readFile(csvPath, 'utf8');
    // const csvText = await response.text();

  const results = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

//   return results.data; // returns array of objects (rows)
  const data = results.data.map(row => new Map(Object.entries(row)));
    return data; // returns array of Maps
}


// Example usage
// fetchAndParseCsv('JTM Info.csv').then(data => {
//   console.log(data);
// }).catch(error => {
//   console.error('Error fetching or parsing CSV:', error);
// });
export { fetchAndParseCsv };