

Arena1 = function (game) {

    // Appel des variables nécéssaires
    this.game = game;
    var scene = game;
    //position d'apparition du joueur dans le niveau;
    this.spawn = new BABYLON.Vector3(0, 15 * 13, 0);
    //Vitesse du joueur dans le niveau
    this.speed = 1.2;
    var music2 = new BABYLON.Sound(
        "Music", "assets/sons/music.mp3", scene, null, {
        loop: true,
        autoplay: true
    }
    )
    this.music = music2;

    for(let i =0; i<15; i++){
        var building = BABYLON.MeshBuilder.CreateBox("box", {height: 200, width: 90, depth: 40}, scene);
        building.position= new BABYLON.Vector3(i*300,0,200);
        var materialBuilding = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
        materialBuilding.diffuseTexture = new BABYLON.Texture("assets/images/building.jpg", scene);
        materialBuilding.diffuseTexture.uScale = 1.0;
        materialBuilding.diffuseTexture.vScale = 1.0;
        building.material= materialBuilding;
    }


    
    var plane = BABYLON.MeshBuilder.CreatePlane("plane", {height:50, width: 5000}, scene);
    plane.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD);
    plane.position=new BABYLON.Vector3(2500,-100,150);
    var materialRoad = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    materialRoad.diffuseTexture = new BABYLON.Texture("assets/images/road.jpg", scene);
    materialRoad.diffuseTexture.uScale = 100.0;
    materialRoad.diffuseTexture.vScale = 1.0;
    plane.material= materialRoad;


     //Material pour normal box
     var materialNormalBox = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
     materialNormalBox.diffuseTexture = new BABYLON.Texture("assets/images/grass.jpg", scene);
     materialNormalBox.diffuseTexture.uScale = 1.0;
     materialNormalBox.diffuseTexture.vScale = 1.0;
     scene.materialNormalBox = materialNormalBox;

    //MESH DE FIN - Ramene au menu
    this.end = BABYLON.MeshBuilder.CreateBox("box1", { size: 50 }, scene);
    this.end.position= new BABYLON.Vector3(5050,0,0);
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 50, 0), scene);	
    light.intensity = 0.75	
	    
    scene.mapEngine = new MapEngine(scene, "D")

    params = {"trigger":-1,"normalCubesProbability":1000,"pattern":[-1,0,1],"minWidth":3}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":800,"normalCubesProbability":950,"pattern":[0],"minWidth":1,"change":80}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":4000,"normalCubesProbability":1000,"pattern":[0,1],"minWidth":1,"change":20,"maxWidth":2}
    scene.mapEngine.addParamsConfiguration(params)
    params = {"trigger":5000,"normalCubesProbability":1,"pattern":[-1,0,1],"minWidth":1,"change":0}
    scene.mapEngine.addParamsConfiguration(params)
    


    scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction({ trigger: BABYLON.ActionManager.OnEveryFrameTrigger },
        function () {
            updateMap(scene)

        }
    ));
    return this


}