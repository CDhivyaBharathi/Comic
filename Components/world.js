AFRAME.registerComponent("world",{
    
    init: function () {
        this.placesContainer = this.el
        this.cameraEl=document.querySelector("#camera")
        this.createCards()
    },
    createBorder: function (position, id) {
        const entityE1 = document.createElement('a-entity');
        entityE1.setAttribute("id", id)
        entityE1.setAttribute("position", position)
        entityE1.setAttribute("visible", true)
        entityE1.setAttribute("geometry", {
            primitive: "ring",
            radiusInner: 9,
            radiusOuter: 10,
        })
        entityE1.setAttribute("material", {
            color: "#0077CC",
            opacity: 1,
        });

        entityE1.setAttribute("cursor-listener",{})
        return entityE1

    },

    createThumbnail: function (item) {
        const entityE2 = document.createElement('a-entity');
        entityE2.setAttribute("visible", true)
        entityE2.setAttribute("geometry", {
            primitive: "circle",
            radius: 9
        })
        entityE2.setAttribute("material", {
            src: item.url
        })
        return entityE2 

    },

    createTitle: function (position, item) {
        const entityE3 = document.createElement('a-entity');
        
        entityE3.setAttribute("text", {
            font: "exo2bold",
            align: "center",
            width: 70,
            color: "#10ff00",
            value: item.title,
        });
        const elPosition = position;
        elPosition.y = -20;
        entityE3.setAttribute("position", elPosition);
        entityE3.setAttribute("visible", true)

        return entityE3

    },
    createCards:function(){
        const posterRef = [{
            id: "superman",
            title: "Superman",
            url: "./assets/posters/superman.jpeg"
        },
        {
            id: "doctor-strange",
            title: "Doctor Strange",
            url: "./assets/posters/doctorstrange.jpeg"
        },
        {
            id: "hulk",
            title: "Hulk",
            url: "./assets/posters/hulk.jpeg"
        },
        {
            id: "batman",
            title: "Batman",
            url: "./assets/posters/batman.jpeg"
        }]
     let previousXposition = -60
        for (var item of posterRef) {
            const posX = previousXposition + 25;
            const posY = 10;
            const posZ = -40
            const position = {
                x: posX,
                y: posY,
                z: posZ
            };

            const border1 = this.createBorder(position, item.id);
            const thumbnail1 = this.createThumbnail(item)
            const title1 = this.createTitle(position, item)

            border1.append(thumbnail1)
            border1.append(title1)

            previousXposition = posX;


            this.placesContainer.appendChild(border1);
        }

    }
})