import { reactive } from 'vue';
import axios from 'axios';

export const store = reactive(
    {
        baseUrl:"http://127.0.0.1:8000/api/",
        urlTypology: "apiTypology",
        typology: [],
        loading: false,

        getTypology() {
            this.loading = true;
            axios.get(this.baseUrl + this.urlTypology)
            .then(response => {
                this.typology = response.data.results;
                this.loading = false;
                console.log(this.typology);
            })
        }
    },
    
)