class Tree {
  constructor(type, growthRate, height, lifeSpan, habitat, pic) {
    this.type = type;
    this.growthRate = growthRate;
    this.height = height;
    this.lifeSpan = lifeSpan;
    this.habitat = habitat;
    this.pic = pic;
  }
  get expandSection()
    {
      const expandSection = document.createElement("section");
      expandSection.classList.add("treeImage")
  
      expandSection.append(this("Type", this.type));
      expandSection.append(this("growthRate", this.growthRate));
      expandSection.append(this("Height", this.height));
      expandSection.append(this("Life Span", this.lifeSpan));
      expandSection.append(this("Habitat", this.habitat));
      expandSection.append(this("Tree", this.pic));
     
      return expandSection;
      
    }

  get treeSection()
  {
    const treeH3 = document.createElement("h3");
    treeH3.innerHTML = this.treeName;
    treeSection.append(treeH3);

    const imgSection = document.createElement("section");
    imgSection.classList.add("tree-image")

    const image = document.createElement("img");
    image.src = "images/" + this.image;
    treeSection.append(imgSection);
    

    return treeSection;
  }
  
  paragraph(title, info) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${title}</strong>: ${this.breed}`;
    return p;
  }

  picture(info) {
    const pic = document.createElement("img");
    pic.src = "images/" + info;
    return pic;
  }

  listItem(info) {
    const li = document.createElement("li");
    li.textContent = info;
    return li;
  }
  
  }

  // document.querySelectorAll(".items section").forEach((section) => {
  //   section.onclick = (e) => {
  //     const dialog = (document.getElementById("dialog").style.display = "block");
  //     document.querySelector("#dialog-content img").src =
  //       e.currentTarget.querySelector("img").src;
  
  //     const dialogDetails = document.querySelector("#dialog-details");
  //     dialogDetails.innerHTML = "";
  
  //     const h3 = document.createElement("h3");
  //     h3.innerHTML = e.currentTarget.querySelector("h3").innerHTML;
  //     dialogDetails.append(h3);
  
  //     const p = document.createElement("p");
  //     p.innerHTML = e.currentTarget.querySelector("p").innerHTML;
  //     dialogDetails.append(p);
  //   };
  
const trees = [];
trees.push(new Tree("Azalea", "1-2 ft.", "20 feet", 5, "small", "azalea.jpg"));
trees.push(new Tree("Red Maple", "Golden", "Yellow", 1, "med", "redmaple.jpg"));
trees.push(new Tree("Dogwood", "Pit Bull", "White", 3, "lg", "dogwood.jpg"));
trees.push(new Tree("Palmetto", "Pit Bull", "White", 3, "lg", "palmetto.jpg"));

trees.forEach((tree) => {
  document.getElementById("tree-list").append(tree.item);
});




  

  
