const dice = [2, 4, 6, 8, 10, 12, 20, 100];
const getNumberImage = (forNumber: number) => {
    let image;
    switch (forNumber) {
        case 1:
            image = images.iconImage(IconNames.Skull);
            break;
        case 2:
            image = images.createImage(`
            . . # # #
            . . . . #
            . . # # #
            . . # . .
            . . # # #
            `);
            break;
        case 3:
            image = images.createImage(`
            . . # # #
            . . . . #
            . . . # #
            . . . . #
            . . # # #
            `);
            break;
        case 4:
            image = images.createImage(`
            . . # . #
            . . # . #
            . . # # #
            . . . . #
            . . . . #
            `);
            break;
        case 5:
            image = images.createImage(`
            . . # # #
            . . # . .
            . . # # #
            . . . . #
            . . # # #
            `);
            break;
        case 6:
            image = images.createImage(`
            . . # # #
            . . # . .
            . . # # #
            . . # . #
            . . # # #
            `);
            break;
        case 7:
            image = images.createImage(`
            . . # # #
            . . # . #
            . . . . #
            . . . . #
            . . . . #
            `);
            break;
        case 8:
            image = images.createImage(`
            . . # # #
            . . # . #
            . . # # #
            . . # . #
            . . # # #
            `);
            break;
        case 9:
            image = images.createImage(`
        . . # # #
        . . # . #
        . . # # #
        . . . . #
        . . # # #
    `);
            break;
        case 10:
            image = images.createImage(`
        # . # # #
        # . # . #
        # . # . #
        # . # . #
        # . # # #
    `);
            break;
        case 11:
            image = images.createImage(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
    `);
            break;
        case 12:
            image = images.createImage(`
        # . # # #
        # . . . #
        # . # # #
        # . # . .
        # . # # #
    `);
            break;
        case 13:
            image = images.createImage(`
        # . # # #
        # . . . #
        # . . # #
        # . . . #
        # . # # #
    `);
            break;
        case 14:
            image = images.createImage(`
        # . # . #
        # . # . #
        # . # # #
        # . . . #
        # . . . #
    `);
            break;
        case 15:
            image = images.createImage(`
        # . # # #
        # . # . .
        # . # # #
        # . . . #
        # . # # #
    `);
            break;
        case 16:
            image = images.createImage(`
        # . # # #
        # . # . .
        # . # # #
        # . # . #
        # . # # #
    `);
            break;
        case 17:
            image = images.createImage(`
        # . # # #
        # . # . #
        # . . . #
        # . . . #
        # . . . #
    `);
            break;
        case 18:
            image = images.createImage(`
        # . # # #
        # . # . #
        # . # # #
        # . # . #
        # . # # #
    `);
            break;
        case 19:
            image = images.createImage(`
        # . # # #
        # . # . #
        # . # # #
        # . . . #
        # . # # #
    `);
            break;
        case 20:
            image = images.createImage(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
    `);
            break;
            default:
            image = images.iconImage(IconNames.Cow);
            break;
    }
    return image;
};

let currentPos = dice.length - 2;
let currentDice: number;

const selectCurrentDice = () => {
    currentDice = dice[currentPos];
    basic.showString('d' + currentDice, 50);
};

input.onButtonPressed(Button.A, () => {
    currentPos--;
    if (currentPos < 0) {
        currentPos = dice.length - 1;
    }
    selectCurrentDice();
});

input.onButtonPressed(Button.B, () => {
    currentPos++;
    if (currentPos > dice.length - 1) {
        currentPos = 0;
    }
    selectCurrentDice();
});

input.onButtonPressed(Button.AB, () => {
    currentPos = dice.length - 2;
    selectCurrentDice();
});

input.onGesture(Gesture.Shake, () => {
    const rolled = Math.randomRange(1, currentDice);
    let displayImage;
    if (currentDice === 100) {
        basic.showString('Rolled ' + rolled, 50);
    } else {
        getNumberImage(rolled).showImage(0)
    }
});

input.onLogoEvent(TouchButtonEvent.Pressed, function() {
    basic.clearScreen();
});

selectCurrentDice();