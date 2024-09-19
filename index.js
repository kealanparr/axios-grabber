import axios from 'axios';
import https from 'https';
import fs from 'fs';

const run = () => {
    const httpsAgent = new https.Agent({
      ca: fs.readFileSync("/etc/ssl/cert.pem")
    })
    
    axios.get('https://www.google.co.uk', { httpsAgent }).then(function (response) {
      // handle success
      console.log(response);
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
}

run()
