/**
 * Rassemble les differentes scenes et les fait tourner
 * @author Clement Poueyto
 */
Game = function (canvasId) {

    // Canvas et engine défini ici
    var canvas = document.getElementById(canvasId)
    var engine = new BABYLON.Engine(canvas, true)
    // On initie la scène avec une fonction associé à l'objet Game
    var scene = new createScene(engine)
    this.scene = scene

    // on initie le menu de jeu pour selectionner le niveau
    var menu = new createMenuScene(engine, canvasId)

    var loaded = false

    function loop () {
        if (loaded == false && menu.begin == true && menu.level != -1) {
            scene.createLevel(menu.level, menu.decor)//charge le niveau correspondant au level
            loaded = true // le niveau a été chargé
            menu.dispose()
            var fpsLabel = document.getElementById('fpsLabel')
            fpsLabel.innerHTML = engine.getFps().toFixed() + ' fps'
        }
        display(scene)

    }

    var options = new BABYLON.SceneOptimizerOptions(60, 2000)
    options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 1))

    // Optimizer
    var optimizer = new BABYLON.SceneOptimizer(scene, options)
    // Permet au jeu de tourner en boucle
    engine.runRenderLoop(function () {
        if (loaded == false && menu.begin == true && menu.level != -1) {
            scene.createLevel(menu.level, menu.decor)//charge le niveau correspondant au level
            loaded = true // le niveau a été chargé
            menu.dispose()
        }
        display(scene)
        var fpsLabel = document.getElementById('fpsLabel')
        fpsLabel.innerHTML = engine.getFps().toFixed() + ' fps'
    })

    // Ajuste la vue 3D si la fenetre est agrandie ou diminuée
    window.addEventListener('resize', function () {
        if (engine) {
            engine.resize()
        }
    }, false)

    //selectionne l'affichage du menu ou du niveau
    function display (scene) {
        if (menu.begin == true) {
            scene.render()
            if (scene.end == true) {
                /*loaded=false; //doit charger un niveau
                menu.begin=false; //doit ramener sur le menu
                scene.end=false; // doit quitter la scene de jeu
                menu=new createMenuScene(engine,canvasId);*/
                window.location = 'index.html'
                return
            }
        } else {
            menu.render()
        }
    }

    function limitLoop (fn, fps) {

        // Use var then = Date.now(); if you
        // don't care about targetting < IE9
        var then = new Date().getTime()

        // custom fps, otherwise fallback to 60
        var interval = 1000 / fps
        var fps = []

        return (function loop (time) {
            requestAnimationFrame(loop)

            // again, Date.now() if it's available
            var now = new Date().getTime()
            var delta = now - then

            if (delta > interval - interval / 10) {
                // Update time
                // now - (delta % interval) is an improvement over just
                // using then = now, which can end up lowering overall fps
                then = now - (delta % interval)
                fps.push(1000 / delta)

                // call the fn
                fn()
            }
            if (fps.length == 20) {
                var average = 0
                fps.forEach(function (v, i) {
                    average += v
                })
                var fpsLabel = document.getElementById('fpsLabel')
                fpsLabel.innerHTML = Math.floor(average / 20) + ' fps'
                fps = []
            }
        }(0))
    }

}
// Page entièrement chargé, on lance le jeu
document.addEventListener('DOMContentLoaded', function () {
    new Game('renderCanvas')
}, false)
