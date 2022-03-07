const delayedColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        console.log(newColor);
        doNext && doNext();
    }, delay);
}
//callback
//comment
delayedColorChange('red', 1000, () => {
    delayedColorChange('blue', 1000, () => {
        delayedColorChange('green', 1000, () => {
            delayedColorChange('yellow', 1000, () => {
                delayedColorChange('pink', 1000, () => {

                })
            })
        })
    })
});