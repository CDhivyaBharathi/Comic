AFRAME.registerComponent("cursor-listener",{
    schema:{
        selectedItemId : {default:"",type:"string"}
        
    },
    init:function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handleMouseEnterEvents:function(){
        this.el.addEventListener("mouseenter", () => {
         const id = this.el.getAttribute("id");
         const postersId=[
            "superman",
            "doctor-strange",
            "hulk",
            "batman"];

         if (postersId.includes(id)){
             const postersContainer = document.querySelector("#posters-container")
             postersContainer.setAttribute("cursor-listener",{
                 selectedItemId: id,
             });
             this.el.setAttribute("material",{color: "black"})
         }
        })
    },
    
    handleMouseLeaveEvents:function(){
        this.el.addEventListener("mouseleave", () => {
            const { selectedItemId } = this.data;
            if (selectedItemId) {
              const el = document.querySelector(`#${selectedItemId}`);
              const id = el.getAttribute("id");
              if (id == selectedItemId) {
                el.setAttribute("material", {
                  color: "#0077CC",
                  opacity: 1,
                });
              }
            }
          });
    },
   
  
   

})