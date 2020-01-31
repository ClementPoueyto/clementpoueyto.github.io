/**
 * Definie la scene de jeu du menu
 * @author Clement Poueyto
 */
createMenuScene = function (engine, canvas) {
    // This creates a basic Babylon Scene object (non-mesh)
    var scene = new BABYLON.Scene(engine);

    // This creates and positions a free camera (non-mesh)
    var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);

    // This targets the camera to scene origin
    camera.setTarget(BABYLON.Vector3.Zero());
    scene.begin = false;
    // This attaches the camera to the canvas
    //camera.attachControl(canvas, true);
    scene.level = -1;
    scene.pointedLevel = -1;
    //Initialisation de la musique du menu
    /*var music = new BABYLON.Sound(
        "Music", "assets/sons/menu.mp3", scene, null, {
            loop: true,
            autoplay: true
        }
    );*/


    var materials= new MenuMaterials(scene);

    var listMesh = [];
    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    //lance la procedure de chargement de niveau
    function selectLevel(mesh) {
        scene.level = mesh.id;
        if (mesh.position.x == camera.position.x && mesh.position.z - 10 == camera.position.z) {
            scene.begin = true
            //music.stop();
            
        }
        camera.position = new BABYLON.Vector3(mesh.position.x, 5, mesh.position.z - 10);
    }

    function pointerOnLevel(mesh) {
        scene.pointedLevel = mesh.id;

    }

    function showSelectedLevel(mesh, lvl) {
        if (lvl == mesh.id) {
            mesh.material.emissiveColor = BABYLON.Color3.White();
            mesh.scaling = new BABYLON.Vector3(1.1, 1.1, 1.1);
        } else {
            mesh.material.emissiveColor = BABYLON.Color3.Black();
            mesh.scaling = new BABYLON.Vector3(1, 1, 1);
        }
    }

    //affiche un niveau
    function addMesh(id) {
        var box = BABYLON.Mesh.CreateBox(id, 1, scene);
        box.position = new BABYLON.Vector3(
            id * 1.5,
            -2,
            id * 1.5,
        );

        //ensemble d'observable
        box.material = new BABYLON.StandardMaterial("mat", scene);
        box.id = id;
        box.actionManager = new BABYLON.ActionManager(scene);
        box.material=materials[box.id];
        box.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPickTrigger,
                    parameter: ''
                },
                function () {
                    selectLevel(box);
                }
            )
        );
        box.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPointerOverTrigger,
                    parameter: ''
                },
                function () {
                    pointerOnLevel(box);
                }
            )
        );

        listMesh.push(box);


    };

    addMesh(0);
    addMesh(1);
    addMesh(2);


    var advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    advancedTexture.idealWidth = 1920;
    advancedTexture.idealHeight = 1080;
    advancedTexture.renderAtIdealSize = true
    //advancedTexture.isForeground = true;
    
    //texte : titre du jeu
    var text = new BABYLON.GUI.TextBlock("text2");
    text.textWrapping = true;
    //text.position = "absolute";
    text.width = "100%";
    text.height = "100%";
    text.text = `Geome3Dash`;
    text.color = "white";
    text.fontSize = "100px";
    text.fontFamily = 'Verdana';
    text.top =-250;
    advancedTexture.addControl(text);


    var image = new BABYLON.GUI.Image("but", "assets/images/keyQ.png");
    image.width = "40px";
    image.height = "40px";
    image.top=200;
    image.left=600;
    advancedTexture.addControl(image);
    var image2 = new BABYLON.GUI.Image("but", "assets/images/keyD.png");
    image2.width = "40px";
    image2.height = "40px";
    image2.top=200;
    image2.left=700;
    advancedTexture.addControl(image2);

    var image3 = new BABYLON.GUI.Image("but", "assets/images/keySpace.png");
    image3.width = "180px";
    image3.height = "30px";

    image3.top=250;
    image3.left=650;
    advancedTexture.addControl(image3);

    var image4 = new BABYLON.GUI.Image("but", "assets/images/keyS.png");
    image4.width = "40px";
    image4.height = "40px";
    image4.top=200;
    image4.left=650;
    advancedTexture.addControl(image4);

    var image5 = new BABYLON.GUI.Image("but", "assets/images/keyZ.png");
    image5.width = "40px";
    image5.height = "40px";
    image5.top=150;
    image5.left=650;
    advancedTexture.addControl(image5);


    //-------------------------KEY CONTROLL -------------------------------//

    scene.actionManager = new BABYLON.ActionManager(scene);


    scene.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
            {
                trigger: BABYLON.ActionManager.OnEveryFrameTrigger,
            },
            function () {
                for (let i = 0; i < listMesh.length; i++) {
                    showSelectedLevel(listMesh[i], scene.pointedLevel);
                }
            })
    );


    // Quand les touches sont relachés
    window.addEventListener("keyup", function (evt) {
        switch (evt.key) {
            case "q": //"Q"
            case "ArrowLeft":
                if (scene.pointedLevel > 0) {
                    scene.pointedLevel--;
                    camera.position = new BABYLON.Vector3(listMesh[scene.pointedLevel].position.x, 5, listMesh[scene.pointedLevel].position.z - 10);

                }
                break;
            case "d"://"D"
            case "ArrowRight":
                if (scene.pointedLevel < 2) {
                    scene.pointedLevel++;
                    camera.position = new BABYLON.Vector3(listMesh[scene.pointedLevel].position.x, 5, listMesh[scene.pointedLevel].position.z - 10);
                }
            break;
            case "Enter"://"Enter"
            case " "://"Space"
                if(scene.pointedLevel>=0){
                    selectLevel(listMesh[scene.pointedLevel]);}
            break;
        }
    }, false);


    return scene;
};
