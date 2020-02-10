Decor3=function(scene){

    var skybox = BABYLON.MeshBuilder.CreateBox('skyBox', { size: 6000.0 }, scene)
    skybox.position = new BABYLON.Vector3(2000, 15 * 13, 0)
    var skyboxMaterial = new BABYLON.StandardMaterial('skyBox', scene)
    skyboxMaterial.backFaceCulling = false
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture('assets/sky/skybox', scene)
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0)
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0)
    skybox.material = skyboxMaterial


    var ground = BABYLON.MeshBuilder.CreatePlane("plane", {height:400, width: 5500}, scene);
    ground.rotate(BABYLON.Axis.X, Math.PI / 2, BABYLON.Space.WORLD);
    ground.position=new BABYLON.Vector3(2500,-110,0);
    //Material pour le sol
    var groundMaterial = new BABYLON.StandardMaterial("NormalBoxTexture", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("assets/images/decor3/water.jpg", scene);
    groundMaterial.diffuseTexture.uScale = 1000.0;
    groundMaterial.diffuseTexture.vScale = 100.0;
    ground.material = groundMaterial;
}