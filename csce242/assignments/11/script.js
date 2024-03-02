class Tree {
  constructor(title, type, growthRate, height, lifeSpan, habitat, pic) {
    this.title = title;
    this.type = type;
    this.growthRate = growthRate;
    this.height = height;
    this.lifeSpan = lifeSpan;
    this.habitat = habitat;
    this.pic = pic;
  }

  get item() {
    const section = document.createElement("section");
    section.classList.add("tree");

    const h3 = document.createElement("h3");
    h3.innerHTML = this.title;
    section.append(h3);

    const arrow = document.createElement("a");
    arrow.href = "#";
    arrow.innerHTML = "&#x2964;";
    arrow.classList.add("arrow");
    h3.append(arrow);
    arrow.onclick = this.expandContract;

    const columns = document.createElement("section");
    columns.classList.add("columns");
    section.append(columns);

    const imageSection = document.createElement("section");
    columns.append(imageSection);
    imageSection.append(this.picture(this.pic));

    const moreSection = document.createElement("section");
    moreSection.classList.add("hidden", "more");
    moreSection.append(this.paragraph("Type", this.type));
    moreSection.append(this.paragraph("Growth Rate", this.growthRate));
    moreSection.append(this.paragraph("height", this.height));
    moreSection.append(this.paragraph("Life Span", this.lifeSpan));
    moreSection.append(this.paragraph("Habitat", this.habitat));
    columns.append(moreSection);

    return section;
  }

  expandContract(e) {
    const section = e.currentTarget
      .closest("section.tree")
      .querySelector(".more");

    if (section.classList.contains("hidden")) {
      e.currentTarget.innerHTML = "&#x2962;";
    } else {
      e.currentTarget.innerHTML = "&#x2964;";
    }

    section.classList.toggle("hidden");
  }

  paragraph(title, info) {
    const p = document.createElement("p");
    p.innerHTML = `<strong>${title}</strong>: ${this.type}`;
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

const trees = [];
trees.push(new Tree("Coco", "Morkie", "Black", 5, "small", "azalea.jpg"));
trees.push(new Tree("Sam", "Golden", "Yellow", 1, "med", "redmaple.jpg"));
trees.push(new Tree("Gerald", "Pit Bull", "White", 3, "lg", "dogwood.jpg"));
trees.push(new Tree("Gerald", "Pit Bull", "White", 3, "lg", "palmetto.jpg"));

trees.forEach((tree) => {
  document.getElementById("tree-list").append(tree.item);
});
