Decor4 = function (scene) {

    var skybox = BABYLON.MeshBuilder.CreateBox('skyBox', { size: 6000.0 }, scene)
    skybox.infiniteDistance = true;
    var skyboxMaterial = new BABYLON.StandardMaterial('skyBox', scene)
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/sky/skybox', scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
    skybox.material = skyboxMaterial


    var ground = BABYLON.MeshBuilder.CreatePlane("plane", { height: 600, width: 5500 }, scene);
    ground.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD);
    ground.position = new BABYLON.Vector3(2500, -110, 0);
    //Material pour le sol
    var groundMaterial = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("assets/images/decor4/stade.jpg", scene);
    groundMaterial.diffuseTexture.uScale = 4.0;
    groundMaterial.diffuseTexture.vScale = 2.0;
    ground.material = groundMaterial;
    
    var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 10, 0), scene);


}