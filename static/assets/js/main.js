function burgerMenu() {

}

function scrollSmooth() {
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }
}

function initSlider() {
    document.addEventListener('DOMContentLoaded', function () {
        const splide = new Splide('.splide', {
            type: 'loop',
            rewind: true,
            pagination: false,
            perPage: 3,
            breakpoints: {
                1200: {
                    perPage: 2,
                },
                756: {
                    perPage: 1,
                },
            },
            gap: '60px',
            arrows: false,
        })

        document.querySelector('.splide_next').addEventListener('click', e => {
            splide.go('+1')
        })

        document.querySelector('.splide_prev').addEventListener('click', e => {
            splide.go('-1')
        })

        const bar = splide.root.querySelector('.my-slider-progress-bar')
        splide.on('mounted move', function () {
            const count = window.innerWidth > 1200 ? 3 :  window.innerWidth > 756 ? 2 : 1
            const end = splide.Components.Controller.getEnd() + count
            const rate = Math.min((splide.index + 1) / end, 1)
            bar.style.width = String(100 * rate) + '%'
        })

        splide.mount()
    })
}

function initSelects() {
    const langFromArray = []
    const langToArray = []
    const typeArray = []

    $('#language_from option').each(function () {
        const img = $(this).attr("data-thumbnail")
        const text = this.innerText
        const value = $(this).val()
        const item = `<li class="d-flex justify-content-between w-100" data-value="${value}">
                    <div><img src="${img}" alt="icon"/><span>${text}</span></div>
                    <img src="./static/assets/images/svg/select-arrow.svg" alt="icon" class="select-arrow" style="width: 10px"/>
                  </li>`
        langFromArray.push(item)
    })

    $('#language_to option').each(function () {
        const img = $(this).attr("data-thumbnail")
        const text = this.innerText
        const value = $(this).val()
        const item = `<li class="d-flex justify-content-between w-100" data-value="${value}">
                    <div><img src="${img}" alt="icon"/><span>${text}</span></div>
                    <img src="./static/assets/images/svg/select-arrow.svg" class="select-arrow" alt="icon" style="width: 10px"/>
                  </li>`
        langToArray.push(item)
    })

    $('#type option').each(function () {
        const text = this.innerText
        const value = $(this).val()
        const item = `<li class="d-flex justify-content-between w-100" data-value="${value}">
                    <span>${text}</span>
                    <img src="./static/assets/images/svg/select-arrow.svg" class="select-arrow" alt="icon" style="width: 10px"/>
                  </li>`
        typeArray.push(item)
    })

    $('#languages_from_list').html(langFromArray)
    $('#languages_to_list').html(langToArray)
    $('#type_list').html(typeArray)

    //Set the button value to the first el of the array
    $('#change_select1').html(langFromArray[0]).attr('value', '1')
    $('#change_select2').html(langToArray[0]).attr('value', '1')
    $('#change_select3').html(typeArray[0]).attr('value', '1')

//change button stuff on click
    $('#languages_from_list li').click(function () {
        const img = $(this).find('img').attr("src")
        const value = $(this).attr('data-value')
        const text = this.innerText
        const item = `<li class="d-flex justify-content-between w-100" data-value="${value}">
                    <div><img src="${img}" alt="icon"/><span>${text}</span></div>
                    <img src="./static/assets/images/svg/select-arrow.svg" class="select-arrow" alt="icon" style="width: 10px"/>
                  </li>`
        $('#change_select1').html(item).attr('value', value)
        $("#list_1").toggle()
        $('#language_from').val(value)
    })

    $('#languages_to_list li').click(function () {
        const img = $(this).find('img').attr("src")
        const value = $(this).attr('data-value')
        const text = this.innerText
        const item = `<li class="d-flex justify-content-between w-100" data-value="${value}">
                    <div><img src="${img}" alt="icon"/><span>${text}</span></div>
                    <img src="./static/assets/images/svg/select-arrow.svg" class="select-arrow" alt="icon" style="width: 10px"/>
                  </li>`
        $('#change_select2').html(item).attr('value', value)
        $("#list_2").toggle()
        $('#language_to').val(value)
    })

    $('#type_list li').click(function () {
        const value = $(this).attr('data-value')
        const text = this.innerText
        const item = `<li class="d-flex justify-content-between w-100" data-value="${value}">
                    <span>${text}</span>
                    <img src="./static/assets/images/svg/select-arrow.svg" class="select-arrow" alt="icon" style="width: 10px"/>
                  </li>`
        $('#change_select3').html(item).attr('value', value)
        $("#list_3").toggle()
        $('#type').val(value)
    })

    $("#change_select1").click(function () {
        $("#list_1").toggle()
    })

    $("#change_select2").click(function () {
        $("#list_2").toggle()
    })

    $("#change_select3").click(function () {
        $("#list_3").toggle()
    })

    window.addEventListener('click', function (e) {
        if (!document.getElementById('change_select1').contains(e.target)) {
            $("#list_1").hide()
        }
        if (!document.getElementById('change_select2').contains(e.target)) {
            $("#list_2").hide()
        }
        if (!document.getElementById('change_select3').contains(e.target)) {
            $("#list_3").hide()
        }
    })

}

