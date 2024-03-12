function setActiveCarouselImage(carousel, imgs, index) {
    for (const child of imgs) {
        // console.debug(child);
        if (child == imgs[index]) {
            child.style.display = "inline";
            continue;
        }
        child.style.display = "none"; 
    }

    carousel.customData.imageIndex = index;
}

const carousels = Array.from(document.getElementsByClassName("carousel"));

for (const carousel of carousels) {
    carousel.customData = { imageIndex: 0 };
    const imgs = Array.from(Array.from(carousel.getElementsByClassName("carousel-images"))[0].children);
            console.debug(imgs);
    setActiveCarouselImage(carousel, imgs, carousel.customData.imageIndex);

    let leftButton = Array.from(carousel.getElementsByClassName("carousel-button-left"))[0];
    leftButton.onclick = (e) => {
        console.log("left");
        let nextIndex = carousel.customData.imageIndex - 1;
        if (nextIndex < 0) { nextIndex = imgs.length - 1; }
        console.log(nextIndex);
        setActiveCarouselImage(carousel, imgs, nextIndex);
    };
    console.debug(leftButton);

    let rightButton = carousel.getElementsByClassName("carousel-button-right")[0];
    rightButton.onclick = (e) => {
        console.log("right");
        let nextIndex = carousel.customData.imageIndex + 1;
        if (nextIndex > imgs.length - 1) { nextIndex = 0; }
        console.log(nextIndex);
        console.log(carousel.children);
        setActiveCarouselImage(carousel, imgs, nextIndex);
    };
    console.debug(rightButton);
}