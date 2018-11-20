const params = {
  api: {
    baseURL: 'https://api.worldbank.org/v2/countries',
    format: 'json',
    indicatorCodes: {
      emission: 'EN.ATM.CO2E.KT',
      population: 'SP.POP.TOTL',
    },
  }
}

export default params;