function firstForm() {
    const uppy = new Uppy.Uppy({
        locale: Uppy.locales.ru_RU,
        restrictions: {
            maxNumberOfFiles: 1,
        }
    })
    uppy.use(Uppy.Dashboard, {
        target: '#uppy',
        inline: true,
        allowMultipleUploadBatches: false,
        width: '524px',
        height: '200px',
        hideUploadButton: true,
        hideProgressAfterFinish: true,
        hideCancelButton: true,
        disableInformer: true,
        disableStatusBar: true,
        disableThumbnailGenerator: true,
        locale: {
            strings: {
                dropPasteFiles: `
        Перетащите документ сюда или %{browseFiles} его
        `
            }
        }
    })

    $('.price-form').submit((e) => {
        e.preventDefault()
        const file = uppy.getFiles()
        if ($('#language_from').val() !== $('#language_to').val()) {
            if (file.length) {
                const fileID = file[0].id
                const obj = {
                    name: $('#name').val(),
                    phone: $('#phone').val().replaceAll(' ', ''),
                    email: $('#email').val(),
                    language_from: $('#language_from').val(),
                    language_to: $('#language_to').val(),
                    type: $('#type').val(),
                    file: file[0],
                    social: $('input[name="fav_language"]:checked').val()
                }

                console.log(obj)
                $('.error-lang').addClass('d-none')
                $('.price-form')[0].reset()
                uppy.removeFile(fileID)
                $.magnificPopup.open({
                    items: {
                        src: '#modal'
                    },
                    type: 'inline'
                })
            }
        } else {
            $('.error-lang').removeClass('d-none')
        }

    })
}

function secondForm() {
    const uppy2 = new Uppy.Uppy({
        locale: Uppy.locales.ru_RU,
        restrictions: {
            maxNumberOfFiles: 1,
        }
    })
    uppy2.use(Uppy.Dashboard, {
        target: '#uppy2',
        inline: true,
        allowMultipleUploadBatches: false,
        width: '524px',
        height: '200px',
        hideUploadButton: true,
        hideRetryButton: true,
        hidePauseResumeButton: true,
        hideProgressAfterFinish: true,
        hideCancelButton: true,
        disableInformer: true,
        disableStatusBar: true,
        disableThumbnailGenerator: true,
        locale: {
            strings: {
                dropPasteFiles: `
        Перетащите документ сюда или %{browseFiles} его
        `
            }
        }
    })

    $('.cooperation-form').submit((e) => {
        e.preventDefault()
        const file = uppy2.getFiles()
        if (file.length) {
            const fileID = file[0].id
            $.magnificPopup.open({
                items: {
                    src: '#modal'
                },
                type: 'inline'
            })

            uppy2.removeFile(fileID)
        }
    })
}

$("#phone").inputmask({
    "mask": "+998 dd ddd dd dd"
});

$(".closeBtn").click(function () {
    $.magnificPopup.close()
})


burgerMenu()
scrollSmooth()
initSlider()
initSelects()
firstForm()
secondForm()







