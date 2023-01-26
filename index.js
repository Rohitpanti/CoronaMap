function updateMap() {

    console.log("The map is updated");
    fetch("/data.json")
        .then(response=>response.json())
        .then(resp=>{
            // console.log(resp.data); 
            resp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                cases = element.infected;

                if (cases > 250){
                    color = "rbg(255,0,0)";
                }
                else{
                    color = `rgb(${cases},0,0)`;
                }


                const marker = new mapboxgl.Marker({
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map);
        });
    })
}

let interval = 1000;
setInterval( updateMap , interval);
