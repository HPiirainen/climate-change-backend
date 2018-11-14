import axios from 'axios';

const sortByYear = (a, b) => {
  if (a.date > b.date) {
    return 1;
  }
  if (a.date < b.date) {
    return -1;
  }
  return 0;
}

const resolvers = {
  Query: {
    allCountries: () => {
      return axios.get('https://api.worldbank.org/v2/countries/?format=json&per_page=500')
        .then((response) => {
          if (response.data.length <= 1) {
            return [];
          }
          return response.data[1].filter(country => country.capitalCity !== '')
            .sort((a, b) => {
              if (a.name > b.name) {
                return 1;
              }
              if (a.name < b.name) {
                return -1;
              }
              return 0;
            });
        })
        .catch((error) => console.log(error))
    },
    country: (root, {iso2Code}) => {
      return axios.get(`https://api.worldbank.org/v2/countries/${iso2Code}/?format=json`)
        .then((response) => {
          if (response.data.length <= 1) {
            return {};
          }
          if (response.data[1].length === 0) {
            return {};
          }
          return response.data[1][0];
        })
        .catch((error) => console.log(error))
    }
  },
  Country: {
    populations: (country) => {
      return axios.get(`https://api.worldbank.org/v2/countries/${country.iso2Code}/indicators/SP.POP.TOTL?format=json&per_page=100`)
        .then((response) => {
          if (response.data.length <= 1) {
            return [];
          }
          return response.data[1].filter(population => population.value !== null)
            .sort(sortByYear);
        })
        .catch((error) => console.log(error))
    },
    emissions: (country) => {
      return axios.get(`https://api.worldbank.org/v2/countries/${country.iso2Code}/indicators/EN.ATM.CO2E.KT?format=json&per_page=100`)
        .then((response) => {
          if (response.data.length <= 1) {
            return [];
          }
          return response.data[1].filter(emission => emission.value !== null)
            .sort(sortByYear);
        })
        .catch((error) => console.log(error))
    }
  }
};

export default resolvers;
