import axios from 'axios';

const run = () => {
    axios.get('https://www.google.co.uk').then(function (response) {
      // handle success
      console.log(response);
    }).catch(function (error) {
      // handle error
      console.log(error);
    })
}

run()