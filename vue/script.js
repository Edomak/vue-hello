// Stampare a schermo un messaggio all'interno di un h1, utilizzando i data.

// Bonus:
// Aggiungere alla pagina un'immagine, presa anch'essa da un data.

var app = new Vue (
    {
        el: "#root",
        data: {
            message: "Hello Vue!",
            vueImg: "vue.jpeg",
            vueImg: "vue2.png",
            colorClass: "green",
            visibilityClass: "hidden",
            colorButton: "color_button1"
        },
        methods: {
            changeEverythings: function () {
                if (this.vueImg == "vue.jpeg") {
                    this.vueImg = "vue2.png";
                    this.visibilityClass = "hidden";
                    this.colorClass = "green";
                    this.colorButton = "color_button1";
                } else {
                    this.vueImg = "vue.jpeg";
                    this.colorClass = "blue";
                    this.visibilityClass = "visible";
                    this.colorButton = "color_button2";
                }
            }
        }
    }
);