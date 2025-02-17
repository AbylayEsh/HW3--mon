// MODAL
window.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector('.modal')
    const modalTriggerButton = document.querySelector('#btn-get')
    const modalCloseButton = document.querySelector('.modal_close')

    const openModal = () => {
        modal.style.display = 'block'
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimer)
    }
    const closeModal = () => {
        modal.style.display = 'none'
        document.body.style.overflow = ''
    }

    modalTriggerButton.onclick = openModal;
    modalCloseButton.onclick = closeModal;
    modal.onclick = (event) => {
        if (event.target === modal) {
            closeModal()
        }
    };

    const modalTimer = setTimeout(openModal, 10000);

    const showModalOnScroll = () => {
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalOnScroll);
        }
    };


    window.addEventListener('scroll', showModalOnScroll);
})

