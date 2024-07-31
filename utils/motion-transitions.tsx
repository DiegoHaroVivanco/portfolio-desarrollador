export const transitionVariantsPage = {

    initial: {
        x: "100%",
        width: "100%"
    },
    animate:{
        x: '0%',
        width: '0%'
    },
    exit:{
        x: ['0%', '100%'],
        width: ['0%', '100%'],
    }

}

// transición para obj y animaciones
export const fadeIn = (pos: string) => {
    return{

        visible: {
            y: 0,
            x:0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [.25, .25, .25,  .75]
            }
        },
        hidden: {
            y: pos === 'bottom' ? -80 : 0,
            x: pos === 'right' ? 80 : 0,
            opacity: 0,
            transition: {
                type: "tween",
                duration: 1.4,
                delay: 0.5,
                ease: [.25, .25, .25,  .75]
  
            }

        }
    }

}