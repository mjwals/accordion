document.addEventListener('DOMContentLoaded', function () {

    let accordionButtons = document.querySelectorAll('.accordion-button');

    accordionButtons.forEach(function (accordionButton) {
        accordionButton.addEventListener('click', function (event) {
            let targetAccordionButton = event.target;
            let targetAccordionButtonCaret = event.target.parentElement.querySelector('.caret');
            let targetAccordionPanel = event.target.nextElementSibling;

            // if targetAccordionPanel has a value (0) set in the css, fire the hidePanels function
            // this functions emptys the current maxHeight value (0) by setting it to null
            // now maxHeight doesn't have a value we go to the else part of the if statement
            // scrollHeight gets an elements height including padding - does not include border or margin
            // we update the value of maxHeight with the elements height
            // when we click another button we start again by clearing maxHeight by setting it to null
            if (targetAccordionPanel.style.maxHeight) {
                hidePanels();
            } else {
                showPanels(targetAccordionButton, targetAccordionButtonCaret, targetAccordionPanel);
            }
        });
    });

});

function hidePanels() {
    let getAccordionButtonActiveClasses = document.querySelectorAll('.active');
    let getAccordionButtonActiveCarets = document.querySelectorAll('.caret');
    let getAccordionPanels = document.querySelectorAll('.accordion-panel');

    getAccordionButtonActiveClasses.forEach(function (activeClass) {
        activeClass.classList.remove('active');
    });

    getAccordionButtonActiveCarets.forEach(function (getAccordionButtonActiveCaret) {
        getAccordionButtonActiveCaret.classList.remove('active');
    });

    getAccordionPanels.forEach(function (accordionPanel) {
        accordionPanel.style.maxHeight = null;
    });
}

function showPanels(targetAccordionButton, targetAccordionButtonCaret, targetAccordionPanel) {
    hidePanels();
    targetAccordionButton.classList.add('active');
    targetAccordionButtonCaret.classList.add('active');
    targetAccordionPanel.style.maxHeight = targetAccordionPanel.scrollHeight + 'px';
}