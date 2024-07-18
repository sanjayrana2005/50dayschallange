document.addEventListener('DOMContentLoaded', () => {
    const tooltipIcons = document.querySelectorAll('.tooltip-icon');
    const tooltipContainer = document.querySelector('.tooltip-container');

    tooltipIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            let color;
            if (icon.classList.contains('mongoDB')) color = '#47A248';
            if (icon.classList.contains('expressjs')) color = '#ffffff';
            if (icon.classList.contains('reactjs')) color = '#61dafb';
            if (icon.classList.contains('nodejs')) color = '#95ee37';
            tooltipContainer.style.borderColor = color;
        });

        icon.addEventListener('mouseleave', () => {
            tooltipContainer.style.borderColor = 'white';
        });
    });
});
