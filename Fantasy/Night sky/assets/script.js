// Move the background by changing the mouse position
let container = document.getElementById('particles-js');
/*Particle script*/
particlesJS('particles-js', {
    'particles': {
        'number': {
            'value': 25,
            'density': {
                'enable': true,
                'value_area': 300
            }
        },
        'color': {value: ['#01ffbb', '#d72323', '#fff'] /*Stars color*/},
        'shape': {
            'type': 'star',
        },
        'opacity': {
            'value': 0.7,
            'random': true,
        },
        'size': {
            'value': 1,
            'random': true,
        },
        'line_linked': {
            'enable': false,
        },
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'bubble'
            },
            'onclick': {
                'enable': true,
                'mode': 'push'
            },
            'resize': true
        },
        modes: {
            bubble: {
                distance: 50,
                size: 2,
                duration: 2,
                opacity: 2,
                speed: 3
            },
        }
    },
    'retina_detect': true
});