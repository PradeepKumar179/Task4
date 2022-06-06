const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
            const countries = xhr.response;
            for (i = 0 ; i<countries.length; i++){
                    console.log(`Country name: ${countries[i].name.common}, 
Region: ${countries[i].region},
Sub Region: ${countries[i].subregion},
Population: ${countries[i].population}.`) ;
            }
    };
};
getCountries(); 