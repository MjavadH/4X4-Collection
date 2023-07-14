let Glitch_Box = true; //if true Create random box on Screen
let Glitch_efx = true; //if true text has a glitch effect
let back_color_change = true; //if true background color is Changed
/*Particle script*/
particlesJS('particles-js', {
    'particles': {
        'number': {
            'value': 98,
            'density': {
                'enable': true,
                'value_area': 500
            }
        },
        'color': { 'value': '#00ffff'/*Shape color*/},
        'shape': {
            'type': 'circle', // Shape type(circle, edge, triangle, polygon, star)
            /*Shape Stroke*/
            'stroke': {
                'width': 0,
                'color': '#fff'
            },
        },
        /*Shape opacity*/
        'opacity': {
            'value': 0.7,
            'random': true,
            'anim': {
                'enable': true,
                'speed': 3,
                'opacity_min': 0.3,
                'sync': false
            }
        },
        /*Shape size*/
        'size': {
            'value': 2,
            'random': true,
            'anim': {
                'enable': true,
                'speed': 3,
                'size_min': 0.3,
                'sync': false
            }
        },
        /*Line*/
        'line_linked': {
            'enable': true,
            'distance': 125,
            'color': '#ff0000', /*Line Color*/
            'opacity': 0.7,
            'width': 1
        },
        'move': {
            'enable': true,
            'speed': 6,
            'direction': 'none', // Direction of move(none, top, right, left ,bottom)
            'random': false,
            'straight': false,
            'out_mode': 'bounce',
            'bounce': false,
            'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
            }
        }
    },
    'interactivity': {
        'detect_on': 'canvas',
        'events': {
            'onhover': {
                'enable': true,
                'mode': 'grab'
            },
            'onclick': {
                'enable': true,
                'mode': 'push'
            },
            'resize': true
        },
        'modes': {
            'grab': {
                'distance': 140,
                'line_linked': { 'opacity': 1 }
            },
            'repulse': {
                'distance': 200,
                'duration': 0.4
            },
            'push': { 'particles_nb': 4 },
            'remove': { 'particles_nb': 2 }
        }
    },
    'retina_detect': true
});
/*Text glitch effect*/
if (Glitch_efx){
    document.getElementById("text").className = "text glitch";
}
else {
    document.getElementById("text").className = "text";
}
/*Glitch Box*/
if (Glitch_Box){
    let bg = document.getElementById('glitchBox')
    let count = 10;
    for (let i = 0; i < count; i++){
        let glitchBox = document.createElement('div')
        glitchBox.className = 'box'
        bg.appendChild(glitchBox);
    }
    setInterval(function () {
        let glitch = document.getElementsByClassName('box');
        for (let i = 0; i < glitch.length; i++){
            glitch[i].style.left = Math.floor(Math.random()*100) + 'vw';
            glitch[i].style.top = Math.floor(Math.random()*100) + 'vh';
            glitch[i].style.width = Math.floor(Math.random()*300) + 'px';
            glitch[i].style.height = Math.floor(Math.random()*20) + 'px';
        }
    },500)
    /*Change background*/
    if (back_color_change){
        setInterval(function () {
            document.getElementById("particles-js").style.backgroundColor = "#fff" // color 1
        },8000)

        setInterval(function () {
            document.getElementById("particles-js").style.backgroundColor = "rgb(14,14,14)" // color 2
        },6000)
    }
}
