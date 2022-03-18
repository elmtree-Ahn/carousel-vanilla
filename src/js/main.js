(() => {
    const $carouselUl = document.querySelector(".carousel-list");
    const $imageInput = document.querySelector("#image-upload-input");
    const $prevButton = document.querySelector(".prev-btn");
    const $nextButton = document.querySelector(".next-btn");



    const moveNext = () => {
        const $items = document.querySelectorAll(".carousel-item")

        if ($items.length > 1) {
            const $currentItem = document.querySelector(".now");
            const $next = $currentItem.nextElementSibling;

            $carouselUl.appendChild($currentItem);
            $currentItem.classList.remove("now");
            $next.classList.add("now")

        }
    }
    const movePrev = () => {
        const $items = document.querySelectorAll(".carousel-item")

        if ($items.length > 1) {
            const $currentItem = document.querySelector(".now");
            const $prev = $carouselUl.lastElementChild;

            $carouselUl.insertBefore($prev, $items[0]);
            $currentItem.classList.remove("now");
            $prev.classList.add("now")

        }
    }

    const createTag = (url) => {
        const liEl = document.createElement("li");
        const imgEl = document.createElement("img");
        liEl.classList.add("carousel-item");
        imgEl.src = url;
        liEl.appendChild(imgEl);

        const items = document.querySelectorAll(".carousel-item");
        items.forEach(item => {
            item.classList.remove("now")
        })
        liEl.classList.add("now")

        return liEl
    }

    const uploadImg = (value) => {
        const $items = document.querySelectorAll(".carousel-item");

        if (value.files) {
            const reader = new FileReader();

            reader.onload = e => {
                const imgUrl = e.target.result;
                $carouselUl.insertBefore(createTag(imgUrl), $items[0])
            }

            reader.readAsDataURL(value.files[0])
        }
    }


    $nextButton.addEventListener('click', moveNext);
    $prevButton.addEventListener('click', movePrev);
    $imageInput.addEventListener('change', e => {
        uploadImg(e.target);
    })
})();