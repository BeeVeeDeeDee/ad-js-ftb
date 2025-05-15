const express = require('express');
const cors = require('cors');
const app = express();
const port = 2727;

app.use(cors());

app.use(express.json());



app.get('/', (req, res) => {
  const records = [
    { id: 1, artist: 'Converge', album: 'All we love we leave behind.', year: 2012 },
    { id: 2, artist: 'Weed', album: 'Deserve', year: 2013 },
    { id: 3, artist: 'End It', album: 'Hatekeeper', year: 2022 }
  ];
  res.json({ records });
});

app.get('/locations', async (req, res) => {
  const locations = [
    { id: 1, name: 'Amsterdam', latitude: 52.3676, longitude: 4.9041 },
    { id: 2, name: 'Rotterdam', latitude: 51.9225, longitude: 4.4792 },
    { id: 3, name: 'Utrecht', latitude: 52.0907, longitude: 5.1214 },
    { id: 4, name: 'Eindhoven', latitude: 51.4416, longitude: 5.4697 },
    { id: 5, name: 'Groningen', latitude: 53.2194, longitude: 6.5665 }
  ];
  res.json({ locations });
  // try {
  //   const locations = await location.find(); // haal alle locations op uit de db
  //   res.json({ locations });
  // } catch (error) {
  //   res.status(500).json({ error: 'Internal Server Error' });
  // }

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
