document.addEventListener("DOMContentLoaded", function() {
const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            const button = document.querySelector('.Avada-Faqs_Button');
            if (button) {
                button.classList.remove('Avada-Faqs_Button--size-55px');
                button.classList.add('Avada-Faqs_Button--size-70px');
                observer.disconnect();
            }
        }
    }
});
});
observer.observe(document.body, {
    childList: true,
    subtree: true,
});   