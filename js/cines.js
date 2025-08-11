const getCines = async ()=> {
    const data = await fetch('https://oaemdl.es/cinestar_sweb_php/cines')
    if(data.status == 200) {
        const cines = await data.json()
        let html=`<br/><h1>Nuestros Cines</h1><br/>`
        cines.data.forEach(cine => {
            html+= `
				<div class="contenido-cine">
	        	    <img src="img/cine/${cine.id}.1.jpg" width="227" height="170"/>
            	   	<div class="datos-cine">
       				   	<h4>${cine.RazonSocial}</h4><br/>
                		<span>${cine.Direccion}<br/><br/>Teléfono: ${cine.Telefonos}</span>
                	</div>
                	<br/>
                	<a href="cine.html?id=${cine.id}">
                		<img src="img/varios/ico-info2.png" width="150" height="40"/>
                	</a>
				</div>

            `;
        });
        document.getElementById("contenido-interno").innerHTML = html;
    }
}

getCines()