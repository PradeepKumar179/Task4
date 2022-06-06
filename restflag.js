const getCountries = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://restcountries.com/v3.1/all");
    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
            const countries = xhr.response;
            for (i = 0 ; i<countries.length; i++){
                    console.log("The country name is ",countries[i].name.common , " and the flag is ", countries[i].flags.svg ) ;
            }
    };
};
getCountries(); 