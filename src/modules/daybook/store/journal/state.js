
export default () =>({ //los states son funciones que se construyen de esta manera para conseguir que sean reactivos
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(),//esto va a generar unos números similares a 54615554654 basados en la fecha de hoy
            date: new Date().toDateString(),//esto creara algo parecido a sat 23, julio o algo así
            text: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se',
            picture: null,//https://www.imagen.png
        },
        {
            id: new Date().getTime()+1000,//esto va a generar unos números similares a 54615554654 basados en la fecha de hoy
            date: new Date().toDateString(),//esto creara algo parecido a sat 23, julio o algo así
            text: 'Lorem2 Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se',
            picture: null,//https://www.imagen.png
        },
        {
            id: new Date().getTime()+2000,//esto va a generar unos números similares a 54615554654 basados en la fecha de hoy
            date: new Date().toDateString(),//esto creara algo parecido a sat 23, julio o algo así
            text: 'Lorem3 Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se',
            picture: null,//https://www.imagen.png
        },
    ]
})


//El estate es reactivo, y cuando se cambia, notificamos a todos los componentes o a varios lugares que estén escuchando, los cambios producidos